import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type StatItem = {
  value: number;
  label: string;
  suffix?: string;
};

const statsData: StatItem[] = [
  { value: 316, label: "Clients Satisfactory Reviews", suffix: "+" },
  { value: 97, label: "Clients Success Rate", suffix: "%" },
  { value: 34, label: "Professional Team Members", suffix: "+" },
  { value: 31, label: "Active Customers", suffix: "k" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true, 
  });

  return (
    <section className="stats-section" ref={ref}>
      {statsData.map((item, index) => (
        <StatCard key={index} {...item} visible={inView} />
      ))}
    </section>
  );
};

type StatCardProps = StatItem & { visible: boolean };

const StatCard = ({ value, label, suffix, visible }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [visible, value]);

  return (
    <div className="stat-box">
      <div className="stat-number">
        {count}
        <span className="suffix">{suffix}</span>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default Stats;
