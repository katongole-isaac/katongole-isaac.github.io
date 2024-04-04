import emailjs from "@emailjs/browser";

emailjs.init({ publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY });

const sendEmail = (templateParams: { [x: string]: any }) =>
  emailjs.send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    templateParams
  );

export default sendEmail;
