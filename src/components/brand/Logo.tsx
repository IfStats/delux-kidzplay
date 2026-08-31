export default function Logo() {
  return (
    <div className="leading-none">
      <div
        className="text-[26px] font-black italic tracking-tight"
        style={{ color: "var(--delux-red)" }}
      >
        DELUX
      </div>

      <div className="flex items-center text-[27px] font-black tracking-tight">
        <span style={{ color: "var(--delux-blue)" }}>k</span>
        <span style={{ color: "var(--delux-green)" }}>i</span>
        <span style={{ color: "var(--delux-orange)" }}>d</span>
        <span style={{ color: "var(--delux-red)" }}>z</span>
        <span style={{ color: "var(--delux-blue)" }}>p</span>
        <span style={{ color: "var(--delux-green)" }}>l</span>
        <span style={{ color: "var(--delux-orange)" }}>a</span>
        <span style={{ color: "var(--delux-red)" }}>y</span>
      </div>

      <div
        className="mt-1 text-[8px] font-bold tracking-[0.16em]"
        style={{ color: "var(--delux-green-dark)" }}
      >
        PLAY • LEARN & GROW
      </div>
    </div>
  );
}