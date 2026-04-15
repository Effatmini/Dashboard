import * as echarts from "echarts";

export async function loadWorldMap() {
  const res = await fetch(
    "https://fastly.jsdelivr.net/npm/echarts@5/map/json/world.json"
  );
  const worldJson = await res.json();

  echarts.registerMap("world", worldJson);
}