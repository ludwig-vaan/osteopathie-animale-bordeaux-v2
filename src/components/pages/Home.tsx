import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import smoothscroll from 'smoothscroll-polyfill';

import '../../styles/global.css';

import AnimalSection from '../sections/AnimalSection/AnimalSection';
import CarteCabinet from '../sections/CarteCabinet';
import Consultations from '../sections/Consultations';
import Contact from '../contact/Contact';
import DeroulementConsultation from '../sections/DeroulementConsultation';
import Footer from '../layout/Footer';
import Hero from '../sections/Hero';
import OsteopathieAnimale from '../sections/OsteopathieAnimale';
import Prix from '../sections/Prix';
import QuandConsulter from '../sections/QuandConsulter';
import QuiSuisJe from '../sections/QuiSuisJe';

const RECAPTCHA_KEY = '6LfWZ7YfAAAAAPD7Q4zlI2TZU_mYatG48lJ97JzM';

smoothscroll.polyfill();

export default function HomePage() {
  return (
    <div>
      <main id="root">
        <Hero />
        <AnimalSection id="animaux" />
        <Consultations />
        <CarteCabinet />
        <QuandConsulter id="quand-consulter" />
        <Prix id="tarifs" />
        <DeroulementConsultation />
        <OsteopathieAnimale id="osteopathie" />
        <QuiSuisJe />
        <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
          <Contact id="contact" />
        </GoogleReCaptchaProvider>
      </main>
      <Footer />
    </div>
  );
}
