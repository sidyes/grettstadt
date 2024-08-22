export default function ThankYou() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Vielen Dank!</h1>
          <p className="text-gray-700 text-lg">
            Ihre Nachricht wurde erfolgreich gesendet. <br />
            Wir werden uns so schnell wie möglich bei Ihnen melden.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    );
  }
  