"use client";

import { useState, useEffect } from "react";

const WA_NUMBER = "5511959920554";
const WA_MESSAGE = encodeURIComponent("Olá, gostaria de saber mais sobre a LK Digital.");

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 left-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Official WhatsApp logo SVG */}
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="white"
      >
        <path d="M24 4C12.954 4 4 12.954 4 24c0 3.553.953 6.888 2.618 9.761L4 44l10.548-2.565A19.9 19.9 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 3c9.39 0 17 7.61 17 17s-7.61 17-17 17a16.94 16.94 0 0 1-8.752-2.424l-.628-.385-6.519 1.584 1.636-6.355-.415-.655A16.94 16.94 0 0 1 7 24C7 14.61 14.61 7 24 7zm-4.184 8c-.285 0-.748.107-1.14.533-.39.425-1.494 1.46-1.494 3.562 0 2.103 1.53 4.135 1.742 4.42.213.284 2.976 4.763 7.32 6.492 3.614 1.424 4.348 1.14 5.13 1.069.784-.07 2.529-1.034 2.884-2.033.356-.999.356-1.856.249-2.033-.107-.177-.392-.284-.82-.497-.428-.213-2.53-1.248-2.921-1.39-.391-.142-.676-.213-.96.213-.285.426-1.1 1.39-1.348 1.674-.248.284-.497.32-.924.107-.427-.213-1.804-.665-3.438-2.122-1.27-1.133-2.128-2.533-2.376-2.959-.249-.425-.027-.655.187-.867.19-.19.427-.497.64-.746.213-.249.284-.426.427-.71.142-.284.07-.533-.036-.746-.106-.213-.952-2.322-1.32-3.17-.34-.8-.69-.7-.96-.713-.247-.011-.532-.014-.817-.014z" />
      </svg>
    </a>
  );
}
