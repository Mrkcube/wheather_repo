import React from 'react'
import "./index.css"
import { Button } from 'antd';
import {Box} from '@mui/material';
import Container from '@mui/material/Container';


export default function RootUi() {
  return (
    <>
    
    <div className="blur">
  <img src="https://picsum.photos/1920/680?image=1039" alt="" />
  <span
    className="blurry"
    style={{
      backgroundImage: "url(https://picsum.photos/1920/680?image=1039)"
    }}
  />
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


  

