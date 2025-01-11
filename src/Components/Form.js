import React from 'react'
import Block from './Block'
import  "./Form.css"

function Form(props) {
  return (
    <Block >
          <div className='input-container'>
              <p>Logo</p>
              <h1>Coming Soon</h1>
              <h2>Find the Perfect Storage Solution with FlexGrid</h2>
              <h6>Simplifying Storage, One Step at a Time</h6>
              <div className='input'>
                  <input placeholder='Enter your email'/>
                  <button>Stay Updated</button>
              </div>
              <p>At FlexGrid, we make logistics and inventory simple to make everyday life easier for everyone.</p>
        </div>
    </Block>
  )
}

export default Form