const ThemeOne = ({ services }) => {
  return (
    <div className="theme-one">
      <h2 style={{ textAlign: "center" }}>Our Services</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "40px"
      }}>
        {services.map((service) => (
          <div key={service.id} style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            <img
              src={service.image}
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeOne;
