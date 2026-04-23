import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, form]);
    setForm({ name: "", email: "", password: "" });
    setSuccess(true);
  };

  return (
    <div className="app">
      <h1>Registration Form</h1>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn">Register</button>
        </form>

        {success && <p className="success">Registration Successful!</p>}

        {users.length > 0 && (
          <div className="user-box">
            <h3>Registered Users</h3>
            <ul>
              {users.map((u, i) => (
                <li
                  key={i}
                  data-initials={u.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                >
                  {u.name} - {u.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
