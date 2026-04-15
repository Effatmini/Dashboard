import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Asia Pacific", value: 4040, percent: "31.98%" },
  { name: "Europe", value: 3290, percent: "26%" },
  { name: "USCA", value: 2360, percent: "18.7%" },
  { name: "LATAM", value: 2160, percent: "17.12%" },
];

const COLORS = ["#4C6FFF", "#00C2A8", "#FF8C42", "#A66DD4"];

export default function SalesByMarket() {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Sales by Market</h3>

      <div style={styles.content}>
        {/* Donut */}
        <div style={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="85%"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div style={styles.legend}>
          <p style={styles.marketTitle}>Market</p>

          {data.map((item, i) => (
            <div key={i} style={styles.legendItem}>
              <div style={styles.left}>
                <span
                  style={{
                    ...styles.dot,
                    backgroundColor: COLORS[i],
                  }}
                ></span>
                <span>{item.name}</span>
              </div>

              <div style={styles.right}>
                <span>${(item.value / 1000).toFixed(2)}M</span>
                <span style={styles.percent}>{item.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .content {
            flex-direction: column !important;
            align-items: center;
          }

          .legend {
            width: 100% !important;
            margin-top: 15px;
          }

          .chartWrapper {
            width: 100% !important;
            height: 200px !important;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  card: {
    background: "linear-gradient(160deg, #2b2237, #3a2f47)",
    borderRadius: "18px",
    padding: "18px",
    color: "#fff",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
  },

  title: {
    fontSize: "16px",
    marginBottom: "10px",
    opacity: 0.9,
  },

  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },

  chartWrapper: {
    width: "55%",
    height: "220px",
  },

  legend: {
    width: "45%",
  },

  marketTitle: {
    fontSize: "13px",
    marginBottom: "10px",
    opacity: 0.7,
  },

  legendItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "13px",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  right: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },

  percent: {
    fontSize: "11px",
    opacity: 0.6,
  },
};