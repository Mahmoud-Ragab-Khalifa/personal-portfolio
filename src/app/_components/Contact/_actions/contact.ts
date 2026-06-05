"use server";

import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contact";

export const sendContactEmail = async (
  prevState: unknown,
  formData: FormData,
) => {
  const result = contactSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!result.success) {
    return {
      errors: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mahmoudragabkhalifaa@gmail.com",
      subject: `New Contact From ${result.data.name}`,
      replyTo: result.data.email,

      html: `
        <h2>New Contact Message</h2>

        <p>
          <strong>Name:</strong>
          ${result.data.name}
        </p>

        <p>
          <strong>Email:</strong>
          ${result.data.email}
        </p>

        <p>
          <strong>Message:</strong>
          ${result.data.message}
        </p>
      `,
    });

    return {
      status: 200,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "Failed to send message",
    };
  }
};
