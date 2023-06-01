"use client"
import React, { useEffect } from 'react'

const Page = () => {

  useEffect( ()=>{
    let interval = setInterval( () => {
      let time = new Date();
      let hour = time.getHours();
     
    
      let minute = time.getMinutes();
      let second = time.getSeconds();
      
      let hourr = 30 * hour;
      let minutee =  6*minute;
      let secondd = 6*second;

        let hourStick = document.querySelector('.hour');
        let minutSstick = document.querySelector('.minute');
        let secondStick = document.querySelector('.second');
        console.log(hourr);
        hourStick.style.transform = `rotate(${hourr}deg)`
        minutSstick.style.transform  = `rotate(${minutee}deg)`
        secondStick.style.transform  = `rotate(${secondd}deg)`
      }, 1000);

      return () => clearInterval(interval) // to avoid memory leak which causes reload....

  },[])

  return (
    <>
    <style>{`
    .watchcontainer{
       padding-top : 100px;
       padding : 60px 0px;
       display: flex;
       justify-content: center;
       width : 100vw;
       height : fit-content;
    }
    .div{
        position: relative;
        width: 45vw;
        height: 45vw;
        background: url("/images/clock.jpg") no-repeat;
        background-size: 150%;
    }
    .hour{
        background-color: black;
        position: absolute;
        top: 13.55vw;
        left: 24.05vw;
        width: 2vw;
        height: 10vw;
        border-radius: 50%;
        transform-origin: bottom;
        /* display: none; */
    }
    .minute{
        background-color: black;
        position: absolute;
        top: 11.5vw;
        left: 24.27vw;
        width: 1.5vw;
        height: 12vw;
        border-radius: 50%;
        transform-origin: bottom;
        /* display: none; */
    }
    .second{
        background-color: black;
        position: absolute;
        top: 8.55vw;
        left: 24.5vw;
        width: 1vw;
        height: 15vw;
        border-radius: 50%;
        transform-origin: bottom;
        /* display: none; */
    }
    .circle{
        position: absolute;
        top:  22vw;
        left: 24vw;
        width: 30px;
        height: 30px;
        background-color: black;
        border-radius: 50%;
    }
   `}</style>
    <div className="watchcontainer">
        <div className="div w-[80vw] h-[80vh] md:w-[50vw] md:h-[50vh] ">
            <div className="hour" ></div>
            <div className="minute" ></div>
            <div className="second" ></div>
            <div className="circle hidden md:block" ></div>
        </div>
    </div>
    </>
  )
}

export default Page