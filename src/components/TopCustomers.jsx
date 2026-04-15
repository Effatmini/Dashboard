import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TopCustomers = () => {
  const data = {
    labels: [
      "Tamara Chand",
      "Ray Buch",
      "Sanjit Chand",
      "Hunter Lopez",
      "Bill Eplett",
      "Harry Marie",
      "Susan Pistek",
      "Mike Geck",
      "Adrian Barton",
      "Tom Ashbrook"
    ],
    datasets: [
      {
        label: "Sales",
        data: [8700, 8500, 8200, 7800, 7400, 7000, 6500, 6500, 6400, 6300],
        backgroundColor: [
          "#8e44ad",
          "#9b59b6",
          "#af7ac5",
          "#c39bd3",
          "#d7bde2",
          "#f4d03f",
          "#f5c542",
          "#f7dc6f",
          "#f9e79f",
          "#fad7a0"
        ],
        borderRadius: 8
      }
    ]
  };

  const options = {
    indexAxis: "y", // يخليها أفقية
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#fff"
        },
        grid: {
          color: "rgba(255,255,255,0.1)"
        }
      },
      y: {
        ticks: {
          color: "#fff"
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="card">
      <h3>Top 10 Customers</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopCustomers;