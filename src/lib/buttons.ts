// Glossy button styles, shared by the header, the hero and any other component.
// Usage: class:list={[glossy, glossyLime, "px-5 py-3 ..."]}
//   glossy = shape + effects, glossyX = colour, then your own size/spacing classes.

// Glossy pill, shared by every button:
// - before: = light reflection on the top half
// - after: = a band of light that crosses the pill once on hover
//   (transition only on hover, so it jumps back invisibly when the mouse leaves)
// - lifts 2px on hover, presses back down on click
export const glossy =
  "group/pill relative isolate items-center gap-2 overflow-hidden rounded-full font-heading font-semibold whitespace-nowrap transition duration-200 before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-1/2 before:bg-linear-to-b before:from-white/40 before:to-white/5 after:absolute after:inset-y-0 after:left-0 after:w-1/3 after:-translate-x-full after:skew-x-[-20deg] after:bg-linear-to-r after:from-transparent after:via-white/50 after:to-transparent hover:-translate-y-0.5 hover:after:translate-x-[400%] hover:after:transition-transform hover:after:duration-700 hover:after:ease-out active:translate-y-0 motion-reduce:transition-none motion-reduce:after:hidden";

// Colours: gradient + a shadow tinted with the button's own colour
export const glossyBlue =
  "bg-linear-to-b from-secondary to-primary text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_6px_16px_-4px_rgb(49_123_185/0.6)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_10px_24px_-6px_rgb(49_123_185/0.75)] active:shadow-[inset_0_1px_0_rgb(255_255_255/0.5),0_3px_8px_-2px_rgb(49_123_185/0.6)]";

// Lime keeps dark (ink) text: white on lime is unreadable (contrast 1.8:1)
export const glossyLime =
  "bg-linear-to-b from-[#c6e47a] to-accent text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.6),inset_0_-2px_0_rgb(110_150_30/0.35),0_6px_16px_-4px_rgb(22_50_79/0.45)] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.6),inset_0_-2px_0_rgb(110_150_30/0.35),0_10px_24px_-6px_rgb(22_50_79/0.55)] active:shadow-[inset_0_1px_0_rgb(255_255_255/0.6),inset_0_-1px_0_rgb(110_150_30/0.35),0_3px_8px_-2px_rgb(22_50_79/0.45)]";

export const glossyWhite =
  "bg-linear-to-b from-white to-[#dfeaf3] text-primary shadow-[inset_0_-2px_0_rgb(49_123_185/0.15),0_6px_16px_-4px_rgb(22_50_79/0.45)]";

// Arrow that nudges right on hover
export const arrow = "size-4 transition-transform group-hover/pill:translate-x-1";

// Frosted glass, for secondary buttons over a photo or a dark background
export const glossyGlass =
  "border border-white/40 bg-white/15 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_6px_16px_-6px_rgb(0_0_0/0.35)] backdrop-blur-md hover:bg-white/25";
