import './App.css'
import Card from './components/Card'


function App() {


  return (
   <div className='user-card'>
    <h1 id='heading'>Student Infromation</h1>
     <Card name="Abhay Gupta" course="Computer-Science(Ai/Ml)" marks="94" />
     <Card name="Sristi Nagar"course="Information Technology" marks="84" />
     <Card name="Raj Verma" course="Electronics & Communication" marks="74" />

  
    </div>
  )
}

export default App
