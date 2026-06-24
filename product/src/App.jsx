import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   
     <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      margin:"0",
      fontFamily:"Arial, Helvetica, sans-serif"

     }}>
         <div style={{
          
           borderRadius:"20px",
           boxShadow:"0px 10px 28px rgba(0,0,0,0.25)",
           background:"white",
           padding:"20px",
           display:"flex",
           flexDirection:"column",
           alignItems:"center",
           border:"none"

         }}>
          <h1 style=
          {{
             marginTop:"0" ,            
             color:"black",
             fontSize:"35px",
             fontWeight:"bold",

          }}>
            Product Card
            </h1>
          <img 
          style={{
             objectFit:"cover",
             width:"100%",
             height:"220px",
             borderRadius:"14px",
             boxShadow:"0 20px 40px rgba(0,0,0,0.4)" 

          }}
           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" alt="shoes" />
          <h3 style={{
            fontSize:"24px",
            
          }}
          >Nike Running Shoes</h3>
          <p style={{
             color:"blue",
             fontSize:"20px",
             marginTop:"0"
          }}>
             &#8377;2999
             </p>

          <button style={{
            width:"80%",
            background:"#24be32",
            fontSize:"18px",
            color:"white",
            transition: "all 0.3s ease",
            border:"none",
            padding:"10px",
            borderRadius:"10px", 
            cursor:"pointer",
            boxShadow: "0px 6px 15px rgba(34,197,94,0.4)",
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
   
  )
}

export default App


