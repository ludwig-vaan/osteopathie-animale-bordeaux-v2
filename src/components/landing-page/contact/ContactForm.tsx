import { useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import FormField from './FormField';

export default function ContactForm() {
  const [token, setToken] = useState('');

  const handleClear = () => {
    setTimeout(() => {
      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (form) form.reset();
    }, 2500);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form
          id="contactForm"
          name="contactForm"
          action="https://getform.io/f/da75be94-0820-485f-9074-e148844d89a7"
          target="_blank"
          method="POST"
          className="grid grid-cols-1 gap-y-6"
        >
          <FormField
            name="name"
            placeholder="Nom"
            type="text"
            autoComplete="name"
          />

          <FormField
            name="animal"
            placeholder="Nom de l'animal"
            type="text"
            autoComplete="name"
          />

          <FormField
            name="email"
            placeholder="Email"
            type="email"
            autoComplete="email"
          />

          <FormField
            name="phone"
            placeholder="Téléphone"
            type="tel"
            autoComplete="tel"
          />

          <FormField
            name="message"
            placeholder="Message"
            type="textarea"
            rows={4}
          />

          <input
            type="hidden"
            id="captchaResponse"
            name="g-recaptcha-response"
            value={token}
          />

          <GoogleReCaptcha
            onVerify={(token) => {
              setToken(token);
            }}
          />

          <button
            type="submit"
            onClick={handleClear}
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
