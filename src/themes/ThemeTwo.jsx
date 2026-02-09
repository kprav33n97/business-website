const ThemeTwo = ({ services }) => {
  return (
    <div style={{ background: "#111", color: "#fff", padding: "50px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Premium Services
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
        {services.map((service) => (
          <div key={service.id} style={{
            width: "300px",
            background: "#1f1f1f",
            borderRadius: "12px",
            overflow: "hidden"
          }}>
            <img
              src={service.image}
              alt=""
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeTwo;
