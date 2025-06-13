// src/comp/AnimatedCounter.jsx
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ targetNumber = 5451, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber, duration]);

  return (
    <div className={` relative text-5xl text-center font-extrabold text-white ${className}`}>
      <div className='flex justify-center py-3 pb-5'>
        <div className="flex justify-center items-center gap-2 text-3xl font-bold text-white px-6 py-4 rounded-xl relative border border-highly-accent shadow-[0_0_25px_#00D6CB] bg-black/30">
  <p className="text-highly-accent text-4xl">+</p>
  <span>{count.toLocaleString()}</span>
</div>

      </div>
    </div>
  );
};

export default AnimatedCounter;
