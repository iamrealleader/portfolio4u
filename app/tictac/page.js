"use client"
import React, { useEffect } from 'react'

const Page = () => {

  useEffect( () =>{       
    let turn = "X";
   const changeturn = () => {
        return turn == "X" ? "0" : "X"
    }
   
    let winner = document.querySelector('.winner');
    let turnn = document.querySelectorAll('.turn');
   
    const win = () => {
                let check = [
                     [0,1,2],
                     [3,4,5],
                     [6,7,8],
                     [0,3,6],
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]
                ]
               check.forEach( (e) => {
                    if( ( turnn[e[0]].innerText === turnn[e[1]].innerText )  && (turnn[e[1]].innerText === turnn[e[2]].innerText ) &&  ( turnn[e[0]].innerText !== '' ))
                    {
                        winner.innerText = `The Winner is : ${turnn[e[0]].innerText}`;
                        setTimeout(() => {
                            window.alert(`winner is ${turnn[e[0]].innerText}`);
                            location.reload();
                        }, 200);
                    }
               })
        }
   
               let turn2 = document.getElementById('turn');
               Array.from(turnn).forEach( (element) => {
                   element.addEventListener( 'click', () => {
                       if(element.innerText == '')
                       {
                           element.innerText = `${turn}`;
                           let music =  new Audio('/sound.mp3');
                           music.play();
                           turn = changeturn();
                           win();
                           turn2.innerText = `Turn : ${turn}`;
                       }
                   })
                   })
   
               let btn = document.getElementById('btn');
               btn.addEventListener('click', () => {
                   location.reload();
               })
    
  },[])

  return (
    <>
    <style jsx >{`
      
 .game{
    padding: 20px;
    display: grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(3,1fr);
 }
 .turn{
     display: flex;
     justify-content: center;
     align-items: center;
     height: 80px;
     width: 80px;
     font-size: 50px;
     font-weight: 500;
     border: 4px solid rgb(196, 209, 17);
 }
  .bt{
     border-top: none;
 }
 .bb{
     border-bottom: none;
 }
 .bl{
     border-left: none;
 }
 .br{
     border-right: none;
 } 

      `}</style>
    <div>
    <h1>Welcome to Tic Tac Toe</h1>
   
    <div className="w-[90vw]  h-fit mt-20 backdrop-blur-3xl my-0 mx-auto flex flex-col justify-center items-center">
        <div className="game">
            <div className="turn bt bl"></div>
            <div className="turn bt"></div>
            <div className="turn bt br"></div>
            <div className="turn bl"></div>
            <div className="turn"></div>
            <div className="turn br"></div>
            <div className="turn bb bl"></div>
            <div className="turn bb"></div>
            <div className="turn bb br"></div>
        </div>
        <div className="mx-3 md:mx-10 flex flex-col justify-center items-center gap-5">
            <div className='font-bold text-2xl'>Turn : X</div>
            <button id='btn' className='py-2 px-4 font-bold text-white border-none rounded-xl bg-green-500 hover:bg-green-300'>Reset</button>
            <div className="winner text-center font-bold text-lg"></div>
        </div>
    </div>
</div>
</>
  )
}

export default Page