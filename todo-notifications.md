# Todo - Form Submissions & Manus Notifications

## Database Schema
- [x] Add submissions table to drizzle/schema.ts (for sponsor inquiries and team registrations)
- [x] Run pnpm db:push to migrate

## Backend Implementation
- [x] Create database helper in server/db.ts for saving submissions
- [x] Add tRPC procedures in server/routers.ts for form submissions
- [ ] Integrate notifyOwner() helper for Manus notifications
- [ ] Write vitest tests for submission endpoints

## Frontend Implementation
- [x] Update Contact page with functional form
- [x] Add form submission handler with tRPC mutation
- [x] Add success/error toast notifications
- [x] Update Sponsors page modal with functional contact form

## Testing
- [x] Test sponsor inquiry form submission
- [ ] Test team registration form submission
- [ ] Verify Manus notifications are received
- [ ] Test error handling and validation


## Footer Navigation
- [ ] Create reusable Footer component with navigation links
- [ ] Add Footer to Home page
- [ ] Add Footer to About page
- [ ] Add Footer to Schedule page
- [ ] Add Footer to Sponsors page
- [ ] Add Footer to Contact page
- [ ] Add Footer to ProjectDetail page

## Email Notifications
- [ ] Request email configuration from user (SMTP credentials or email service)
- [ ] Set up email service integration (Nodemailer or SendGrid)
- [ ] Update form submission procedures to send emails
- [ ] Test email delivery for contact form submissions
- [ ] Test email delivery for sponsor inquiry submissions
- [ ] Verify email formatting and content

## Hosting Information
- [ ] Document self-hosting options (Railway, Render, Vercel)
- [ ] Provide deployment instructions
- [ ] Explain environment variable setup for email service
