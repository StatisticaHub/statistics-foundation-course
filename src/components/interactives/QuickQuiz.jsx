import { useState } from 'react';

export default function QuickQuiz({ question, options, correct, explanation }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="interactive-box">
      <h3>Quick check</h3>
      <p><strong>{question}</strong></p>

      <div className="quiz-options">
        {options.map((option, index) => (
          <button
            type="button"
            key={option}
            onClick={() => setSelected(index)}
            className={selected === index ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div className={selected === correct ? 'quiz-correct' : 'quiz-wrong'}>
          <strong>{selected === correct ? 'Correct.' : 'Not quite.'}</strong>{' '}
          {explanation}
        </div>
      )}
    </section>
  );
}
