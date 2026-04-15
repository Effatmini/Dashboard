import { Home, Box, BarChart3 } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>⚡ SaaS Panel</h2>

      <ul>
        <li><Home size={18} /> Dashboard</li>
        <li><Box size={18} /> Products</li>
        <li><BarChart3 size={18} /> Analytics</li>
      </ul>
    </div>
  );
}