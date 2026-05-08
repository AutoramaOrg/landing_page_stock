export default function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 28 }).map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 100}%`,
            animationDelay: `${index * 0.33}s`,
            animationDuration: `${7 + (index % 6)}s`,
          }}
        />
      ))}
    </div>
  );
}
