import React, { useContext, useState } from "react";
import { SiteContext } from "../context/SiteContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { services, setServices, theme, setTheme } =
    useContext(SiteContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Add Service
  const addService = () => {
    if (!title || !description || !image) {
      alert("All fields required!");
      return;
    }

    const newService = {
      id: Date.now(),
      title,
      description,
      image,
    };

    setServices([...services, newService]);

    setTitle("");
    setDescription("");
    setImage("");
  };

  // Delete Service
  const deleteService = (id) => {
    const updated = services.filter((item) => item.id !== id);
    setServices(updated);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        style={{
          background: "red",
          color: "white",
          padding: "8px 16px",
          border: "none",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <hr />

      <h2>Add Service</h2>

      <input
        type="text"
        placeholder="Service Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <br /><br />

      <button
        onClick={addService}
        style={{
          background: "green",
          color: "white",
          padding: "8px 16px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Service
      </button>

      <hr />

      <h2>Theme Switcher</h2>

      <button onClick={() => setTheme("theme1")}>Theme 1</button>
      <button onClick={() => setTheme("theme2")}>Theme 2</button>

      <hr />

      <h2>All Services</h2>

      {services.length === 0 && <p>No services added yet.</p>}

      {services.map((service) => (
        <div
          key={service.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <img
            src={service.image}
            alt="Service"
            width="100"
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button
            onClick={() => deleteService(service.id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 12px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
