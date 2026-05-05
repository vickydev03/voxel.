import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToAdmin({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return await resend.emails.send({
    from: "Website <onboarding@resend.dev>",
    to: "youradminemail@gmail.com", // 👈 YOUR EMAIL
    subject: "New Form Submission 🚀",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
}