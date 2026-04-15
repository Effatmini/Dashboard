import StatCard from "../components/statcard";
import Chart from "../components/charts";
import "../styles.css";
import MapChart from "../components/MapChart";
import MarketChart from "../components/marketchart";
import Segment from "../components/segment";
import TopCustomers from "../components/TopCustomers";
import TopProducts from "../components/charts";


export default function Dashboard() {
  return (
    <div className="dashboard">
      
      <div className="header">
        <h1>Eye Dashboard</h1>
        <div className="filters">
          <button>2012</button>
          <button>2013</button>
          <button>2014</button>
          <button>2015</button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <StatCard title="Sales" value="$12.64M" />
        <StatCard title="Quantity" value="178K" />
        <StatCard title="Avg Delivery Days" value="4" />
        <StatCard title="Returned Orders" value="1079" />
      </div>

      {/* Charts */}
      <div className="charts-row">
        <Segment />
       <MarketChart />
        <TopCustomers />
        <TopProducts />
       <MapChart />
      </div>

    
    </div>
  );
}