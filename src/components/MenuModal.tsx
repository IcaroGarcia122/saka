import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from '../data/restaurantData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const matchQuery = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-3xl h-[92vh] flex flex-col rounded-3xl border border-white/15 bg-[#0A120E] text-[#F3F4F6] shadow-2xl shadow-black/95 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between gap-3 shrink-0 bg-[#0E1B15]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FA5252]">
              Cardápio Digital Oficial
            </span>
            <h2 className="font-display text-xl sm:text-2xl text-white tracking-wide">
              Pratos, Rodízio & Preços
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Fechar Cardápio"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Search & Category Tabs */}
        <div className="p-3 border-b border-white/10 space-y-2.5 shrink-0 bg-[#0A120E]">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar prato, salmão, temaki, rodízio, hot roll..."
              className="w-full rounded-xl border border-white/10 bg-[#0E1A14] pl-10 pr-4 py-2 text-xs text-white placeholder-white/40 focus:border-[#FA5252] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FA5252] text-white shadow-sm'
                    : 'bg-[#122018] text-white/70 hover:bg-[#182C22] hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dishes Grid with Images */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-white/60 text-sm">Nenhum prato encontrado para sua busca.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todos');
                }}
                className="mt-3 text-xs text-[#FA5252] hover:underline"
              >
                Ver todos os pratos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemForDetail(item)}
                  className="rounded-2xl border border-white/10 bg-[#101D17]/90 p-3 flex flex-col justify-between hover:border-white/20 transition-all shadow-md group cursor-pointer"
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
                        <span className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/80 text-[8px] font-semibold text-center text-[#F59E0B] truncate">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Dish Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-semibold text-xs sm:text-sm text-white line-clamp-1 group-hover:text-amber-200 transition-colors">
                          {item.name}
                        </h3>
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
                    <span className="font-display text-base text-[#F59E0B] tracking-wide font-medium">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Item Detail Modal */}
        {selectedItemForDetail && (
          <div 
            className="absolute inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedItemForDetail(null)}
          >
            <div 
              className="relative w-full max-w-md rounded-2xl border border-white/20 bg-[#0E1A14] p-5 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItemForDetail(null)}
                className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20"
                aria-label="Fechar detalhe"
              >
                <X className="size-4" />
              </button>

              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-3.5 bg-black">
                <img
                  src={selectedItemForDetail.image}
                  alt={selectedItemForDetail.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-display text-xl text-white">
                    {selectedItemForDetail.name}
                  </h3>
                  {selectedItemForDetail.pieces && (
                    <span className="text-xs text-white/60">
                      {selectedItemForDetail.pieces}
                    </span>
                  )}
                </div>
                <div className="font-display text-xl text-[#F59E0B]">
                  R$ {selectedItemForDetail.price.toFixed(2).replace('.', ',')}
                </div>
              </div>

              <p className="text-xs text-white/80 mb-5 leading-relaxed">
                {selectedItemForDetail.description}
              </p>

              <button
                onClick={() => setSelectedItemForDetail(null)}
                className="w-full py-2.5 rounded-xl font-medium text-xs text-white/90 bg-white/10 hover:bg-white/20 transition-colors"
              >
                Voltar ao Cardápio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
