import React, { useState, useEffect } from "react";
// =Imported files===
// =Imported components===
import { Box } from "@mui/material";
import Icons from "./Icons";

// ------------------------------------------------------------------

export default function RootUi() {
  // Defining....
  const [date, setDate] = useState(new Date());

  // console.log(date.toLocaleTimeString())
  // console.log(city)
  // Hooks....
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

 
  

  return (
    <>
      <div className="blur ">
        <div>
          <img src={require("./copy-2.jpg")} alt="" />
          <a className="btn btn-primary" href="/">
            Explore
          </a>
        </div>
        <img src={require("./copy.jpg")} alt="" className="blurry" />
        <div className="overlay">
          <Box
            sx={{
              width: "100vh",
              height: "90vh",
              backgroundColor: "rgb(2 ,4 ,19 ,0.3)",
            }}
          >
            <div>
              <p style={{ fontSize: "x-large" }}>{date.toDateString()} </p>
            </div>

            <Icons/>


            <p className="timer">{date.toLocaleTimeString()}</p>
            
          </Box>
        </div>
      </div>
    </>
  );
}
