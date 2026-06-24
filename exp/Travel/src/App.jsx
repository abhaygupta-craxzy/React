import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <div className='card'>
             <h1>My Travel Website</h1>
             <div className='loc'>
                  <div>
                    <img src="https://unsplash.com/photos/a-snow-covered-mountain-range-under-a-cloudy-sky-6dW3xyQvcYE?utm_source=chatgpt.com" alt="" />
                  </div>
                  <div>
                    <img src="https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-kTxL6le0Wgk?utm_source=chatgpt.com" alt="" />
                  </div>
             </div>
             <p>Travelling helps us explore new places, experience different cultures, and create 
              <br />unforgettable memories with friends and family</p>
             <button>Explore</button>
      </div>
    
    </div>
  )
}

export default App
