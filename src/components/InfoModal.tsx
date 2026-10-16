import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  ExternalLink, 
  Check, 
  Copy, 
  CreditCard, 
  ShieldCheck, 
  Store 
} from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation
}) => {
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(RESTAURANT_DATA.pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0B0F17] text-[#F3F4F6] shadow-2xl shadow-black/80 p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
          aria-label="Fechar janela"
        >
          <X className="size-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#E11D48]/20 text-[#E11D48]">
            <Store className="size-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-white tracking-wide">
              Informações do Saka Sushi Bar
            </h2>
            <p className="text-xs text-white/60">
              Gastronomia Japonesa Contemporânea
            </p>
          </div>
        </div>

        {/* Facade Image */}
        <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 group">
          <img
            src="/images/saka_facade_night.jpg"
            alt="Fachada do Saka Sushi Bar iluminada à noite"
            referrerPolicy="no-referrer"
            className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3.5">
            <span className="font-display text-base text-white tracking-wide">
              Ambiente Moderno em 2 Andares
            </span>
            <span className="text-[11px] text-white/80">
              Bar de coquetelaria térreo & mezanino panorâmico climatizado
            </span>
          </div>
        </div>

        {/* Contact Quick Buttons */}
        <div className="mb-5 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
            Contatos Rápidos
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={`https://wa.me/${RESTAURANT_DATA.whatsappNumber}?text=Ol%C3%A1%20Saka%20Sushi%20Bar!%20Gostaria%20de%20informa%C3%A7%C3%B5es.`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="size-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  WA
                </span>
                <div className="text-left">
                  <div className="text-xs font-medium text-emerald-300">WhatsApp Oficial</div>
                  <div className="text-[11px] text-white/60">{RESTAURANT_DATA.whatsappFormatted}</div>
                </div>
              </div>
              <ExternalLink className="size-3.5 text-emerald-400" />
            </a>

            <a
              href={`tel:${RESTAURANT_DATA.phoneCall.replace(/\D/g, '')}`}
              className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="size-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                  <Phone className="size-4" />
                </span>
                <div className="text-left">
                  <div className="text-xs font-medium text-white">Telefone Fixo</div>
                  <div className="text-[11px] text-white/60">{RESTAURANT_DATA.phoneCall}</div>
                </div>
              </div>
              <span className="text-xs text-white/40">Ligar</span>
            </a>
          </div>
        </div>

        {/* Address and Route */}
        <div className="mb-5 p-3.5 rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E11D48]/15 text-[#E11D48] shrink-0 mt-0.5">
              <MapPin className="size-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wide">
                Endereço & Localização
              </span>
              <p className="text-sm font-medium text-white mt-0.5">
                {RESTAURANT_DATA.address}
              </p>
              <p className="text-xs text-white/60">
                {RESTAURANT_DATA.neighborhood} · {RESTAURANT_DATA.cityState}
              </p>
              <p className="text-[11px] text-white/40 mt-0.5">
                Estacionamento conveniado e serviço de valet no local.
              </p>
              <a
                href={RESTAURANT_DATA.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-medium text-[#E11D48] hover:text-[#fb7185] transition-colors"
              >
                Abrir rota no Google Maps
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mb-5 p-3.5 rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/90 uppercase tracking-wide mb-2.5">
            <Clock className="size-4 text-[#F59E0B]" />
            Horário de Funcionamento
          </div>
          <div className="space-y-2 text-xs text-white/80 divide-y divide-white/5">
            {RESTAURANT_DATA.openingHours.map((schedule, idx) => (
              <div key={idx} className="flex justify-between items-start pt-2 first:pt-0">
                <div>
                  <div className="font-medium text-white">{schedule.days}</div>
                  {schedule.detail && (
                    <div className="text-[11px] text-white/50">{schedule.detail}</div>
                  )}
                </div>
                <div className="text-right font-semibold text-[#F59E0B] shrink-0">
                  {schedule.hours}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-5 p-3.5 rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2 text-xs font-semibold text-white/90 uppercase tracking-wide mb-2">
            <CreditCard className="size-4 text-emerald-400" />
            Formas de Pagamento Aceitas
          </div>
          <div className="text-xs text-white/70 space-y-1">
            <p>• <strong>PIX:</strong> Chave rápida para transferência instantânea.</p>
            <p>• <strong>Cartões:</strong> Visa, MasterCard, Elo, American Express, Hipercard.</p>
            <p>• <strong>Vales Refeição:</strong> Alelo, Sodexo, Ticket Restaurante, VR Benefícios.</p>
            <p>• <strong>Dinheiro:</strong> Aceitamos pagamento em espécie na entrega ou no caixa.</p>
          </div>

          {/* Copy Pix Key */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <div className="text-[11px] text-white/60 truncate">
              Chave PIX: <span className="text-white font-mono">{RESTAURANT_DATA.pixKey}</span>
            </div>
            <button
              onClick={handleCopyPix}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors shrink-0"
            >
              {copiedPix ? (
                <>
                  <Check className="size-3 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  <span>Copiar PIX</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenReservation();
            }}
            className="flex-1 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-white bg-[#E11D48] hover:bg-[#be123c] transition-colors shadow-lg shadow-[#E11D48]/30 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="size-4" />
            Reservar Mesa Agora
          </button>
          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl font-medium text-xs sm:text-sm text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
