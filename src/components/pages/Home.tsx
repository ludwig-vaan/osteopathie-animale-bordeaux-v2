import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import smoothscroll from 'smoothscroll-polyfill';

import '../layout.css';

import AnimalSection from '../AnimalSection/AnimalSection';
import CarteCabinet from '../CarteCabinet';
import Consultations from '../Consultations';
import Contact from '../Contact';
import DeroulementConsultation from '../DeroulementConsultation';
import Footer from '../Footer';
import Hero from '../Hero';
import OsteopathieAnimale from '../OsteopathieAnimale';
import Prix from '../Prix';
import QuandConsulter from '../QuandConsulter';
import QuiSuisJe from '../QuiSuisJe';

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
