import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, form]);

    setForm({
      name: "",
      email: "",
      password: "",
    });

    setSuccess(true);
  };

  return (
    <div className="app">

      <div className="card">

        <div className="top">
          {/* <p>Create your account</p> */}
          <h1>Registration Form</h1>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn">
            Create Account
          </button>

        </form>

        {success && (
          <p className="success">
            Registration Successful
          </p>
        )}

        {users.length > 0 && (
          <div className="user-box">

            <h3>Registered Users</h3>

            <div className="user-list">

              {users.map((u, i) => (
                <div className="user-item" key={i}>

                  <div className="avatar">
                    {u.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <h4>{u.name}</h4>
                    <p>{u.email}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;