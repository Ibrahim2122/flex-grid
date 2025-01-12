import React, { useState } from 'react'
import "./Form.css"
import logo from "../imgs/flex-grid-logo.svg";

function Form(props) {

  const [name, setName] = useState("")

  const handleform = e => {
    e.preventDefault();
    alert("Thanks for your interest in us, " + name);
    setName("");
  }

  return (

      <form className='input-container' onSubmit={handleform}>
        <img src={logo} alt='logo' />
        <h2>Optimizing Storage Solutions 📦 <br/>Coming Soon!</h2>

        <p>At Flexgrid, we make logistics and inventory simple to make everyday life easier for everyone.</p>
      </form>

  )
}

export default Form