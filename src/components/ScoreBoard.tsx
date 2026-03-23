import BarChart from "./BarGraph";

interface ScoreBoardProps {
  items: {
    progress: number;
    label: string;
    className?: string;
    containerClassName?: string;
  }[];
}

export const testScoreBoardProps: ScoreBoardProps = {
  items: [
    {
      label: "A",
      progress: 34,
      className: "rounded-md bg-green-600",
    },
    {
      label: "B",
      progress: 14,
      className: "rounded-md bg-red-600",
    },
    {
      label: "C",
      progress: 34,
      className: "rounded-md bg-green-600",
    },
    {
      label: "D",
      progress: 70,
      className: "rounded-md bg-green-600",
    },
    {
      label: "E",
      progress: 52,
      className: "rounded-md bg-green-600",
    },
    {
      label: "F",
      progress: 30,
      className: "rounded-md bg-green-600",
    },
    {
      label: "G",
      progress: 37,
      className: "rounded-md bg-green-600",
    },
    {
      label: "H",
      progress: 72,
      className: "rounded-md bg-green-600",
    },
    {
      label: "I",
      progress: 42,
      className: "rounded-md bg-green-600",
    },
  ],
};

export default function ScoreBoard({
  items = testScoreBoardProps.items,
}: {
  items: {
    progress: number;
    label: string;
    className?: string;
    containerClassName?: string;
  }[];
}) {
  return (
    <div className="group flex flex-col border border-foreground/10 bg-background p-4 transition-all duration-700">
      <p className="text-base text-foreground">
        Status:
        <span className="font-semibold text-green-700"> Good </span>
      </p>
      <div className="w-full flex-1 min-w-[350px] lg:min-w-[400px]">
        <BarChart height={90} items={items} />
      </div>
      <h5 className="mt-4 text-sm text-muted-foreground">Overall Progress</h5>
      <p className="font-semibold text-foreground">
        80% <span className="text-sm text-muted-foreground">(score, progress)</span>
      </p>
    </div>
  );
}
