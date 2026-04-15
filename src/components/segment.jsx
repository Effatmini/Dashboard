import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "../styles.css";

const data = [
  { name: "Consumer", value: 6510000 },
  { name: "Corporate", value: 3820000 },
  { name: "Home Office", value: 2310000 },
];

const COLORS = ["#7AD7D0", "#7B61FF", "#8B2E3C"];

const formatValue = (value) => {
  return `$${(value / 1000000).toFixed(2)}M`;
};

export default function SalesSegment() {
  return (
    <div className="card">
      <h3 className="title">Sales by Segment</h3>

      <div className="content">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label={({ percent }) =>
                  `${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatValue(value)} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="legend">
          {data.map((item, index) => (
            <div className="legend-item" key={index}>
              <span
                className="dot"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              <span className="label">{item.name}</span>
              <span className="value">{formatValue(item.value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}