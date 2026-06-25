import "./globals.css";

export const metadata = {
  title: "Memora OS — Personal AI Operating System",
  description:
    "A system that remembers you, understands your goals, and guides your life with intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#05070f] font-sans text-white antialiased">{children}</body>
    </html>
  );
}
