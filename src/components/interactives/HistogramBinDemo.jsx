import { useMemo, useState } from 'react';

const values = [
  42, 45, 47, 49, 51, 52, 54, 55, 56, 58,
  60, 61, 62, 64, 66, 68, 69, 70, 72, 74,
  75, 76, 78, 80, 83, 86, 89, 92
];

export default function HistogramBinDemo() {
  const [binWidth, setBinWidth] = useState(10);

  const bins = useMemo(() => {
    const min = 40;
    const max = 100;
    const out = [];

    for (let start = min; start < max; start += binWidth) {
      const end = start + binWidth;
      const count = values.filter((x) => x >= start && x < end).length;
      out.push({ start, end, count });
    }

    return out;
  }, [binWidth]);

  const maxCount = Math.max(...bins.map((b) => b.count), 1);

  return (
    <section className="interactive-box">
      <h3>Interactive histogram: bin width</h3>

      <p>
        Change the bin width and notice how the same data can look smoother or more detailed.
      </p>

      <label>
        Bin width: {binWidth}
        <input
          type="range"
          min="5"
          max="20"
          step="5"
          value={binWidth}
          onChange={(e) => setBinWidth(Number(e.target.value))}
        />
      </label>

      <svg viewBox="0 0 520 260" className="interactive-svg" role="img" aria-label="Histogram controlled by bin width">
        <line x1="40" y1="220" x2="500" y2="220" className="axis-line" />
        <line x1="40" y1="30" x2="40" y2="220" className="axis-line" />

        {bins.map((bin, index) => {
          const barWidth = 440 / bins.length;
          const height = (bin.count / maxCount) * 165;
          const x = 45 + index * barWidth;
          const y = 220 - height;

          return (
            <g key={`${bin.start}-${bin.end}`}>
              <rect
                x={x}
                y={y}
                width={barWidth - 5}
                height={height}
                className="hist-bar"
              />
              <text x={x + barWidth / 2 - 2} y="242" textAnchor="middle" className="svg-label">
                {bin.start}
              </text>
              <text x={x + barWidth / 2 - 2} y={y - 6} textAnchor="middle" className="svg-label">
                {bin.count}
              </text>
            </g>
          );
        })}
      </svg>

      <p>
        A histogram is not just decoration. It changes how we see centre, spread, gaps, skewness, and unusual values.
      </p>
    </section>
  );
}
