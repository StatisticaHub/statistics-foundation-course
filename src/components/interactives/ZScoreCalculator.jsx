import { useState } from 'react';

export default function ZScoreCalculator() {
  const [x, setX] = useState(75);
  const [mean, setMean] = useState(65);
  const [sd, setSd] = useState(10);

  const z = sd === 0 ? null : (x - mean) / sd;
  const clamped = z === null ? 250 : Math.max(30, Math.min(470, 250 + z * 65));

  return (
    <section className="interactive-box">
      <h3>Interactive calculator: z-score</h3>

      <p>
        Enter a value, mean, and standard deviation. The calculator shows how far the value lies from the mean in standard deviation units.
      </p>

      <label>
        Observed value
        <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
      </label>

      <label>
        Mean
        <input type="number" value={mean} onChange={(e) => setMean(Number(e.target.value))} />
      </label>

      <label>
        Standard deviation
        <input type="number" value={sd} onChange={(e) => setSd(Number(e.target.value))} />
      </label>

      <svg viewBox="0 0 500 115" className="interactive-svg" role="img" aria-label="Z-score number line">
        <line x1="30" y1="60" x2="470" y2="60" className="axis-line" />

        {[-3, -2, -1, 0, 1, 2, 3].map((tick) => {
          const pos = 250 + tick * 65;
          return (
            <g key={tick}>
              <line x1={pos} y1="53" x2={pos} y2="67" className="axis-line" />
              <text x={pos} y="90" textAnchor="middle" className="svg-label">{tick}</text>
            </g>
          );
        })}

        <circle cx={clamped} cy="60" r="8" className="dot-point" />
        <text x={clamped} y="35" textAnchor="middle" className="svg-label">your value</text>
      </svg>

      {z === null ? (
        <div className="quiz-wrong">
          Standard deviation cannot be zero because division by zero is undefined.
        </div>
      ) : (
        <div className="quiz-correct">
          <strong>z = {z.toFixed(2)}.</strong> The value is {Math.abs(z).toFixed(2)} standard deviations {z >= 0 ? 'above' : 'below'} the mean.
        </div>
      )}
    </section>
  );
}
