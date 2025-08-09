"use server"

import { z } from "zod" // Import zod for validation

// Define a schema for your form data using zod
const contactFormSchema = z.object({
  name: z.string().min(1, "Full Name is required."),
  email: z.string().email("Invalid email address.").min(1, "Email is required."),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiryType: z.string().min(1, "Inquiry type is required."),
  message: z.string().min(1, "Message is required.").max(1000, "Message is too long."),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    inquiryType: formData.get("inquiryType"),
    message: formData.get("message"),
  }

  // Validate the form data
  const validatedFields = contactFormSchema.safeParse(data)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // --- Integration Point for Sending Message ---
  // Here you would integrate with a third-party service to send the message.
  // Examples:
  // 1. Send an Email: Use Nodemailer with a service like SendGrid, Mailgun, or AWS SES.
  //    Example (conceptual):
  //    import nodemailer from 'nodemailer';
  //    const transporter = nodemailer.createTransport({...});
  //    await transporter.sendMail({
  //      from: 'your-email@example.com',
  //      to: 'recipient-number@sms-gateway.com' or 'your-whatsapp-api-endpoint',
  //      subject: `New Inquiry from ${validatedFields.data.name}`,
  //      text: `Name: ${validatedFields.data.name}\nEmail: ${validatedFields.data.email}\nPhone: ${validatedFields.data.phone || 'N/A'}\nCompany: ${validatedFields.data.company || 'N/A'}\nInquiry Type: ${validatedFields.data.inquiryType}\nMessage: ${validatedFields.data.message}`,
  //    });
  //
  // 2. Send SMS: Use Twilio, Vonage, etc.
  //    Example (conceptual):
  //    import twilio from 'twilio';
  //    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  //    await client.messages.create({
  //      body: `New Inquiry: ${validatedFields.data.message} from ${validatedFields.data.name}`,
  //      from: process.env.TWILIO_PHONE_NUMBER,
  //      to: '+919075978141' // The "given number"
  //    });
  //
  // 3. Send WhatsApp Message (requires WhatsApp Business API setup):
  //    This is more complex and requires prior approval and setup with Meta.

  console.log("Contact Form Submission Data:", validatedFields.data)

  // Return a success response
  return {
    success: true,
    message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
  }
}
