import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { comparisonColumns, comparisonRows } from '@/content/blueangel';

function Yes() {
  return (
    <span
      className="inline-grid h-7 w-7 place-items-center rounded-full border-[1.5px] border-navy text-navy"
      role="img"
      aria-label="Yes"
    >
      <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
    </span>
  );
}

function No() {
  return (
    <span className="inline-grid h-7 w-7 place-items-center text-navy/70" role="img" aria-label="No">
      <X className="h-[1.35rem] w-[1.35rem]" strokeWidth={2.25} aria-hidden />
    </span>
  );
}

/**
 * Side-by-side of the three realistic paths open to an independent physician.
 * Every row label links to the page that explains it, so the table also works
 * as a contents page for the rest of the site.
 */
function ComparisonTable() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[46rem] border-collapse text-left">
        <caption className="sr-only">
          How Blue Angel compares with a health system or private-equity roll-up and
          with staying solo
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-[42%] pb-6 pr-6" />
            {comparisonColumns.map((column, i) => (
              <th
                key={column}
                scope="col"
                className={`w-[19.33%] px-3 pb-6 text-center align-bottom text-xs font-bold uppercase leading-snug tracking-[0.12em] ${
                  i === 0 ? 'text-navy' : 'text-navy/55'
                }`}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="border-t-[3px] border-gold">
          {comparisonRows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-black/[0.045]' : 'bg-transparent'}>
              <th scope="row" className="py-5 pl-5 pr-6 text-left font-normal">
                <Link
                  to={row.to}
                  title={`${row.linkLabel} — learn more`}
                  className="text-base leading-snug text-foreground/85 underline decoration-navy/20 decoration-1 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy/60"
                >
                  {row.label}
                </Link>
              </th>
              {row.values.map((value, j) => (
                <td key={comparisonColumns[j]} className="px-3 py-5 text-center">
                  {value ? <Yes /> : <No />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
