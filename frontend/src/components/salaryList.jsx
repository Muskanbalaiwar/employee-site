import { useState } from "react";
import api from "../api/axios";

export default function SalaryList() {
  const [salaries, setSalaries] = useState([]);

  const fetchSalaries = async () => {
    const res = await api.get("/top-salaries");
    setSalaries(res.data);
  };

  return (
    <div>
      <button onClick={fetchSalaries}>Fetch Top Salaries</button>
      <ul>
        {salaries.map((s, i) => (
          <li key={i}>
            {s.name} — ₹{Number(s.amount).toLocaleString("en-IN")}
          </li>
        ))}
      </ul>
    </div>
  );
}
