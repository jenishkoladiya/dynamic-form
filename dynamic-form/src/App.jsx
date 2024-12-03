import { useState } from "react";
import "./App.css";

const App = () => {
  // State to store dynamic user of fields
  const [user, setUser] = useState([]);

  // State to manage form data
  const [formData, setFormData] = useState([]);

  // Function to add a new user
  const addUser = () => {
    const newUser = {
      id: Date.now(), // Unique ID for each user
      name: "",
      email: "",
      password: "",
    };
    setUser([...user, newUser]);
  };

  // Function to handle changes in input fields
  const handleInputChange = (id, field, value) => {
    const updatedUser = user.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setUser(updatedUser);
    setFormData(updatedUser);
  };

  // Function to remove a user
  const removeUser = (id) => {
    const updatedUser = user.filter((row) => row.id !== id);
    setUser(updatedUser);
    setFormData(updatedUser);
  };

  // Submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted with Data: ", formData);
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <button type="button" onClick={addUser}>
            Add
          </button>
        </div>
        {user.map((row) => (
          <div key={row.id} className="row">
            <input
              type="text"
              placeholder="Name"
              value={row.name}
              onChange={(e) =>
                handleInputChange(row.id, "name", e.target.value)
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={row.email}
              onChange={(e) =>
                handleInputChange(row.id, "email", e.target.value)
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={row.password}
              onChange={(e) =>
                handleInputChange(row.id, "password", e.target.value)
              }
            />
            <button
              type="button"
              onClick={() => removeUser(row.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        ))}
        {user.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default App;
