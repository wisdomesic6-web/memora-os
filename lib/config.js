// Central place for cross-project links.
// This is the deployed Memora OS app (the React + Vite project, "wsepai").
// When you move to a custom domain (e.g. https://app.memora.com), change it here only.
export const APP_URL = "https://wsepai.vercel.app";

// Backend API (Render). Powers the public testimonials/rating section.
// Override per-env with NEXT_PUBLIC_API_URL if the backend URL changes.
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://wsepai.onrender.com";

// Manual sales / payment runs through WhatsApp until automated billing is live.
export const WHATSAPP_NUMBER = "2348160829058"; // +234 816 082 9058, digits only for wa.me
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent("Hi, I'd like the Memora OS Founding Member offer (50% off for 3 months).");
