export default function MapChart() {
  return (
    <div className="card">
      <h3>Sales by Region</h3>

      <div className="map-container">
        <div className="world-map">
          <div className="dot usa">USA</div>
          <div className="dot europe">Europe</div>
          <div className="dot asia">Asia</div>
          <div className="dot africa">Africa</div>
        </div>
      </div>
    </div>
  );
}