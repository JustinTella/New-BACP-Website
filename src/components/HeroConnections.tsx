import { useEffect, useRef } from 'react';

type Network = { viewBox: string; links: readonly string[] };

// The original artwork supplies the connection lines. Add only one moving
// light, so there are no extra strokes competing with the painted network.
const networks: Record<'desktop' | 'mobile', Network> = {
  desktop: {
    viewBox: '0 0 1672 941',
    links: [
      'M 1056 478 C 1086 447 1120 416 1150 400 S 1215 376 1250 377 S 1320 384 1350 400 S 1421 448 1450 482 L 1480 522',
      'M 1480 522 C 1448 519 1418 528 1400 537 S 1365 549 1350 562 S 1311 586 1300 601 L 1273 634',
    ],
  },
  mobile: {
    viewBox: '0 0 941 1672',
    links: [
      'M 470 610 Q 600 400 733 481',
      'M 733 481 Q 600 400 470 610',
      'M 470 610 Q 635 475 803 683',
    ],
  },
};

function HeroConnections({ format, playing }: { format: 'desktop' | 'mobile'; playing: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const elapsedRef = useRef(0);
  const network = networks[format];

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const routes = [...svg.querySelectorAll<SVGPathElement>('.home-hero__route')];
    const lengths = routes.map((route) => route.getTotalLength());
    const traveler = svg.querySelector<SVGGElement>('.home-hero__traveler');
    if (!traveler) return;
    const visibleFormat = window.matchMedia(format === 'mobile' ? '(max-width: 768px)' : '(min-width: 769px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const legSeconds = format === 'mobile' ? 1.8 : 2.2;
    let frameId = 0;
    let previousTime: number | null = null;

    function drawFrame(timestamp: number) {
      if (previousTime !== null) elapsedRef.current += Math.min(timestamp - previousTime, 80) / 1000;
      previousTime = timestamp;
      const elapsed = elapsedRef.current;
      const step = Math.floor(elapsed / legSeconds) % (routes.length * 2);
      const forward = step < routes.length;
      const routeIndex = forward ? step : routes.length * 2 - 1 - step;
      const local = (elapsed % legSeconds) / legSeconds;
      const travel = Math.min(local / 0.9, 1);
      const progress = travel * travel * (3 - 2 * travel);
      const point = routes[routeIndex].getPointAtLength(lengths[routeIndex] * (forward ? progress : 1 - progress));
      traveler.setAttribute('transform', `translate(${point.x} ${point.y})`);
      traveler.style.opacity = '0.95';
      traveler.dataset.direction = forward ? 'forward' : 'backward';
      frameId = window.requestAnimationFrame(drawFrame);
    }

    function syncPlayback() {
      window.cancelAnimationFrame(frameId);
      previousTime = null;
      if (playing && visibleFormat.matches && !reducedMotion.matches) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    }
    syncPlayback();
    visibleFormat.addEventListener('change', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
    return () => {
      window.cancelAnimationFrame(frameId);
      visibleFormat.removeEventListener('change', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
    };
  }, [format, playing]);

  return (
    <svg ref={svgRef} viewBox={network.viewBox} preserveAspectRatio="xMidYMid slice"
      className={`home-hero__connections home-hero__connections--${format}`} aria-hidden="true" focusable="false">
      {network.links.map((path) => <path key={path} className="home-hero__route" d={path} fill="none" stroke="none" />)}
      <g className="home-hero__traveler">
        <circle r="14" fill="#8bd7ff" opacity="0.16" />
        <circle r="8" fill="#b9ebff" opacity="0.3" />
        <circle r="4.2" fill="#f5fdff" />
      </g>
    </svg>
  );
}

export default HeroConnections;
