import { useNavigate } from "react-router-dom";

const Admin = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1>Admin Dashboard</h1>

      <button onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Admin;
