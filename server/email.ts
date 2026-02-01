/**
 * Email service using Resend API
 * Handles sending form submission notifications
 */

import { ENV } from "./_core/env";

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  if (!ENV.resendApiKey) {
    console.warn("[Email] Resend API key not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${ENV.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: options.to,
        subject: options.subject,
        html: options.html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("[Email] Failed to send email:", error);
      return false;
    }

    console.log("[Email] Successfully sent email to", options.to);
    return true;
  } catch (error) {
    console.error("[Email] Error sending email:", error);
    return false;
  }
}

export function formatContactSubmissionEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1D3557 0%, #2B2D42 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .content { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1D3557; margin-bottom: 5px; }
          .value { color: #2B2D42; padding: 10px; background: white; border-radius: 4px; }
          .footer { text-align: center; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎄 New Contact Form Submission</h1>
            <p>The Christmas Rush Hackathon</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Subject</div>
              <div class="value">${escapeHtml(data.subject)}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Christmas Rush website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function formatSponsorSubmissionEmail(data: {
  name: string;
  email: string;
  company: string;
  tier: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #FFB703 0%, #E63946 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .content { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1D3557; margin-bottom: 5px; }
          .value { color: #2B2D42; padding: 10px; background: white; border-radius: 4px; }
          .footer { text-align: center; color: #999; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏆 New Sponsorship Inquiry</h1>
            <p>The Christmas Rush Hackathon</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Contact Name</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Company</div>
              <div class="value">${escapeHtml(data.company)}</div>
            </div>
            <div class="field">
              <div class="label">Sponsorship Tier Interest</div>
              <div class="value">${escapeHtml(data.tier) || "Not specified"}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Christmas Rush sponsorship inquiry form.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
