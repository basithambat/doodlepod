/**
 * Plays short tones using Web Audio API for pill interactions.
 * - Piano (parents): C4–G4, warmer tone.
 * - Xylophone (kids): C5–A5, brighter, pluckier.
 * AudioContext is created on first user gesture (hover/tap).
 */

let audioContext: AudioContext | null = null;

const PARENT_NOTES_HZ = [261.63, 293.66, 329.63, 349.23, 392.0]; // C4–G4
const KIDS_NOTES_HZ = [523.25, 587.33, 659.25, 698.46, 783.99, 880.0]; // C5–A5 (xylophone range)
const PIANO_DURATION = 0.12;
const XYLOPHONE_DURATION = 0.08;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (audioContext) return audioContext;
  audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  return audioContext;
}

export function playPianoKey(keyIndex: number): void {
  const ctx = getContext();
  if (!ctx) return;
  const freq = PARENT_NOTES_HZ[Math.min(keyIndex, PARENT_NOTES_HZ.length - 1)] ?? PARENT_NOTES_HZ[0];
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + PIANO_DURATION * 0.3);
  osc.start(now);
  osc.stop(now + PIANO_DURATION);
}

/** Brighter, higher xylophone-style tone for the "For kids" pills. */
export function playKidsPillKey(keyIndex: number): void {
  const ctx = getContext();
  if (!ctx) return;
  const freq = KIDS_NOTES_HZ[Math.min(keyIndex, KIDS_NOTES_HZ.length - 1)] ?? KIDS_NOTES_HZ[0];
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "triangle"; // brighter than sine, glockenspiel-like
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.12, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + XYLOPHONE_DURATION);
  osc.start(now);
  osc.stop(now + XYLOPHONE_DURATION);
}

/** Short, soft "tap" for primary buttons (Get Doodlepod, Subscribe, etc.) — distinct from piano/xylophone. */
export function playButtonHover(): void {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(440, now); // single A4, neutral and clean
  gain.gain.setValueAtTime(0.06, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
  osc.start(now);
  osc.stop(now + 0.05);
}

/** Gentle chime for "Ways to play" cards — C major arpeggio (C4, E4, G4, C5), one note per card. */
const CARD_NOTES_HZ = [261.63, 329.63, 392.0, 523.25];

/** Different drum hit per "Ways to play" card: 0=kick, 1=hi-hat, 2=tom, 3=snare. */
export function playCardDrum(cardIndex: number): void {
  const ctx = getContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  const idx = Math.min(cardIndex, 3);

  if (idx === 0) {
    // Kick — low thud
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(90, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.06);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.start(now);
    osc.stop(now + 0.08);
    return;
  }

  if (idx === 1) {
    // Hi-hat — tssh
    const duration = 0.06;
    const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 3000;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(now);
    source.stop(now + duration);
    return;
  }

  if (idx === 2) {
    // Tom — mid punch
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(180, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
    return;
  }

  // 3: Snare — noise + short body
  const duration = 0.08;
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - (i / data.length) * (i / data.length));
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1200;
  filter.Q.value = 1;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start(now);
  source.stop(now + duration);
}

/** Soft tone for "Big Little Ideas" cards (SPEAK, WATCH, PLAY) — G4, B4, D5, distinct from other UI sounds. */
const BIG_LITTLE_NOTES_HZ = [392.0, 493.88, 587.33];

export function playBigLittleIdeasCard(cardIndex: number): void {
  const ctx = getContext();
  if (!ctx) return;
  const freq = BIG_LITTLE_NOTES_HZ[Math.min(cardIndex, BIG_LITTLE_NOTES_HZ.length - 1)] ?? BIG_LITTLE_NOTES_HZ[0];
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "triangle";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.1, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  osc.start(now);
  osc.stop(now + 0.1);
}

export function playCardHover(cardIndex: number): void {
  const ctx = getContext();
  if (!ctx) return;
  const freq = CARD_NOTES_HZ[Math.min(cardIndex, CARD_NOTES_HZ.length - 1)] ?? CARD_NOTES_HZ[0];
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc.start(now);
  osc.stop(now + 0.15);
}
