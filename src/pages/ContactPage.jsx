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
              <p className="text-gray-700">Project Management Bureau</p>
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
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
