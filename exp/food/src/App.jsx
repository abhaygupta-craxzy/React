import './App.css'

function App() {
  

  return (
   <div className='main'>
       <div className='card'>
             <h1>Food Menu Application</h1>
             <div className='menu'>

                     <div className='image'>
                      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="pizza" />
                       <h3>Pizza</h3>
                        <p><b>Price:</b>₹299</p>
                        <p><b>Category:</b>Fast Food</p>
                     </div>

                     <div className='image'>
                      <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd" alt="burger" />
                      <h3>Burger</h3>
                        <p><b>Price:</b>₹299</p>
                        <p><b>Category:</b>Snacks</p>
                     </div>

                     <div className='image'>
                      <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9" alt="Pasta" />
                      <h3>Pasta</h3>
                      <p><b>Price:</b>₹249</p>
                      <p><b>Category:</b>Italian</p>
                     </div>

             </div>
       </div>
   </div>
  )
}

export default App
