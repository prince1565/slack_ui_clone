import React from 'react'
import Navbar from './Navbar'
import Card_message from './Card_message'
import Logos from './Logos'
import Video from './Video'
import Videos_text from './Videos_text'
import Text_card from './Text_card'
import Add_img_text from './Add_img_text'
import Add_img_text2 from './Add_img_text2'
import Percentage from './Percentage'
import PercentageGroup from './PercentageGroup'
import Coloured_Section from './Coloured_Section'
import Botton_video from './Botton_video'
import Card_caursel from './Card_caursel'
import data from '../Json_File/Data.json';

export default function Home() {
  
  return (
    <div>
    <Navbar/><br/><br/><br/>
    <Card_message/><br/>
    
    <Logos/>
  <div className="col-sm-12 my-5">
  {data.datas.map((value)=>{
    return(
    <div className="col-sm-12" key={value.id}>
    <Video videourl={value.img_head.videourl}/>
    </div>);
  })}
  
    </div>
    
  
    
  

    <Add_img_text videoname="v2.webm"/><br/><br/>
    <Add_img_text2/><br/><br/>
    <Add_img_text videoname="v4.webm"/><br/><br/>
    <PercentageGroup/><br/><br/>
    <Coloured_Section/><br/><br/><br/><br/>
    <Botton_video videoname="5g.mp4"/><br/>
    <Card_caursel/>
    </div>
   
  )
}
