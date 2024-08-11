import React from 'react'
import Videos_text from './Videos_text'
import Text_card from './Text_card'

export default function Add_img_text(props) {
  return (
    <div className="col-sm-12 mx-auto">
      <div className=" row d-flex ">
        <div className={`col-12 col-lg-6 mx-auto`} >
            <Videos_text  video={props.videoname} borderr="rounded-end-pill" />
        </div>
        <div className="col-12 col-lg-5 mx-auto">
            <Text_card/>
        </div>
        
      </div>
      </div>
  )
}


