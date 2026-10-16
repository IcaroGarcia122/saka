import React, { useState } from 'react';
import { X, Calendar, Users, Clock, MapPin, Send, Sparkles } from 'lucide-react';
import { RESTAURANT_DATA } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('2');
  const [area, setArea] = useState('Mezanino 2º Andar (Mesa com vista)');
  const [occasion, setOccasion] = useState('Jantar Especial');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const message = `🍣 *SOLICITAÇÃO DE RESERVA DE MESA — ${RESTAURANT_DATA.name}*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📱 *Telefone:* ${phone || 'Não informado'}\n` +
      `📅 *Data:* ${date || 'A combinar'}\n` +
      `⏰ *Horário:* ${time}\n` +
      `👥 *Pessoas:* ${guests} pessoa(s)\n` +
      `🏛️ *Ambiente:* ${area}\n` +
      `✨ *Ocasião:* ${occasion}\n` +
      (notes.trim() ? `📝 *Observações:* ${notes}\n` : '') +
      `\n_Por favor, confirmem a disponibilidade da mesa para este horário._`;

    const url = `https://wa.me/${RESTAURANT_DATA.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#0B0F17] text-[#F3F4F6] shadow-2xl shadow-black/90 p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
          aria-label="Fechar Reserva"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#E11D48]/20 text-[#E11D48]">
            <Calendar className="size-5" />
          </div>
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-white tracking-wide">
              Reserva de Mesa Saka
            </h2>
            <p className="text-xs text-white/60">
              Garanta seu lugar no salão térreo ou mezanino panorâmico
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">
                Seu Nome Completo *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Gabriel Silva"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">
                WhatsApp de Contato
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: (11) 98765-4321"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#E11D48] focus:outline-none focus:ring-1 focus:ring-[#E11D48]"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1 flex items-center gap-1">
                <Calendar className="size-3 text-[#E11D48]" />
                Data Desejada
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white focus:border-[#E11D48] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1 flex items-center gap-1">
                <Clock className="size-3 text-[#F59E0B]" />
                Horário
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#131926] px-3 py-2 text-xs text-white focus:border-[#E11D48] focus:outline-none"
              >
                <option value="12:30">12:30 (Almoço)</option>
                <option value="13:30">13:30 (Almoço)</option>
                <option value="19:00">19:00 (Jantar)</option>
                <option value="19:30">19:30 (Jantar)</option>
                <option value="20:00">20:00 (Jantar)</option>
                <option value="20:30">20:30 (Jantar)</option>
                <option value="21:00">21:00 (Jantar)</option>
                <option value="21:30">21:30 (Jantar)</option>
                <option value="22:00">22:00 (Jantar)</option>
              </select>
            </div>
          </div>

          {/* Guests count & Preferred Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1 flex items-center gap-1">
                <Users className="size-3 text-emerald-400" />
                Número de Pessoas
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#131926] px-3 py-2 text-xs text-white focus:border-[#E11D48] focus:outline-none"
              >
                <option value="1">1 Pessoa</option>
                <option value="2">2 Pessoas (Casal)</option>
                <option value="3">3 Pessoas</option>
                <option value="4">4 Pessoas</option>
                <option value="5">5 Pessoas</option>
                <option value="6">6 Pessoas</option>
                <option value="8">8 Pessoas (Mesa Grande)</option>
                <option value="10+">10 ou mais pessoas (Grupo)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1 flex items-center gap-1">
                <MapPin className="size-3 text-[#E11D48]" />
                Preferência de Ambiente
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#131926] px-3 py-2 text-xs text-white focus:border-[#E11D48] focus:outline-none"
              >
                <option value="Mezanino 2º Andar (Mesa com vista)">Mezanino 2º Andar (Com vista)</option>
                <option value="Térreo Sushi Bar (Balcão do Sushiman)">Térreo Sushi Bar (Balcão do Sushiman)</option>
                <option value="Salão Principal Climatizado">Salão Principal Climatizado</option>
                <option value="Mesa Externa Deck">Mesa Externa / Deck de Entrada</option>
              </select>
            </div>
          </div>

          {/* Occasion */}
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1 flex items-center gap-1">
              <Sparkles className="size-3 text-[#F59E0B]" />
              Ocasião Especial
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#131926] px-3 py-2 text-xs text-white focus:border-[#E11D48] focus:outline-none"
            >
              <option value="Jantar Casual">Jantar Casual / Dia a Dia</option>
              <option value="Encontro Romântico">Encontro Romântico / Aniversário de Casal</option>
              <option value="Comemoração de Aniversário">Comemoração de Aniversário</option>
              <option value="Reunião de Negócios">Reunião de Negócios / Corporativo</option>
              <option value="Confraternização em Grupo">Confraternização em Família / Amigos</option>
            </select>
          </div>

          {/* Special Notes */}
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Observações ou Preferências (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Cadeira de bebê, aniversário (levar bolo), preferências alimentares..."
              className="w-full rounded-xl border border-white/10 bg-white/5 p-2.5 text-xs text-white placeholder-white/30 focus:border-[#E11D48] focus:outline-none"
            />
          </div>

          {/* Notice */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-[11px] text-white/60">
            💡 As reservas são confirmadas instantaneamente pelo nosso maître através do WhatsApp do Saka Sushi Bar.
          </div>

          {/* Submit */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
            >
              <Send className="size-4" />
              Solicitar Reserva pelo WhatsApp
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 rounded-xl font-medium text-xs sm:text-sm text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
