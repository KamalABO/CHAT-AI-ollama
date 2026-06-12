"use client";
import { useState } from "react";
import { useTheme } from "./context/ThemeContext";

type ChatItem = {
  prompt: string;
  response: string;
  timestamp: string;
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("llama3");

  const saveToHistory = (item: ChatItem) => {
    const existing = JSON.parse(localStorage.getItem("chat_history") || "[]");
    existing.unshift(item);
    localStorage.setItem("chat_history", JSON.stringify(existing));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer("");
    setLoading(true);

    const res = await fetch("/api/ollama/stream", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    if (!reader) return;

    let fullAnswer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      fullAnswer += chunk;
      setAnswer((prev) => prev + chunk);
    }

    saveToHistory({
      prompt,
      response: fullAnswer,
      timestamp: new Date().toISOString(),
    });

    setLoading(false);
  };

  // 🎤 التعرف على الكلام
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("متصفحك لا يدعم التعرف على الصوت");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ar-EG"; // عربي أو "en-US"
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setPrompt(transcript);
    };

    recognition.onerror = (event: any) => {
      alert("حدث خطأ في التعرف الصوتي: " + event.error);
    };

    recognition.start();
  };

  // 🔊 نطق الرد صوتيًا
  const speakAnswer = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-EG"; // أو "en-US"
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">🧠 Ollama Chat</h1>
          <button
            onClick={toggleTheme}
            className="text-sm bg-gray-300 dark:bg-gray-700 dark:text-white px-3 py-1 rounded hover:opacity-80 transition"
          >
            {theme === "light" ? "🌙 الوضع الليلي" : "☀️ الوضع النهاري"}
          </button>
        </div>

        <a
          href="/history"
          className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
        >
          📜 عرض سجل المحادثات
        </a>

        <div className="mb-4">
          <label className="block mb-1 font-medium">🧩 اختر النموذج:</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 dark:text-white"
          >
            <option value="llama3">llama3</option>
            <option value="mistral">mistral</option>
            <option value="codellama">codellama</option>
          </select>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-md rounded p-4 space-y-4"
        >
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            placeholder="اكتب سؤالك هنا..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            {loading ? "جاري المعالجة..." : "أرسل"}
          </button>
        </form>

        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={startListening}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            🎤 إدخال صوتي
          </button>

          {answer && (
            <button
              type="button"
              onClick={() => speakAnswer(answer)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              🔊 تشغيل الرد صوتيًا
            </button>
          )}
        </div>

        {answer && (
          <div className="mt-6 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded p-4">
            <h2 className="font-semibold mb-2 text-lg text-green-700 dark:text-green-400">
              الرد:
            </h2>
            <p className="whitespace-pre-wrap">{answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}
