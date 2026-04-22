// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Navbar


import React from 'react'

function Navbar({name,course,marks}) {

  return (
    <div>
      <h1>{name}</h1>
      <p>{course}</p>
      <p>{marks}</p>

      
    </div>
  )
}

export default Navbar
