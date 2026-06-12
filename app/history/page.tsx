"use client";
import { useEffect, useState } from "react";

type ChatItem = {
  prompt: string;
  response: string;
  timestamp: string;
};

export default function HistoryPage() {
  const [history, setHistory] = useState<ChatItem[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chat_history") || "[]");
    setHistory(data);
  }, []);

  const handleClear = () => {
    localStorage.removeItem("chat_history");
    setHistory([]);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">🕘 سجل المحادثات</h1>
          {history.length > 0 && (
            <button
              onClick={handleClear}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              🗑️ مسح الكل
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">
            لا يوجد سجل حتى الآن.
          </p>
        ) : (
          <ul className="space-y-6">
            {history.map((item, index) => (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded border dark:border-gray-700 shadow-sm"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
                <div className="mb-3">
                  <p className="font-semibold text-blue-700 dark:text-blue-400 mb-1">
                    السؤال:
                  </p>
                  <p className="whitespace-pre-wrap">{item.prompt}</p>
                </div>
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400 mb-1">
                    الرد:
                  </p>
                  <p className="whitespace-pre-wrap">{item.response}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ⬅️ الرجوع للمحادثة
          </a>
        </div>
      </div>
    </main>
  );
}
