/** Fixed, decorative background: a faint grid plus slow drifting glows. Pure CSS. */
export function AnimatedBackground() {
  return (
    <div aria-hidden className="bg-anim pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
    </div>
  );
}
