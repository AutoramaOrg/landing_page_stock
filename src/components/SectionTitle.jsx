export default function SectionTitle({ title }) {
  return (
    <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center gap-5 px-5 text-center">
      <span className="slash-mark" />
      <h2 className="font-bebas text-4xl uppercase tracking-[.09em] text-white md:text-5xl">{title}</h2>
      <span className="slash-mark" />
    </div>
  );
}
