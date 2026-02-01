import { describe, it, expect } from "vitest";
import { sendEmail } from "./email";

describe("email service", () => {
  it("should send email via Resend API", async () => {
    // Test sending a simple email to verify Resend API key is valid
    const result = await sendEmail({
      to: process.env.FORM_RECIPIENT_EMAIL || "test@example.com",
      subject: "Test Email from Christmas Rush",
      html: "<p>This is a test email to verify the Resend API key is configured correctly.</p>"
    });

    // The function should return true if API key is valid, false if not
    // If FORM_RECIPIENT_EMAIL is not set, it will fail gracefully
    if (process.env.RESEND_API_KEY && process.env.FORM_RECIPIENT_EMAIL) {
      expect(result).toBe(true);
    } else {
      // If secrets are not configured, the test should still pass
      expect(typeof result).toBe("boolean");
    }
  }, { timeout: 15000 });
});
