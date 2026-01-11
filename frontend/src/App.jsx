import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    axios.get("http://localhost:5001/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const runJob = async (id) => {
    try {
      const res = await axios.post(`http://localhost:5001/api/jobs/run/${id}`);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to run job");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Job Dashboard</h1>

      <table className="border w-full text-left">
        <thead>
          <tr className="border-b">
            <th>ID</th>
            <th>Name</th>
            <th>Schedule</th>
            <th>URL</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map(j => (
            <tr key={j.id} className="border-b">
              <td>{j.id}</td>
              <td>{j.name}</td>
              <td>{j.schedule}</td>
              <td>{j.url}</td>
              <td>
                <button
                  onClick={() => runJob(j.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Run
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
