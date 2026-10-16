import React from 'react';

interface SakaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
}

export const SakaLogo: React.FC<SakaLogoProps> = ({
  className = '',
  size = 'lg',
  glow = true
}) => {
  const sizeMap = {
    sm: 'h-14 w-auto',
    md: 'h-20 w-auto',
    lg: 'h-28 w-auto',
    xl: 'h-36 w-auto'
  };

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {glow && (
        <div 
          className="absolute inset-0 bg-white/15 blur-2xl rounded-full -z-10 pointer-events-none transform scale-150"
          aria-hidden="true"
        />
      )}
      <svg
        viewBox="0 0 340 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeMap[size]} max-w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] filter`}
        role="img"
        aria-label="Saka Sushi Bar Logo"
      >
        {/* KATANA SWORD AT THE TOP */}
        <g id="katana-sword" className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]">
          {/* Tsuka (Handle) with wrap texture */}
          <path
            d="M 28 24 L 88 24 L 88 34 L 28 34 Z"
            fill="#E5E7EB"
          />
          {/* Handle pommel (Kashira) */}
          <rect x="24" y="23" width="5" height="12" rx="1.5" fill="#9CA3AF" />
          
          {/* Diamond wraps on tsuka */}
          <circle cx="38" cy="29" r="2.2" fill="#111827" />
          <circle cx="50" cy="29" r="2.2" fill="#111827" />
          <circle cx="62" cy="29" r="2.2" fill="#111827" />
          <circle cx="74" cy="29" r="2.2" fill="#111827" />
          
          {/* Tsuba (Handguard) */}
          <rect x="88" y="18" width="6" height="22" rx="1.5" fill="#F3F4F6" />
          
          {/* Habaki (Blade collar) */}
          <rect x="94" y="24" width="7" height="10" fill="#D1D5DB" />

          {/* Katana Blade (curved spine and edge pointing right) */}
          <path
            d="M 101 25.5 C 160 25.5 240 26.5 295 24 C 304 23.5 310 24 316 27 C 310 30 260 32.5 101 32.5 Z"
            fill="url(#katanaBladeGradient)"
          />
          {/* Temper line */}
          <path
            d="M 101 29 C 160 29 230 28.5 308 26.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.95"
          />
        </g>

        {/* SAKA - STYLIZED BOLD GEOMETRIC LETTERS WITH PURE TRANSPARENT CUTOUTS */}
        <mask id="sakaMask">
          {/* White canvas = visible */}
          <rect width="340" height="160" fill="white" />
          {/* Black shapes = transparent cutouts */}
          <polygon points="44,62 52,74 46,74" fill="black" />
          <rect x="117" y="62" width="8" height="4" fill="black" />
          <rect x="175" y="86" width="6" height="5" fill="black" />
          <rect x="261" y="62" width="8" height="4" fill="black" />
        </mask>

        <g mask="url(#sakaMask)" fill="#FFFFFF" className="drop-shadow-[0_2px_12px_rgba(255,255,255,0.35)]">
          {/* Letter S */}
          <path d="M 32 62 H 78 V 76 H 49 V 85 H 78 V 118 H 32 V 104 H 61 V 96 H 32 Z" />

          {/* Letter A */}
          <path d="M 98 62 H 144 V 118 H 128 V 96 H 114 V 118 H 98 Z M 114 74 V 86 H 128 V 74 Z" fillRule="evenodd" />

          {/* Letter K */}
          <path d="M 164 62 H 181 V 84 L 204 62 H 222 L 195 89 L 224 118 H 204 L 181 94 V 118 H 164 Z" />

          {/* Second Letter A */}
          <path d="M 242 62 H 288 V 118 H 272 V 96 H 258 V 118 H 242 Z M 258 74 V 86 H 272 V 74 Z" fillRule="evenodd" />
        </g>

        {/* SUSHI BAR - CONDENSED CAPITAL TEXT */}
        <text
          x="160"
          y="146"
          textAnchor="middle"
          fill="#FFFFFF"
          letterSpacing="10"
          fontFamily="'Barlow', 'Bebas Neue', sans-serif"
          fontWeight="700"
          fontSize="21"
          className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
        >
          SUSHI BAR
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient id="katanaBladeGradient" x1="101" y1="28.5" x2="316" y2="28.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F3F4F6" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="0.9" stopColor="#E5E7EB" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
