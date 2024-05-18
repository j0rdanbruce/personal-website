import emailjs from "@emailjs/browser";

export class EmailJS {
  constructor() {
    this.sendUrl = "https://api.emailjs.com/api/v1.0/email/send";
    this.data = {
      service_id: 'service_ke9mnii',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'WPoUEVHRHEyu7GjoG'
    }
  }

  sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_ke9mnii', )
  }
}