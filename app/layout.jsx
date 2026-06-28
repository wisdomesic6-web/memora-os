import "./globals.css";

export const metadata = {
  title: "Memora OS — Business AI",
  description:
    "The AI that remembers your business — your work, your clients, and your context — so you stop re-explaining yourself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#05070f] font-sans text-white antialiased">{children}</body>
    </html>
  );
}
