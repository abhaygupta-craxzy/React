// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div className='main'>
    <div className='card'>
       <h1>My Favourite Nature Gallery</h1>

       <div className='image'>
             <div className='gallery' >
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="s1" />
              <p>Mountain View</p>
             </div>

             <div className='gallery' >
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="s2" />
              <p>Green Forest</p>
             </div>

             <div className='gallery' >
              <img src="https://images.unsplash.com/photo-1439066615861-d1af74d74000" alt="s3" />
              <p>Waterfall</p>
             </div>
       </div>
    </div>
   </div>
  )
}

export default App
