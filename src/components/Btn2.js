import React from 'react'

export default function Btn2(props) {
  return (
    <div className='col-sm-12'>
        <a href='{props.url}'>
        <button type="button" class={`btn2 btn py-${props.pady}  px-${props.padx} fs-6`}>{props.btnname}</button>
        </a>
    </div>
  )
}
