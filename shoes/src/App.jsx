import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "0",
        background: "linear-gradient(135deg, #f8f3ed, #f1e1c6)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "340px",
          padding: "25px",
          borderRadius: "24px",
          backgroundColor: "white",

          // /* Premium Dark Shadow */
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.25), 0 25px 50px rgba(0,0,0,0.45)",

          transition: "0.3s",
        }}
      >
        <h1
          style={{
            color: "#1e293b",
            fontSize: "34px",
            marginBottom: "20px",
            marginTop: "0",
            fontWeight: "bold",
          }}
        >
          Product Card
        </h1>

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
          alt="Nike Shoes"
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            borderRadius: "16px",

            /* Image Shadow */
            boxShadow: "0px 8px 20px rgba(0,0,0,0.2.9)",
          }}
        />

        <h3
          style={{
            fontSize: "24px",
            color: "#111827",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          Nike Running Shoes
        </h3>

        <p
          style={{
            fontSize: "28px",
             color: "#16a34a",
            marginTop: "0",
            marginBottom: "20px",
            fontWeight: "bold",

          }}
        >
          ₹1999
        </p>

        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",


            boxShadow: "0px 6px 15px rgba(34,197,94,0.4)",

             transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#15803d";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#22c55e";
            e.target.style.transform = "scale(1)";
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default App;