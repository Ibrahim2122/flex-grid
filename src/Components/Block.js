import React from 'react'
import style from './Block.module.css'

function Block(props) {
  return (
    <div className={style.background}>{props.children}</div>
  )
}

export default Block