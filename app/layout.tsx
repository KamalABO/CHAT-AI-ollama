import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext"; // ← هنا

export const metadata = {
  title: "Ollama Chat",
  description: "Local AI chat with streaming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
