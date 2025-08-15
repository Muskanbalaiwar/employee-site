import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login"; // Redirect if not logged in
          return;
        }

        const res = await axios.get("http://localhost:5000/api/salary/top-two", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setSalaries(res.data);
      } catch (err) {
        console.error("Error fetching salaries:", err);
        setError("Failed to load salary data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalaries();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Top Salaries</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="dashboard-error">{error}</p>
      ) : (
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((emp) => (
              <tr key={emp.emp_id}>
                <td>{emp.emp_id}</td>
                <td>{emp.name}</td>
                <td>₹{emp.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
