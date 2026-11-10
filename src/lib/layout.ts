// Side padding shared by every home page section (same as the hero text),
// so all the content lines up on the same left edge.
// Change it here, and every section follows.
export const sectionX = "px-6 md:px-14 lg:px-32 3xl:px-[11vw]";

// Small coloured label above a section title ("QUI SOMMES-NOUS"…)
export const eyebrow =
  "font-heading text-sm font-semibold tracking-widest text-primary uppercase";

// Gradient word in a title (light blue -> lime), like "propreté" in the hero.
// Use it on ONE word per title, and not on every section, so it stays special.
// Usage: <span class={gradientText}>propreté</span>
export const gradientText =
  "bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent";

// Squeegee streak under a title: slanted lime line fading out to the right.
// No width here: add it where it's used (w-28 under big titles, smaller
// elsewhere), so two width classes never fight each other.
export const streak =
  "block h-1 -skew-x-12 rounded-full bg-linear-to-r from-accent via-accent/60 to-transparent";
