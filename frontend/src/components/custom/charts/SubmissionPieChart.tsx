import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LabelList, Pie, PieChart } from "recharts";

const SubmissionPieChart = ({
  correct,
  wrong,
  total,
}: {
  correct: number;
  wrong: number;
  total: number;
}) => {
  const submissionData = [
    {
      name: "Correct",
      value: correct > 0 ? (correct / total) * 100 : 0,
      fill: "#34D399",
      label: `${((correct / total) * 100).toFixed(1)}%`,
    },
    {
      name: "Wrong",
      value: wrong > 0 ? (wrong / total) * 100 : 0,
      fill: "#EF4444",
      label: `${((wrong / total) * 100).toFixed(1)}%`,
    },
    {
      name: "Unanswered",
      value: total > 0 ? ((total - correct - wrong) / total) * 100 : 0,
      fill: "#94A3B8",
      label: `${(((total - correct - wrong) / total) * 100).toFixed(1)}%`,
    },
  ];

  const chartConfig = {
    correct: {
      label: "Correct",
      fill: "#34D399",
    },
    wrong: {
      label: "Wrong",
      fill: "#EF4444",
    },
  };

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            content={<ChartTooltipContent nameKey="visitors" hideLabel />}
          />
          <Pie data={submissionData} dataKey="value" fill="fill">
            <LabelList
              dataKey="label"
              position="inside"
              className="fill-white font-montserrat font-[500] tracking-wider text-[1rem] "
              stroke="none"
              fontSize={12}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default SubmissionPieChart;
