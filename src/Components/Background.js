import React from 'react'
import style from './Background.module.css';

function Background(props) {
  return (
      <div className={style.background}>{props.children}</div>
  )
}

export default Background;