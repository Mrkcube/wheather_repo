import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Search from "antd/es/input/Search";
import { Card, CardHeader } from "@mui/material";
import "./index.css"



export default function Icons() {
  // console.log(cityData)

  const [cityData, setCityData] = useState([]);
  const [city, setCity] = useState(null);
  const [cityName, setCityName] = useState(null);

  useEffect(() => {
    const getlocation = async () => {
      const receiverData = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1417023df4aa6f4503d634b21ba083ca`
      );
      setCityName(receiverData?.data[0]);
      console.log(receiverData?.data[0]);
      try {
        const getWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${receiverData.data[0].lat}&lon=${receiverData.data[0].lon}&appid=1417023df4aa6f4503d634b21ba083ca`
          );
          setCityData(getWeather?.data?.weather);
          console.log(cityData);
        } catch (error) {
          alert("Enter valid city name");

      }
    };
    getlocation();
    // eslint-disable-next-line 
  }, [city]);

// console.log(cityName)
  // useEffect(() => {
    
  //   const fiveDayWeather =async ()=>{

  //     try {        
  //       const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityName?.lat}&lon=${cityName?.lon}&appid=1417023df4aa6f4503d634b21ba083ca`)
  //       console.log(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }

  //   }

  //   fiveDayWeather()
  
  // }, [])
  
  
  // console.log(cityName)

  const searchCity = (e) => {
    setCity(e);
  };

  // console.log(cityData)

  //   console.log(cityData)

  return (
    <>
      <div className="d-flex align-items-center m-4 mb-0 justify-content-around">
      <p className="location">
        {cityName?.name}  {cityName?.state ? `, ${cityName?.state}` : " "} , <br /> {cityName?.country}
      </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <defs>
            <radialGradient
              id="gradYellow"
              cx="50%"
              cy="50%"
              r="80%"
              fx="90%"
              fy="80%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "yellow", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "orange", stopOpacity: 1 }}
              />
            </radialGradient>
            <radialGradient
              id="gradDarkGray"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "white", stopOpacity: 1 }}
              />
              <stop
                offset="70%"
                style={{ stopColor: "gray", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "dimgray", stopOpacity: 1 }}
              />
            </radialGradient>
            <radialGradient
              id="gradGray"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "white", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "darkgray", stopOpacity: 1 }}
              />
            </radialGradient>
            <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
              <stop
                offset="0%"
                style={{ stopColor: "white", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "darkgray", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          {/* --------------symbols------------------- */}

          {/* Sun  */}
          <symbol id="sun">
            {/* center  */}
            <circle cx="50" cy="50" r="20" fill="url(#gradYellow)" />

            {/* long rays  */}
            <line x1="50" y1="27" x2="50" y2="2" class="longRay" />
            <line x1="50" y1="73" x2="50" y2="98" class="longRay" />
            <line x1="27" y1="50" x2="2" y2="50" class="longRay" />
            <line x1="73" y1="50" x2="98" y2="50" class="longRay" />
            <line x1="34" y1="34" x2="16" y2="16" class="longRay" />
            <line x1="66" y1="66" x2="84" y2="84" class="longRay" />
            <line x1="34" y1="66" x2="16" y2="84" class="longRay" />
            <line x1="66" y1="34" x2="84" y2="16" class="longRay" />

            {/* short rays  */}
            <line x1="59" y1="29" x2="66" y2="13" class="shortRay" />
            <line x1="71" y1="42" x2="87" y2="35" class="shortRay" />
            <line x1="71" y1="58.5" x2="87" y2="65" class="shortRay" />
            <line x1="59" y1="71" x2="66" y2="87" class="shortRay" />
            <line x1="41" y1="71" x2="34" y2="87" class="shortRay" />
            <line x1="29.5" y1="58.5" x2="13" y2="66" class="shortRay" />
            <line x1="29" y1="42" x2="13" y2="35" class="shortRay" />
            <line x1="41" y1="29" x2="35" y2="13" class="shortRay" />
          </symbol>

          {/* Moon  */}
          <symbol id="moon">
            <path
              d="M60,20 A30,30 0 1,0 90,65 22,22 0 1,1 60,20z"
              fill="url(#gradYellow)"
            />
          </symbol>

          {/* Star  */}
          <symbol id="star">
            <polygon
              points="5,0 2,10 10,4 0,4 8,10"
              style={{ fill: "url(#gradYellow)", fillRrule: "nonzero" }}
            />
          </symbol>

          {/* Small Gray Cloud  */}
          <symbol id="grayCloud">
            <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
          </symbol>

          {/* White Cloud  */}
          <symbol id="whiteCloud">
            <path
              fill="url(#gradWhite)"
              d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z"
            />
          </symbol>

          {/* Rain Drop  */}
          <symbol id="rainDrop">
            <path
              fill="lightblue"
              d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"
            />
          </symbol>

          {/* Rain Drizzle  */}
          <symbol id="rainDrizzle">
            <line x1="20" y1="2" x2="10" y2="40" />
          </symbol>

          {/* Thunder Bolt  */}
          <symbol id="thunderBolt">
            <path fill="black" d="M15,0 L1,23 L8,23 L0,40 L15,19 L8,19Z" />
          </symbol>

          {/* Snow Flake  */}
          <symbol id="snowFlake">
            <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
            <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
            <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
            <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
            <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
          </symbol>

          {/* Hail/Ice Pellet */}
          <symbol id="icePellet">
            <circle cx="4" cy="4" r="4" fill="#e3fcff" />
          </symbol>

          {/* Mist  */}
          <symbol id="mist">
            <path d="M5,34 L43,34" />
            <path d="M10,40 L40,40 Q51.5,40 50,35 T60,30 L80,30" />
            <path d="M15,45 L45,45 Q56.5,45 55,40 T65,35 L90,35" />
            <path d="M60,42 L85,42" />
          </symbol>
        </svg>

        <Card sx={{ backgroundColor: "inherit", border: "2px solid white",alignContent:"center",height:"160px"}} className="card">
          <CardHeader
            sx={{ backgroundColor: "white",height:"75px" }}
            title={cityData[0]?.description}
            className="cardheader"
          />
          {cityData[0]?.icon === "02d" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use xlinkHref="#sun" x="-12" y="-18" />
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use xlinkHref="#whiteCloud" x="7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "02n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use xlinkHref="#moon" x="-20" y="-15" />
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use xlinkHref="#whiteCloud" x="7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "10n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use xlinkHref="#moon" x="-20" y="-15" />
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use id="drop1" xlinkHref="#rainDrop" x="25" y="65" />
                    <use id="drop3" xlinkHref="#rainDrop" x="45" y="65" />
                    <use xlinkHref="#whiteCloud" x="7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "10d" ? (

            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use xlinkHref="#sun" x="-12" y="-18" />
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use id="drop1" xlinkHref="#rainDrop" x="25" y="65" />
                    <use id="drop3" xlinkHref="#rainDrop" x="45" y="65" />
                    <use xlinkHref="#whiteCloud" x="7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "01d" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewBox="0 0 100 100">
                    <use xlinkHref="#sun" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "01n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use xlinkHref="#moon" x="-15" />
                    <use
                      xlinkHref="#star"
                      x="42"
                      y="30"
                      className="stars animated infinite flash"
                    />
                    <use
                      xlinkHref="#star"
                      x="61"
                      y="32"
                      className="stars animated infinite flash delay-1s"
                    />
                    <use
                      xlinkHref="#star"
                      x="55"
                      y="50"
                      className="stars animated infinite flash delay-2s"
                    />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "03d" || cityData[0]?.icon === "03n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use xlinkHref="#whiteCloud" x="7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "04d" || cityData[0]?.icon === "04n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use
                      xlinkHref="#grayCloud"
                      x="25"
                      y="10"
                      className="reverse-small-cloud"
                      fill="url(#gradDarkGray)"
                    />
                    <use xlinkHref="#whiteCloud" x="7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "09d" || cityData[0]?.icon === "09n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use
                      xlinkHref="#grayCloud"
                      x="25"
                      y="10"
                      className="reverse-small-cloud"
                      fill="url(#gradDarkGray)"
                    />
                    <use id="snowFlake1" xlinkHref="#snowFlake" x="20" y="55" />
                    <use id="snowFlake2" xlinkHref="#snowFlake" x="35" y="65" />
                    <use id="snowFlake3" xlinkHref="#snowFlake" x="45" y="60" />
                    <use id="snowFlake4" xlinkHref="#snowFlake" x="50" y="65" />
                    <use id="snowFlake5" xlinkHref="#snowFlake" x="63" y="65" />
                    <use xlinkHref="#rainDrizzle" x="15" y="65" />
                    <use xlinkHref="#rainDrizzle" x="25" y="65" />
                    <use xlinkHref="#rainDrizzle" x="35" y="65" />
                    <use xlinkHref="#rainDrizzle" x="45" y="65" />
                    <use xlinkHref="#whiteCloud" x="5" y="-7" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "13d" || cityData[0]?.icon === "13n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use id="snowFlake1" xlinkHref="#snowFlake" x="20" y="55" />
                    <use id="snowFlake2" xlinkHref="#snowFlake" x="35" y="65" />
                    <use id="snowFlake3" xlinkHref="#snowFlake" x="45" y="60" />
                    <use id="snowFlake4" xlinkHref="#snowFlake" x="50" y="65" />
                    <use id="snowFlake5" xlinkHref="#snowFlake" x="63" y="65" />
                    <use xlinkHref="#whiteCloud" x="10" y="-15" />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "50d" || cityData[0]?.icon === "50n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewBox="0 0 100 100">
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradDarkGray)"
                      x={0}
                      y={20}
                    />
                    <use
                      xlinkHref="#grayCloud"
                      x={30}
                      y={30}
                      className="reverse-small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use id="mist" xlinkHref="#mist" x={0} y={30} />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}

          {cityData[0]?.icon === "11d" || cityData[0]?.icon === "11n" ? (
            <>
              <div className="d-flex justify-content-end mx-4">
                <figure>
                  <svg className="icon" viewbox="0 0 100 100">
                    <use
                      xlinkHref="#grayCloud"
                      className="small-cloud"
                      fill="url(#gradGray)"
                    />
                    <use
                      xlinkHref="#grayCloud"
                      x="25"
                      y="10"
                      className="reverse-small-cloud"
                      fill="url(#gradDarkGray)"
                    />
                    <use
                      xlinkHref="#thunderBolt"
                      x="30"
                      y="61"
                      className="lighting animated infinite flash"
                    />
                    <use xlinkHref="#whiteCloud" x="7" />
                    <use
                      xlinkHref="#thunderBolt"
                      x="45"
                      y="56"
                      className="lighting animated infinite flash delay-1s"
                    />
                  </svg>
                </figure>
              </div>
            </>
          ) : (
            ""
          )}
          
        </Card>
      </div>

     


      <div className="d-flex justify-content-center">
        <Search
          placeholder="Enter your city"
          allowClear
          onSearch={(e) => searchCity(e)}
          style={{ width: 300, opacity: 0.4,marginTop:"10px" }}
          className="input"
        />
      </div>

      



    </>
  );
}
