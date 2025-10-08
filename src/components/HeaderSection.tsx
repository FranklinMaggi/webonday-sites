// src/components/HeaderSection.tsx
interface HeaderSectionProps {
  title: string;
  subtitle?: React.ReactNode;
  variant?: "light" | "dark"; // controlla lo stile
}

export default function HeaderSection({
  title,
  subtitle,
  variant = "light",
}: HeaderSectionProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative w-full py-16 text-center overflow-hidden ${
        isDark ? "futuristic-bg" : "bg-white text-gray-800"
      }`}
    >
      {/* SFONDO GLOW */}
      {isDark ? (
        <div className="futuristic-gradient animate-pulse-glow" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-pink-100 opacity-40" />
      )}

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1
          className={`font-extrabold drop-shadow-sm ${
            isDark
              ? "text-5xl md:text-6xl text-cyan-300 neon-title"
              : "text-4xl md:text-5xl text-blue-700"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-4 text-lg ${
              isDark
                ? "text-gray-300 neon-bubble"
                : "text-gray-700 max-w-2xl mx-auto"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
