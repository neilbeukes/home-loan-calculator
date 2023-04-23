import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ResultsChartProps {
  totalInterest: number;
  totalLoan: number;
  netLoan: number;
  ref: React.RefObject<HTMLDivElement> | null;
}

const ResultsChart = (props: ResultsChartProps) => {
  const { totalInterest, totalLoan, netLoan, ref } = props;

  const data = [
    { name: "Borrowed", value: netLoan },
    { name: "Interest", value: totalInterest },
  ];
  const COLORS = ["#1FD65F", "#EA5234"];

  if (totalLoan === 0) return null;

  return (
    <div className="p-[24px] h-[300px] w-[350px]" ref={ref}>
      <ResponsiveContainer width={350} height="100%">
        <PieChart>
          <Pie
            data={data}
            cx={150}
            cy={110}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            labelLine={true}
            label={(entry) => entry.name}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultsChart;
