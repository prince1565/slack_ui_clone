import React from 'react'

export default function Percentage(props) {
  return (
    <div className='col-sm-12 mx-auto'>
        <h1 className='fw-bolder' style={{color:"#4d004d",fontSize:"4em",textAlign:"center"}}>{props.value}</h1>
        <p className='mt-0 pt-0 fw-6' style={{textAlign:"center"}}><b>{props.text}</b></p>
    </div>
  )
}
