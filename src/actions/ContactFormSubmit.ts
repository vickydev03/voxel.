"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleSubmit(formData: FormData) {
  console.log(process.env.RESEND_API_KEY,456)
  try {
    const name = formData.get("name") as string;
    const facility = formData.get("facility") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const type = formData.get("type") as string;

    if (!name || !facility || !email || !phone) {
      throw new Error("Missing required fields");
    }


    await resend.emails.send({
    from: "Voxel <support@voxelteleradiology.com>",
      to: email,
      
      subject: "New Consultation Request 🚀",
      html: `
        <h2>New Appointment Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Facility:</strong> ${facility}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${type}</p>
        <hr/>
        <p>Reply directly to this email to contact the client.</p>`,
        replyTo:email
    });

    // return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    // return { success: false };
  }
}
