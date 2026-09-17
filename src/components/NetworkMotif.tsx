import arch from '@/assets/network-arc-arch.webp';
import archSoft from '@/assets/network-arc-arch-soft.webp';
import sweep from '@/assets/network-arc-sweep.webp';
import sweepSoft from '@/assets/network-arc-sweep-soft.webp';

type Point = readonly [number, number];
type Variant = 'a' | 'b' | 'c' | 'partner';

// Measured centers of the glowing dots in the supplied 2172 x 724 artwork.
// Using the endpoints to position each image makes adjoining arcs meet at
// the same dot, while retaining the original texture and proportions.
const artwork = {
  arch: { src: arch, start: [188, 556], end: [2002, 531] },
  archSoft: { src: archSoft, start: [225, 559], end: [2000, 468] },
  sweep: { src: sweep, start: [140, 600], end: [2054, 280] },
  sweepSoft: { src: sweepSoft, start: [278, 611], end: [1993, 214] },
} as const;

type Link = { art: keyof typeof artwork; from: number; to: number };
type Composition = { nodes: Point[]; links: Link[] };

const variants: Record<Variant, Composition> = {
  a: {
    nodes: [[70, 300], [1180, 70], [1340, 350]],
    links: [
      { art: 'sweep', from: 0, to: 1 },
      { art: 'archSoft', from: 1, to: 2 },
      { art: 'arch', from: 0, to: 2 },
    ],
  },
  b: {
    nodes: [[85, 650], [720, 70], [1360, 630]],
    links: [
      { art: 'archSoft', from: 0, to: 1 },
      { art: 'sweepSoft', from: 1, to: 2 },
      { art: 'arch', from: 0, to: 2 },
    ],
  },
  c: {
    nodes: [[75, 640], [660, 350], [1360, 580]],
    links: [
      { art: 'sweepSoft', from: 0, to: 1 },
      { art: 'arch', from: 1, to: 2 },
      { art: 'archSoft', from: 0, to: 2 },
    ],
  },
  partner: {
    nodes: [[28, 360], [725, 390], [1390, 310]],
    links: [
      { art: 'arch', from: 0, to: 1 },
      { art: 'sweep', from: 1, to: 2 },
      { art: 'archSoft', from: 0, to: 2 },
    ],
  },
};

const mobile: Composition = {
  nodes: [[22, 210], [370, 350], [50, 710]],
  links: [
    { art: 'arch', from: 0, to: 1 },
    { art: 'sweepSoft', from: 1, to: 2 },
  ],
};

function alignEndpoints(art: keyof typeof artwork, from: Point, to: Point) {
  const { start, end } = artwork[art];
  const sx = end[0] - start[0];
  const sy = end[1] - start[1];
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const lengthSquared = sx * sx + sy * sy;
  const a = (dx * sx + dy * sy) / lengthSquared;
  const b = (dy * sx - dx * sy) / lengthSquared;
  const tx = from[0] - a * start[0] + b * start[1];
  const ty = from[1] - b * start[0] - a * start[1];

  return `matrix(${a} ${b} ${-b} ${a} ${tx} ${ty})`;
}

function Connections({ nodes, links }: Composition) {
  return links.map(({ art, from, to }) => (
    <image
      key={`${from}-${to}`}
      href={artwork[art].src}
      width="2172"
      height="724"
      transform={alignEndpoints(art, nodes[from], nodes[to])}
    />
  ));
}

type NetworkMotifProps = {
  variant?: Variant;
  /** Positioning and any opacity override for the wrapper. */
  className?: string;
};

function NetworkMotif({ variant = 'a', className = '' }: NetworkMotifProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 select-none overflow-hidden ${className}`}
    >
      <svg
        viewBox={variant === 'partner' ? '0 0 1440 480' : '0 0 1440 720'}
        preserveAspectRatio="xMidYMid meet"
        className="hidden h-full w-full md:block"
        focusable="false"
      >
        <Connections {...variants[variant]} />
      </svg>
      <svg
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full opacity-70 md:hidden"
        focusable="false"
      >
        <Connections {...mobile} />
      </svg>
    </div>
  );
}

export default NetworkMotif;
