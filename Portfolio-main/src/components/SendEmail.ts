import { Resend } from "resend";
import {redirect} from  'next/navigation'
import { portfolioConfig } from "@/config/portfolio.config";


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  if (!process.env.RESEND_API_KEY) {
    return {
      error: "Email service is not configured. Add RESEND_API_KEY to your .env file.",
    };
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: portfolioConfig.email,
    subject: `${name} From Contact Form.`,
    reply_to: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

return redirect('/')
 
  
};
