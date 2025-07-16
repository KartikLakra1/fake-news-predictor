'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!text) return;

    setLoading(true);
    setResult('');

    try {
      const res = await axios.post('http://127.0.0.1:5000/predict', { text });

      // Simulate loading delay
      setTimeout(() => {
        setResult(res.data.prediction);
        setLoading(false);
      }, 5000);

    } catch (err) {
      console.error(err);
      setResult('Error connecting to API');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-slate-700 via-slate-900 to-slate-950">
      <h1 className="text-3xl font-bold mb-4">📰 Fake News Detector</h1>

      <textarea
        className="w-full max-w-xl p-4 border border-gray-300 rounded-md mb-4"
        rows={6}
        placeholder="Enter a news article or headline..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleCheck}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Check News'}
      </button>

      {loading && (
        <div className="mt-4 text-gray-300 animate-pulse text-lg">
          Please wait while we verify the news...
        </div>
      )}

      {result && !loading && (
        <div className="mt-6 text-2xl font-semibold">
          Prediction: <span className={result === 'FAKE' ? 'text-red-600' : 'text-green-600'}>{result}</span>
        </div>
      )}
    </main>
  );
}
