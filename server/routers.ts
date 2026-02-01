import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createSubmission, getSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendEmail, formatContactSubmissionEmail, formatSponsorSubmissionEmail } from "./email";
import { ENV } from "./_core/env";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  submissions: router({
    create: publicProcedure
      .input(z.object({
        type: z.enum(["sponsor_inquiry", "team_registration", "contact"]),
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        message: z.string().min(1),
        sponsorshipTier: z.string().optional(),
        teamSize: z.number().optional(),
        projectCategory: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          await createSubmission(input);
          
          // Send notification to owner
          const titleMap: Record<string, string> = {
            sponsor_inquiry: "New Sponsor Inquiry",
            team_registration: "New Team Registration",
            contact: "New Contact Form Submission"
          };
          
          // Send email notification
          if (ENV.formRecipientEmail) {
            let emailHtml = "";
            let subject = "";
            
            if (input.type === "contact") {
              subject = `New Contact Form Submission: ${input.message.substring(0, 30)}...`;
              emailHtml = formatContactSubmissionEmail({
                name: input.name,
                email: input.email,
                subject: input.message.substring(0, 50),
                message: input.message
              });
            } else if (input.type === "sponsor_inquiry") {
              subject = `New Sponsorship Inquiry from ${input.company || input.name}`;
              emailHtml = formatSponsorSubmissionEmail({
                name: input.name,
                email: input.email,
                company: input.company || "",
                tier: input.sponsorshipTier || "",
                message: input.message
              });
            }
            
            if (emailHtml && subject) {
              await sendEmail({
                to: ENV.formRecipientEmail,
                subject,
                html: emailHtml
              });
            }
          }
          
          // Also send notification to owner
          await notifyOwner({
            title: titleMap[input.type],
            content: `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`
          });
          
          return { success: true };
        } catch (error) {
          console.error("Failed to create submission:", error);
          throw new Error("Failed to submit form");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
