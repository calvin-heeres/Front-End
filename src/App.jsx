import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black font-sans p-6">
      {/* Header */}
      <header className="border-b border-gray-300 pb-4 mb-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Diensten
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welkom bij de Gemeente Amsterdam
        </h1>
        <p className="text-gray-700 mb-6">
          Hier vindt u informatie over onze diensten, het laatste nieuws en hoe
          u in contact kunt komen.
        </p>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Aantal klikken: {count}
        </button>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Gemeente Amsterdam. Alle rechten
        voorbehouden.
      </footer>
    </div>
  );
}

export default App;
