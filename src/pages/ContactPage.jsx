import React from "react";
import HeroSection from "../components/HeroSection";

const ContactPage = () => (
  <main>
    <HeroSection
      title="Contact"
      description="Heeft u vragen over onze projecten of wilt u meer informatie? Neem contact met ons op via onderstaand formulier of gebruik onze contactgegevens."
    />

    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Stuur ons een bericht</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Naam
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 bg-gray-100"
                placeholder="Uw naam"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 bg-gray-100"
                placeholder="Uw e-mailadres"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Onderwerp
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 bg-gray-100"
                placeholder="Onderwerp van uw bericht"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 bg-gray-100"
                placeholder="Uw bericht"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300 rounded"
              />
              <label
                htmlFor="agree"
                className="ml-2 block text-sm text-gray-900"
              >
                Ik ga akkoord met de privacy voorwaarden
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-auto flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
              >
                Versturen
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details and Map */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contactgegevens</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Bezoekadres
              </h3>
              <p className="text-gray-700">
                Project Management Bureau<br />
                Weesperstraat 432<br />
                1018 DN Amsterdam
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <p className="text-gray-700">Telefoon: 020 123 4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Openingstijden
              </h3>
              <p className="text-gray-700">Maandag t/m vrijdag</p>
            </div>
            {/* Google Maps Embed */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4753923658334!2d4.9092!3d52.3592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c3e87c3e8f%3A0x0!2sWeesperstraat%20432%2C%201018%20DN%20Amsterdam!5e0!3m2!1sen!2snl!4v1647881234567!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PMB Amsterdam Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
