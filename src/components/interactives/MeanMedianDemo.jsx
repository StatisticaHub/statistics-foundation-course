import { useMemo, useState } from 'react';

function mean(values) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[mid];
  return (sorted[mid - 1] + sorted[mid]) / 2;
}

export default function MeanMedianDemo() {
  const [outlier, setOutlier] = useState(100);

  const values = useMemo(() => [4, 6, 8, 10, outlier], [outlier]);
  const xMean = mean(values);
  const xMedian = median(values);

  const min = 0;
  const max = 150;
  const scale = (x) => 30 + ((x - min) / (max - min)) * 440;

  return (
    <section className="interactive-box">
      <h3>Interactive graph: mean versus median</h3>

      <p>
        Move the final value and watch how the mean reacts more strongly than the median.
      </p>

      <label>
        Adjustable value: {outlier}
        <input
          type="range"
          min="10"
          max="150"
          value={outlier}
          onChange={(e) => setOutlier(Number(e.target.value))}
        />
      </label>

      <svg viewBox="0 0 500 130" className="interactive-svg" role="img" aria-label="Dot plot showing mean and median">
        <line x1="30" y1="75" x2="470" y2="75" className="axis-line" />

        {[0, 50, 100, 150].map((tick) => (
          <g key={tick}>
            <line x1={scale(tick)} y1="70" x2={scale(tick)} y2="80" className="axis-line" />
            <text x={scale(tick)} y="102" textAnchor="middle" className="svg-label">{tick}</text>
          </g>
        ))}

        {values.map((value, index) => (
          <circle key={`${value}-${index}`} cx={scale(value)} cy="75" r="7" className="dot-point" />
        ))}

        <line x1={scale(xMean)} y1="25" x2={scale(xMean)} y2="95" className="mean-line" />
        <text x={scale(xMean)} y="18" textAnchor="middle" className="svg-label">mean</text>

        <line x1={scale(xMedian)} y1="35" x2={scale(xMedian)} y2="95" className="median-line" />
        <text x={scale(xMedian)} y="122" textAnchor="middle" className="svg-label">median</text>
      </svg>

      <div className="mini-stat-grid">
        <div><strong>Data</strong><br />{values.join(', ')}</div>
        <div><strong>Mean</strong><br />{xMean.toFixed(2)}</div>
        <div><strong>Median</strong><br />{xMedian.toFixed(2)}</div>
      </div>

      <p>
        When the extreme value increases, the mean is pulled towards it. The median remains more stable because it depends on order rather than the size of the extreme value.
      </p>
    </section>
  );
}
