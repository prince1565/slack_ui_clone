import React from 'react'


export default function Videos_text(props) {
  return (
    
    <div className={`col-sm-12`} >
        <video loop muted autoPlay controls = '' className={`${props.borderr}`}>
        <source src={require(`../img/${props.video}`)} type="video/webm"/>
      </video>
     
    </div>
    
  )
}
