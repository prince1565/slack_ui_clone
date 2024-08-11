import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

export default function Btn1(props) {
  return (
    <div className='col-12'>
      <a href=''>
        <button type="button" style={{borderColor:"#4d004d"}} class="btn1 btn p-2 fs-6">{props.btnname}</button>
        </a>
        
    </div>
  )
}
