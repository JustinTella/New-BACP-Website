import { useId } from 'react';

type Point = readonly [number, number];
type Variant = 'a' | 'b' | 'c' | 'partner';

/** A run of connected nodes, drawn as one continuous line. */
type Chain = {
  points: Point[];
  /** Relative weight — the secondary chain in each frame sits further back. */
  depth?: 'front' | 'back';
};

type Composition = { viewBox: string; chains: Chain[] };

/**
 * The glowing link-and-node motif from the hero painting, redrawn as a
 * background texture.
 *
 * Two rules give it the character the artwork has. First, every chain starts
 * and ends outside the frame, so the lines read as a fragment of a much larger
 * network passing behind the page rather than a graphic sitting inside a box.
 * Second, the strokes do not scale: `non-scaling-stroke` holds them at a
 * hairline whatever the viewport, so they stay a whisper on a large monitor
 * instead of thickening into a diagram.
 *
 * Colours are sampled from the arcs in the original artwork -- #BCE5FA through
 * the core of the stroke, #80BEEE in the halo around it.
 */
const compositions: Record<Variant, Composition> = {
  a: {
    viewBox: '0 0 1440 720',
    chains: [
      { points: [[-240, 486], [300, 330], [762, 474], [1182, 252], [1704, 336]] },
      { points: [[-200, 150], [420, 252], [1020, 96], [1640, 234]], depth: 'back' },
    ],
  },
  b: {
    viewBox: '0 0 1440 720',
    chains: [
      { points: [[-220, 564], [426, 378], [900, 522], [1386, 300], [1720, 372]] },
      { points: [[-180, 246], [540, 132], [1140, 288], [1680, 150]], depth: 'back' },
    ],
  },
  c: {
    viewBox: '0 0 1440 720',
    chains: [
      { points: [[-200, 186], [480, 384], [1020, 192], [1660, 420]] },
      { points: [[-160, 606], [560, 486], [1140, 618], [1700, 498]], depth: 'back' },
    ],
  },
  partner: {
    viewBox: '0 0 1440 480',
    chains: [
      { points: [[-220, 330], [414, 180], [978, 324], [1656, 156]] },
      { points: [[-180, 96], [600, 246], [1260, 108], [1680, 210]], depth: 'back' },
    ],
  },
};

/** Narrow frame: the same idea turned to run down the page instead of across. */
const mobile: Composition = {
  viewBox: '0 0 400 800',
  chains: [
    { points: [[-70, 130], [232, 296], [96, 528], [356, 700], [300, 910]] },
    { points: [[470, 210], [270, 430], [420, 640]], depth: 'back' },
  ],
};

/**
 * Catmull-Rom through the nodes, converted to cubic beziers. Curving through
 * the points rather than between them keeps the line continuous and lets each
 * node sit exactly on it, the way the painted arcs meet at their dots.
 */
function smoothPath(points: Point[], tension = 0.9) {
  if (points.length < 2) return '';

  const padded = [points[0], ...points, points[points.length - 1]];
  const round = (n: number) => Math.round(n * 100) / 100;
  let d = `M ${round(points[0][0])} ${round(points[0][1])}`;

  for (let i = 1; i < padded.length - 2; i += 1) {
    const [x0, y0] = padded[i - 1];
    const [x1, y1] = padded[i];
    const [x2, y2] = padded[i + 1];
    const [x3, y3] = padded[i + 2];

    const c1x = x1 + ((x2 - x0) / 6) * tension;
    const c1y = y1 + ((y2 - y0) / 6) * tension;
    const c2x = x2 - ((x3 - x1) / 6) * tension;
    const c2y = y2 - ((y3 - y1) / 6) * tension;

    d += ` C ${round(c1x)} ${round(c1y)}, ${round(c2x)} ${round(c2y)}, ${round(x2)} ${round(y2)}`;
  }

  return d;
}

/** Only the nodes inside the frame get a dot; the rest are past the edge. */
function visibleNodes(points: Point[], viewBox: string) {
  const [, , width, height] = viewBox.split(' ').map(Number);
  return points.filter(([x, y]) => x > 12 && x < width - 12 && y > 12 && y < height - 12);
}

function Chains({ viewBox, chains }: Composition) {
  return (
    <>
      {chains.map((chain) => {
        const back = chain.depth === 'back';
        const d = smoothPath(chain.points);

        return (
          <g key={d} opacity={back ? 0.55 : 1}>
            {/* Wide, faint pass reads as the glow around the line */}
            <path
              d={d}
              fill="none"
              stroke="#80BEEE"
              strokeWidth={back ? 4 : 6}
              strokeOpacity={0.2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={d}
              fill="none"
              stroke="#BCE5FA"
              strokeWidth={back ? 0.75 : 1}
              strokeOpacity={0.9}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            {visibleNodes(chain.points, viewBox).map(([cx, cy]) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r={back ? 6 : 8} fill="#80BEEE" fillOpacity={0.18} />
                <circle cx={cx} cy={cy} r={back ? 1.6 : 2.2} fill="#DCF2FD" fillOpacity={0.95} />
              </g>
            ))}
          </g>
        );
      })}
    </>
  );
}

type NetworkMotifProps = {
  variant?: Variant;
  /** Positioning and any opacity override for the wrapper. */
  className?: string;
};

/**
 * The drawing spans the full width of its section and keeps its own
 * proportions, so it is the left and right edges that cut the lines -- they
 * enter and leave the frame rather than ending inside it.
 *
 * Height deliberately follows from the width instead of filling the section.
 * Stretching to fill would zoom a tall section's drawing to twice its size and
 * show only a fragment of it; this way a tall section simply gets the motif as
 * a band across its middle, at the weight every other section has.
 */
function MotifSvg({
  composition,
  glowId,
  className,
}: {
  composition: Composition;
  glowId: string;
  className: string;
}) {
  return (
    <svg
      viewBox={composition.viewBox}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      focusable="false"
    >
      <defs>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        <Chains {...composition} />
      </g>
    </svg>
  );
}

function NetworkMotif({ variant = 'a', className = '' }: NetworkMotifProps) {
  // Filter ids must be unique or several instances on one page collide, and
  // the two breakpoint frames each carry their own copy.
  const id = useId().replace(/:/g, '');

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 flex select-none items-center overflow-hidden ${className}`}
    >
      <MotifSvg
        composition={compositions[variant]}
        glowId={`motif-glow-${id}`}
        className="hidden h-auto w-full md:block"
      />
      <MotifSvg
        composition={mobile}
        glowId={`motif-glow-m-${id}`}
        className="h-auto w-full opacity-80 md:hidden"
      />
    </div>
  );
}

export default NetworkMotif;
