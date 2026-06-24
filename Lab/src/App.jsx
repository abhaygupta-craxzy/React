function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "darkblue",
    padding: "15px 25px",
    borderRadius: "8px"
  };

  const titleStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold"
  };

  const ulStyle = {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    gap: "15px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div>
      <nav style={navStyle}>
        <div style={titleStyle}>MyWebsite</div>

        <ul style={ulStyle}>
          <li><a href="#" style={linkStyle}>Home</a></li>
          <li><a href="#" style={linkStyle}>About</a></li>
          <li><a href="#" style={linkStyle}>Services</a></li>
          <li><a href="#" style={linkStyle}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;