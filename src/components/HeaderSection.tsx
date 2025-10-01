// src/components/HeaderSection.tsx
interface HeaderSectionProps {
    title: string;
    subtitle?: string;
  }
  
  export default function HeaderSection({ title, subtitle }: HeaderSectionProps) {
    return (
      <div className="relative w-full py-16 text-center overflow-hidden">
        {/* sfondo luminescente */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-3xl animate-pulse"></div>
        
        {/* contenuto */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-sm">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
          )}
        </div>
      </div>
    );
  }
  