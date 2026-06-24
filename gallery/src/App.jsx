import "./App.css";

function App() {
  const photos = [
    {
      id: 1,
      title: "Mountain View",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 2,
      title: "Green Forest",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    {
      id: 3,
      title: "Waterfall",
      image:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#90EE90",
        padding: "30px",
        width: "80%",
        margin: "50px auto",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <h1
        style={{
          color: "darkgreen",
          marginBottom: "30px",
        }}
      >
        My Favourite Nature Gallery
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {photos.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "white",
              width: "180px",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid gray",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />

            <h3
              style={{
                color: "darkgreen",
                marginTop: "10px",
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;