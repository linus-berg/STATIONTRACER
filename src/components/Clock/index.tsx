import './Clock.scss';
import {H1} from "@blueprintjs/core";
import {useState} from "react";
export const Clock = () => {
  let time  = new Date().toLocaleTimeString()
  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <div className="clock">
    <H1 className="clock-text">{ctime}</H1>
  </div>
};