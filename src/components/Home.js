import React from 'react'
const Home = (props) => {
  const {  inputEmail } = props
 

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
       <div>Your email address is {inputEmail}</div>
      </div>
    
  )
}

export default Home