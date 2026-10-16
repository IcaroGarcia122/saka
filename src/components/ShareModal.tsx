import React, { useState } from 'react';
import { X, Check, Copy, Share2, Send, QrCode } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://sakasushibar.com.br';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: RESTAURANT_DATA.name,
          text: `Confira o cardápio digital, reservas e delivery do ${RESTAURANT_DATA.name}!`,
          url: currentUrl
        });
      } catch {
        // User dismissed or share failed
      }
    } else {
      handleCopy();
    }
  };

  const shareWhatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `🍣 Dá uma olhada no cardápio digital e delivery do ${RESTAURANT_DATA.name}!\n${RESTAURANT_DATA.slogan}\n\nAcesse: ${currentUrl}`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-[#0B0F17] text-[#F3F4F6] shadow-2xl shadow-black/80 p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#E11D48]/20 text-[#E11D48]">
            <Share2 className="size-5" />
          </div>
          <div>
            <h2 className="font-display text-xl text-white tracking-wide">
              Compartilhar Saka Sushi Bar
            </h2>
            <p className="text-xs text-white/60">
              Envie para amigos ou escaneie na mesa
            </p>
          </div>
        </div>

        {/* QR Code Container */}
        <div className="p-4 rounded-2xl bg-white flex flex-col items-center justify-center mb-4">
          {/* Stylized QR Code SVG */}
          <div className="relative p-2 bg-white rounded-lg">
            <svg 
              viewBox="0 0 160 160" 
              className="size-36 text-black"
              fill="currentColor"
            >
              {/* Corner squares */}
              <rect x="10" y="10" width="40" height="40" rx="4" fill="#090C12" />
              <rect x="18" y="18" width="24" height="24" rx="2" fill="#FFFFFF" />
              <rect x="24" y="24" width="12" height="12" rx="1" fill="#090C12" />

              <rect x="110" y="10" width="40" height="40" rx="4" fill="#090C12" />
              <rect x="118" y="18" width="24" height="24" rx="2" fill="#FFFFFF" />
              <rect x="124" y="24" width="12" height="12" rx="1" fill="#090C12" />

              <rect x="10" y="110" width="40" height="40" rx="4" fill="#090C12" />
              <rect x="18" y="118" width="24" height="24" rx="2" fill="#FFFFFF" />
              <rect x="24" y="124" width="12" height="12" rx="1" fill="#090C12" />

              {/* Data pixel simulation */}
              <rect x="60" y="15" width="8" height="8" fill="#090C12" />
              <rect x="75" y="15" width="8" height="8" fill="#090C12" />
              <rect x="90" y="15" width="8" height="8" fill="#090C12" />
              <rect x="60" y="30" width="14" height="8" fill="#090C12" />
              <rect x="80" y="30" width="8" height="8" fill="#090C12" />
              <rect x="60" y="45" width="8" height="12" fill="#090C12" />
              <rect x="75" y="45" width="18" height="8" fill="#090C12" />

              <rect x="15" y="60" width="8" height="8" fill="#090C12" />
              <rect x="30" y="60" width="16" height="8" fill="#090C12" />
              <rect x="15" y="75" width="12" height="8" fill="#090C12" />
              <rect x="35" y="75" width="8" height="14" fill="#090C12" />
              <rect x="15" y="92" width="24" height="8" fill="#090C12" />

              <rect x="60" y="65" width="12" height="12" fill="#E11D48" />
              <rect x="78" y="65" width="14" height="12" fill="#090C12" />
              <rect x="100" y="65" width="10" height="12" fill="#E11D48" />
              <rect x="65" y="85" width="20" height="8" fill="#090C12" />
              <rect x="92" y="85" width="16" height="8" fill="#090C12" />
              <rect x="60" y="100" width="10" height="12" fill="#090C12" />
              <rect x="78" y="100" width="18" height="10" fill="#090C12" />

              <rect x="115" y="60" width="12" height="8" fill="#090C12" />
              <rect x="135" y="60" width="15" height="8" fill="#090C12" />
              <rect x="115" y="75" width="22" height="12" fill="#090C12" />
              <rect x="115" y="95" width="10" height="12" fill="#090C12" />
              <rect x="132" y="95" width="18" height="12" fill="#090C12" />

              <rect x="60" y="120" width="12" height="12" fill="#090C12" />
              <rect x="80" y="120" width="12" height="12" fill="#090C12" />
              <rect x="100" y="120" width="10" height="12" fill="#090C12" />
              <rect x="118" y="120" width="15" height="12" fill="#090C12" />
              <rect x="65" y="138" width="22" height="10" fill="#090C12" />
              <rect x="95" y="138" width="14" height="10" fill="#090C12" />
              <rect x="118" y="138" width="25" height="10" fill="#090C12" />
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-slate-800 uppercase tracking-widest mt-1">
            Escaneie com a câmera do celular
          </span>
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl border border-white/10 bg-white/5 mb-3">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="flex-1 bg-transparent px-2 text-xs text-white/80 focus:outline-none truncate"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Share buttons */}
        <div className="space-y-2">
          <a
            href={shareWhatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
          >
            <Send className="size-4" />
            Compartilhar no WhatsApp
          </a>

          <button
            onClick={handleNativeShare}
            className="w-full py-2.5 px-4 rounded-xl font-medium text-xs text-white/80 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="size-4" />
            Outras Opções de Envio
          </button>
        </div>
      </div>
    </div>
  );
};
