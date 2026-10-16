import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Phone, 
  MapPin, 
  Instagram, 
  Calendar, 
  ChevronRight, 
  Share2, 
  ArrowRight, 
  ExternalLink, 
  Search 
} from 'lucide-react';
import { SakaLogo } from './components/SakaLogo';
import { InfoModal } from './components/InfoModal';
import { ShareModal } from './components/ShareModal';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';
import { RESTAURANT_DATA, MENU_ITEMS, MENU_CATEGORIES } from './data/restaurantData';

export default function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  // Digital Menu inline section state
  const [inlineCategory, setInlineCategory] = useState('todos');
  const [inlineSearch, setInlineSearch] = useState('');

  const filteredInlineItems = MENU_ITEMS.filter((item) => {
    const matchCategory = inlineCategory === 'todos' || item.category === inlineCategory;
    const matchQuery = 
      item.name.toLowerCase().includes(inlineSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(inlineSearch.toLowerCase());
    return matchCategory && matchQuery;
  });

  const scrollToMenu = () => {
    const el = document.getElementById('cardapio-digital-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsMenuModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111111] text-[#F3F4F6] selection:bg-[#E53935] selection:text-white font-sans overflow-x-hidden">
      
      {/* ========================================================
          HERO SECTION: LOGO COM STATUS PILL E BOTÃO COMPARTILHAR
          ======================================================== */}
      <header className="relative w-full overflow-hidden">
        {/* Background Façade Image with high transparency */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-[center_20%] pointer-events-none opacity-30 scale-105 filter blur-[0.3px]"
          style={{
            backgroundImage: "url('/images/saka_building_bg.png')"
          }}
          aria-hidden="true"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/55 to-[#111111] pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-[#E53935]/15 blur-[120px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Floating Share Control */}
        <div className="relative z-20 max-w-xl mx-auto px-4 pt-4 flex items-center justify-end">
          <button
            onClick={() => setIsShareOpen(true)}
            className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/45 hover:bg-black/70 text-white/90 backdrop-blur-md transition-all shadow-md touch-manipulation cursor-pointer"
            title="Compartilhar página"
            aria-label="Compartilhar"
          >
            <Share2 className="size-4" />
          </button>
        </div>

        {/* LOGO AREA */}
        <div className="relative z-20 max-w-xl mx-auto px-4 pt-1 pb-5 sm:pb-8 flex flex-col items-center justify-center text-center">
          <div className="transition-transform duration-300 hover:scale-105">
            <SakaLogo size="lg" glow={true} />
          </div>
        </div>

        {/* WAVY DIVIDER TRANSITIONING TO SOLID CLEAN DARK BACKGROUND */}
        <div className="relative z-20 w-full overflow-hidden leading-none -mb-[1px]">
          <svg 
            className="relative block w-full h-8 sm:h-12 text-[#121212]" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C180,85 360,110 600,60 C840,10 1020,80 1200,30 L1200,120 L0,120 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </header>


      {/* ========================================================
          SOLID SECTION: CARDS LIST
          ======================================================== */}
      <div className="relative bg-[#121212] w-full pb-16">
        <main className="max-w-xl mx-auto px-4 pt-3 flex flex-col items-center">

          {/* SÍMBOLOS REDES SOCIAIS (INSTAGRAM, WHATSAPP, TIKTOK) SEM FUNDO NA COR BRANCA */}
          <div className="flex items-center justify-center gap-6 sm:gap-7 mb-4 pt-1">
            {/* Instagram */}
            <a
              href={RESTAURANT_DATA.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram @sakasushiguarapuava"
              className="p-1.5 text-white hover:text-white/80 transition-all hover:scale-110 active:scale-95 group cursor-pointer"
              title="Instagram @sakasushiguarapuava"
            >
              <Instagram className="size-6 transition-transform group-hover:scale-105" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${RESTAURANT_DATA.whatsappNumber}?text=Ol%C3%A1%20Saka%20Sushi%20Guarapuava!%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento.`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Atendimento"
              className="p-1.5 text-white hover:text-white/80 transition-all hover:scale-110 active:scale-95 group cursor-pointer"
              title="WhatsApp Atendimento"
            >
              <svg viewBox="0 0 24 24" className="size-6 fill-current transition-transform group-hover:scale-105">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={RESTAURANT_DATA.tiktok || "https://www.tiktok.com/@sakasushiguarapuava"}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok @sakasushiguarapuava"
              className="p-1.5 text-white hover:text-white/80 transition-all hover:scale-110 active:scale-95 group cursor-pointer"
              title="TikTok @sakasushiguarapuava"
            >
              <svg viewBox="0 0 24 24" className="size-6 fill-current transition-transform group-hover:scale-105">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.17V9.45a6.34 6.34 0 0 0-.96-.08A6.34 6.34 0 0 0 3 15.71 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V8.92a8.28 8.28 0 0 0 4.84 1.56V7.03a4.84 4.84 0 0 1-.93-.34z" />
              </svg>
            </a>
          </div>

          {/* CARDS LIST */}
          <nav className="w-full flex flex-col gap-3 mb-10" aria-label="Acessos Saka Sushi">
            
            {/* CARD 1: CARDÁPIO DIGITAL COMPLETO */}
            <div 
              onClick={scrollToMenu}
              className="group flex w-full items-center gap-3.5 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] px-4 py-3 sm:px-5 sm:py-3.5 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span className="size-10 sm:size-11 shrink-0 rounded-full bg-[#E53935] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="size-5" />
              </span>

              <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                <span className="font-bold text-base sm:text-lg text-[#121212] tracking-wide truncate">
                  Cardápio Digital Completo
                </span>
                <span className="text-[11px] sm:text-xs text-[#121212]/75 truncate font-medium">
                  Combinados, rodízio, hot rolls e sashimis com preços
                </span>
              </span>

              <ChevronRight className="size-4 text-[#121212]/60 group-hover:text-[#121212] group-hover:translate-x-0.5 shrink-0 transition-all ml-auto" />
            </div>

            {/* CARD 2: WHATSAPP DELIVERY & ATENDIMENTO */}
            <a 
              href={`https://wa.me/${RESTAURANT_DATA.whatsappNumber}?text=Ol%C3%A1%20Saka%20Sushi%20Bar!%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento.`}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center gap-3.5 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] px-4 py-3 sm:px-5 sm:py-3.5 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span className="size-10 sm:size-11 shrink-0 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Phone className="size-5" />
              </span>

              <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                <span className="font-bold text-base sm:text-lg text-[#121212] tracking-wide truncate">
                  WhatsApp Delivery & Atendimento
                </span>
                <span className="text-[11px] sm:text-xs text-[#121212]/75 truncate font-medium">
                  {RESTAURANT_DATA.whatsappFormatted} · Fale direto com a equipe
                </span>
              </span>

              <ExternalLink className="size-4 text-[#121212]/60 group-hover:text-[#121212] shrink-0 transition-all ml-auto" />
            </a>

            {/* CARD 3: AVALIAR NO GOOGLE */}
            <a 
              href={RESTAURANT_DATA.googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center gap-3.5 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] px-4 py-3 sm:px-5 sm:py-3.5 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span className="size-10 sm:size-11 shrink-0 rounded-full bg-white flex items-center justify-center shadow-md border border-black/5 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 48 48" className="size-6 drop-shadow-sm" aria-label="Google">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </span>

              <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                <span className="font-bold text-base sm:text-lg text-[#121212] tracking-wide truncate">
                  Avaliar no Google
                </span>
                <span className="text-[11px] sm:text-xs text-[#121212]/75 truncate font-medium">
                  Deixe sua avaliação de 5 estrelas sobre a experiência no Saka
                </span>
              </span>

              <ExternalLink className="size-4 text-[#121212]/60 group-hover:text-[#121212] shrink-0 transition-all ml-auto" />
            </a>

            {/* CARD 4: RESERVAS DE MESA & ESPAÇO VIP */}
            <div 
              onClick={() => setIsReservationOpen(true)}
              className="group flex w-full items-center gap-3.5 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] px-4 py-3 sm:px-5 sm:py-3.5 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span className="size-10 sm:size-11 shrink-0 rounded-full bg-[#D97706] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Calendar className="size-5" />
              </span>

              <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                <span className="font-bold text-base sm:text-lg text-[#121212] tracking-wide truncate">
                  Reservas de Mesa & VIP
                </span>
                <span className="text-[11px] sm:text-xs text-[#121212]/75 truncate font-medium">
                  Salão Térreo Sushiman & Mezanino com Vista
                </span>
              </span>

              <ChevronRight className="size-4 text-[#121212]/60 group-hover:text-[#121212] group-hover:translate-x-0.5 shrink-0 transition-all ml-auto" />
            </div>

            {/* CARD 5: INSTAGRAM OFICIAL */}
            <a 
              href={RESTAURANT_DATA.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center gap-3.5 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] px-4 py-3 sm:px-5 sm:py-3.5 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span className="size-10 sm:size-11 shrink-0 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Instagram className="size-5" />
              </span>

              <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                <span className="font-bold text-base sm:text-lg text-[#121212] tracking-wide truncate">
                  {RESTAURANT_DATA.instagramHandle}
                </span>
                <span className="text-[11px] sm:text-xs text-[#121212]/75 truncate font-medium">
                  Siga no Instagram · {RESTAURANT_DATA.instagramFollowers}
                </span>
              </span>

              <ExternalLink className="size-4 text-[#121212]/60 group-hover:text-[#121212] shrink-0 transition-all ml-auto" />
            </a>

            {/* CARD 6: ESTAMOS LOCALIZADOS */}
            <button 
              type="button"
              onClick={() => {
                const el = document.getElementById('localizacao-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex w-full items-center gap-3.5 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] px-4 py-3 sm:px-5 sm:py-3.5 transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-left"
            >
              <span className="size-10 sm:size-11 shrink-0 rounded-full bg-[#1A73E8] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <MapPin className="size-5" />
              </span>

              <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                <span className="font-bold text-base sm:text-lg text-[#121212] tracking-wide truncate">
                  Estamos Localizados
                </span>
                <span className="text-[11px] sm:text-xs text-[#121212]/75 truncate font-medium">
                  {RESTAURANT_DATA.address} · Ver foto da fachada & rota
                </span>
              </span>

              <ChevronRight className="size-4 text-[#121212]/60 group-hover:text-[#121212] group-hover:translate-x-0.5 shrink-0 transition-all ml-auto" />
            </button>
          </nav>


          {/* ========================================================
              CARDÁPIO DIGITAL (COM AS IMAGENS DOS PRATOS E PREÇOS)
              ======================================================== */}
          <section id="cardapio-digital-section" className="w-full pt-4 pb-8">
            <div className="flex items-center justify-between mb-3.5 px-1">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E53935]">
                  Consulte Nossos Valores
                </span>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Cardápio Digital Saka
                </h3>
              </div>
              <button
                onClick={() => setIsMenuModalOpen(true)}
                className="text-xs text-[#F6EBD3] hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
              >
                Tela Cheia
                <ArrowRight className="size-3" />
              </button>
            </div>

            {/* Search Input for Menu */}
            <div className="relative mb-3">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
              <input
                type="text"
                value={inlineSearch}
                onChange={(e) => setInlineSearch(e.target.value)}
                placeholder="Buscar prato, salmão, hot roll, rodízio..."
                className="w-full rounded-full border border-white/10 bg-[#1E1E1E] pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#E53935] focus:outline-none"
              />
            </div>

            {/* Categories Horizontal Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3.5 scrollbar-none">
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setInlineCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    inlineCategory === cat.id
                      ? 'bg-[#E53935] text-white shadow-sm'
                      : 'bg-[#1E1E1E] text-white/70 hover:bg-[#282828] hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Dishes with Photos, Descriptions & Prices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredInlineItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-3 flex flex-col justify-between hover:border-white/20 transition-all shadow-md group"
                >
                  <div className="flex gap-3">
                    {/* Dish Photo */}
                    <div className="relative size-16 sm:size-18 rounded-xl overflow-hidden shrink-0 bg-black/60 shadow-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.tag && (
                        <span className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/80 text-[8px] font-semibold text-center text-[#F6EBD3] truncate">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Dish Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-semibold text-xs sm:text-sm text-white line-clamp-1 group-hover:text-[#F6EBD3] transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      {item.pieces && (
                        <div className="text-[10px] text-white/50 mb-0.5">
                          {item.pieces}
                        </div>
                      )}
                      <p className="text-[11px] text-white/60 line-clamp-2 leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-white/50">Valor:</span>
                    <span className="font-bold text-base text-[#F6EBD3] tracking-wide">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================
              CARD FINAL: ESTAMOS LOCALIZADOS (COM A IMAGEM INTEIRA)
              ======================================================== */}
          <section id="localizacao-section" className="w-full pt-4 pb-10">
            <div className="w-full rounded-3xl overflow-hidden border border-white/15 bg-[#181818] shadow-2xl group transition-all duration-300 hover:border-white/30">
              
              {/* Foto Inteira da Fachada do Saka Sushi Bar */}
              <div className="relative w-full bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/saka_building_bg.png"
                  alt="Fachada Saka Sushi Bar"
                  className="w-full h-auto max-h-[580px] object-contain sm:object-cover sm:object-top transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>

              {/* Informações de Localização e Rota */}
              <div className="p-4 sm:p-5 bg-[#181818] border-t border-white/10 space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E53935] flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#E53935]" />
                      Espaço Moderno em 2 Andares
                    </span>
                    <h3 className="font-bold text-xl sm:text-2xl text-white tracking-wide mt-0.5">
                      Estamos Localizados
                    </h3>
                    <p className="text-xs text-white/80 mt-1 leading-relaxed">
                      {RESTAURANT_DATA.address} · {RESTAURANT_DATA.neighborhood}
                    </p>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold shrink-0">
                    Estacionamento
                  </span>
                </div>

                {/* Botão de Rota com o estilo creme padronizado */}
                <a
                  href={RESTAURANT_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-between p-3.5 sm:p-4 rounded-full bg-[#F6EBD3] hover:bg-[#FFF5DE] transition-all text-[#121212] font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="size-8 rounded-full bg-[#1A73E8] text-white flex items-center justify-center shadow-md">
                      <MapPin className="size-4" />
                    </span>
                    <span>Abrir Rota no Google Maps</span>
                  </div>
                  <ExternalLink className="size-4 text-[#121212]/70" />
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full pt-8 pb-4 border-t border-white/10 flex flex-col items-center text-center text-xs text-white/50 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-white tracking-wider">
                {RESTAURANT_DATA.name}
              </span>
              <span>·</span>
              <span>Gastronomia Japonesa</span>
            </div>

            <p className="text-[11px] text-white/40 max-w-sm">
              Tradição oriental com cortes nobres e ambiente contemporâneo.
            </p>

            <div className="pt-2 flex items-center gap-4 text-[11px] text-white/60">
              <button onClick={() => setIsInfoOpen(true)} className="hover:text-white transition-colors cursor-pointer">
                Horários & Endereço
              </button>
              <span>•</span>
              <button onClick={() => setIsReservationOpen(true)} className="hover:text-white transition-colors cursor-pointer">
                Reservar Mesa
              </button>
              <span>•</span>
              <a href={RESTAURANT_DATA.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </div>

            <div className="text-[10px] text-white/30 pt-2">
              © {new Date().getFullYear()} Saka Sushi Bar. Todos os direitos reservados.
            </div>
          </footer>
        </main>
      </div>

      {/* Modals */}
      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
      />
    </div>
  );
}
