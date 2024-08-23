"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string>();
  const [error, setError] = useState<string>();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(undefined);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
        myForm.reset();
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Kontakt</h2>
      <form
        onSubmit={handleFormSubmit}
        name="contact"
        method="POST"
        className="space-y-4"
      >
        {/* Netlify Form Hidden Input */}
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-Mail Adresse
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Absenden
          </button>
        </div>
      </form>
      {status === "ok" && (
        <div className="alert">
          <p className="text-green-600">
            Ihre Nachricht wurde erfolgreich gesendet. <br />
            Wir werden uns so schnell wie möglich bei Ihnen melden.
          </p>
        </div>
      )}
      {status === "error" && <div className="text-red-600">{error}</div>}
    </div>
  );
}
