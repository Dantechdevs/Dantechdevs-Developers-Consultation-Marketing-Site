import Image from "next/image";

interface HeroBannerProps {
  imageSrc: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
}

export default function HeroBanner({
  imageSrc,
  imageAlt,
  badge,
  title,
  description,
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden rounded-none">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-3xl">
        <span className="inline-block bg-blue-600 text-white text-xs md:text-sm font-bold tracking-wide px-4 py-2 rounded-md mb-4">
          {badge}
        </span>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
          {title}
        </h2>

        <p className="text-sm md:text-base text-slate-200 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
