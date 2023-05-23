import React from 'react'
import "./index.css"
import { Button } from 'antd';
import {Box} from '@mui/material';
import Container from '@mui/material/Container';


export default function RootUi() {
  return (
    <>
    
    <div className="blur ">
  <img src={require("./copy-2.jpg")} alt=""/>
  <img src={require("./copy.jpg")} alt='' className="blurry"/>
  <div className="overlay">
    <div className="flex">
      <h2>Lorem ipsum dolor sit amet dolor ipsum</h2>
      <p>
        Powerful water infrastructure data analytics and data modelling software
        from Innovyze means you can integrate model assets into a real-time
        environment to support operational decisions
      </p>
    </div>
  </div>
</div>




      
    </>
  );
};


  

