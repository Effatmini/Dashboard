import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Canon ImageCLASS", value: 25000 },
  { name: "Cisco Smart Switch", value: 17000 },
  { name: "Motorola Headset", value: 17000 },
  { name: "Hoover Vacuum", value: 12000 },
  { name: "Sauder Desk", value: 11000 },
  { name: "Harbour Chair", value: 10000 },
  { name: "Lenovo Laptop", value: 9500 },
  { name: "Samsung Monitor", value: 9000 },
  { name: "HP Printer", value: 8500 },
  { name: "Logitech Mouse", value: 8000 }
];

const colors = [
  "#4da3ff",
  "#5dade2",
  "#76d7ea",
  "#48c9b0",
  "#52be80",
  "#58d68d",
  "#7dcea0",
  "#a9dfbf",
  "#d4efdf",
  "#e8f8f5"
];

export default function TopProducts() {
  return (
    <div className="chart-card">
      <h3>Top 10 Products</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <XAxis type="number" tick={{ fill: "#aaa" }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#fff", fontSize: 12 }}
          />
          <Tooltip />

          <Bar dataKey="value" radius={[0, 10, 10, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}