import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
import Search from "antd/es/input/Search";

export default function Icons() {
  // console.log(cityData)

  const [cityData, setCityData] = useState();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getlocation = async () => {
      const receiverData = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=1417023df4aa6f4503d634b21ba083ca`
      );

      console.log(receiverData?.data[0]);
      try {
        const getWeather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${receiverData.data[0].lat}&lon=${receiverData.data[0].lon}&appid=1417023df4aa6f4503d634b21ba083ca`
        );
        setCityData(getWeather?.data?.weather[0]);
        console.log(cityData);
      } catch (error) {
        alert("Enter valid city name");
      }
    };
    getlocation();
  }, [city]);

  const searchCity = (e) => {
    setCity(e);
  };

//   console.log(cityData)

  return (
    <>
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
            <stop offset="0%" style={{ stopColor: "yellow", stopOpacity: 1 }}>
              <stop
                offset="100%"
                style={{ stopColor: "orange", stopOpacity: 1 }}
              ></stop>
            </stop>
          </radialGradient>
          <radialGradient
            id="gradDarkGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }}>
              <stop offset="70%" style={{ stopColor: "gray", stopOpacity: 1 }}>
                <stop
                  offset="100%"
                  style={{ stopColor: "dimgray", stopOpacity: 1 }}
                ></stop>
              </stop>
            </stop>
          </radialGradient>
          <radialGradient
            id="gradGray"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }}>
              <stop
                offset="100%"
                style={{ stopColor: "darkgray", stopOpacity: 1 }}
              ></stop>
            </stop>
          </radialGradient>
          <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
            <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }}>
              <stop
                offset="100%"
                style={{ stopColor: "darkgray", stopOpacity: 1 }}
              ></stop>
            </stop>
          </linearGradient>
        </defs>

        {/* --------------symbols------------------- */}

        {/* Sun */}
  <symbol id="sun">
    {/* center */}
    <circle cx={50} cy={50} r={20} fill="url(#gradYellow)">
      {/* long rays */}
      <line x1={50} y1={27} x2={50} y2={2} className="longRay">
        <line x1={50} y1={73} x2={50} y2={98} className="longRay">
          <line x1={27} y1={50} x2={2} y2={50} className="longRay">
            <line x1={73} y1={50} x2={98} y2={50} className="longRay">
              <line x1={34} y1={34} x2={16} y2={16} className="longRay">
                <line x1={66} y1={66} x2={84} y2={84} className="longRay">
                  <line x1={34} y1={66} x2={16} y2={84} className="longRay">
                    <line x1={66} y1={34} x2={84} y2={16} className="longRay">
                      {/* short rays */}
                      <line
                        x1={59}
                        y1={29}
                        x2={66}
                        y2={13}
                        className="shortRay"
                      >
                        <line
                          x1={71}
                          y1={42}
                          x2={87}
                          y2={35}
                          className="shortRay"
                        >
                          <line
                            x1={71}
                            y1="58.5"
                            x2={87}
                            y2={65}
                            className="shortRay"
                          >
                            <line
                              x1={59}
                              y1={71}
                              x2={66}
                              y2={87}
                              className="shortRay"
                            >
                              <line
                                x1={41}
                                y1={71}
                                x2={34}
                                y2={87}
                                className="shortRay"
                              >
                                <line
                                  x1="29.5"
                                  y1="58.5"
                                  x2={13}
                                  y2={66}
                                  className="shortRay"
                                >
                                  <line
                                    x1={29}
                                    y1={42}
                                    x2={13}
                                    y2={35}
                                    className="shortRay"
                                  >
                                    <line
                                      x1={41}
                                      y1={29}
                                      x2={35}
                                      y2={13}
                                      className="shortRay"
                                    ></line>
                                  </line>
                                </line>
                              </line>
                            </line>
                          </line>
                        </line>
                      </line>
                    </line>
                  </line>
                </line>
              </line>
            </line>
          </line>
        </line>
      </line>
    </circle>
  </symbol>
  {/* Moon */}
  <symbol id="moon">
    <path
      d="M60,20 A30,30 0 1,0 90,65 22,22 0 1,1 60,20z"
      fill="url(#gradYellow)"
    ></path>
  </symbol>
  {/* Star */}
  <symbol id="star">
    <polygon
      points="5,0 2,10 10,4 0,4 8,10"
      style={{ fill: "url(#gradYellow)", fillRule: "nonzero" }}
    ></polygon>
  </symbol>
  {/* Small Gray Cloud */}
  <symbol id="grayCloud">
    <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z"></path>
  </symbol>
  {/* White Cloud */}
  <symbol id="whiteCloud">
    <path
      fill="url(#gradWhite)"
      d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z"
    ></path>
  </symbol>
  {/* Rain Drop */}
  <symbol id="rainDrop">
    <path
      fill="lightblue"
      d="M10 0 Q10,0 14,7 A5,5 0 1,1 6,7 Q10,0 10,0Z"
    ></path>
  </symbol>
  {/* Rain Drizzle */}
  <symbol id="rainDrizzle">
    <line x1={20} y1={2} x2={10} y2={40}></line>
  </symbol>
  {/* Thunder Bolt */}
  <symbol id="thunderBolt">
    <path fill="black" d="M15,0 L1,23 L8,23 L0,40 L15,19 L8,19Z"></path>
  </symbol>
  {/* Snow Flake */}
  <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5">
      <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75">
        <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5">
          <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25">
            <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90"></path>
          </path>
        </path>
      </path>
    </path>
  </symbol>
  {/* Hail/Ice Pellet*/}
  <symbol id="icePellet">
    <circle cx={4} cy={4} r={4} fill="#e3fcff"></circle>
  </symbol>
  {/* Mist */}
  <symbol id="mist">
    <path d="M5,34 L43,34">
      <path d="M10,40 L40,40 Q51.5,40 50,35 T60,30 L80,30">
        <path d="M15,45 L45,45 Q56.5,45 55,40 T65,35 L90,35">
          <path d="M60,42 L85,42"></path>
        </path>
      </path>
    </path>
  </symbol>


      </svg>

      {cityData?.icon===("02d") ? (
        <>
        <figure>
    <svg className="icon" viewbox="0 0 100 100">
      <use xlinkHref="#sun" x="-12" y="-18"/>
      <use xlinkHref="#grayCloud" className="small-cloud" fill="url(#gradGray)"/>
      <use xlinkHref="#whiteCloud" x="7" />
    </svg>
    <figcaption>Partly Cloudy Day</figcaption>
  </figure>
        </>
      ) : ("")}


      {cityData?.icon===("02n") ? (
        <>
        <figure>
    <svg className="icon" viewbox="0 0 100 100">
      <use xlinkHref="#moon" x="-20" y="-15"/>
      <use xlinkHref="#grayCloud" className="small-cloud" fill="url(#gradGray)"/>
      <use xlinkHref="#whiteCloud" x="7" />
    </svg>
    <figcaption>Partly Cloudy Night</figcaption>
  </figure>
        </>
    ) : ("")}


      {cityData?.icon===("10n") ? (
        <>
         <figure>
    <svg className="icon" viewbox="0 0 100 100">
      <use xlinkHref="#moon" x="-20" y="-15"/>
      <use xlinkHref="#grayCloud" className="small-cloud" fill="url(#gradGray)"/>
      <use id="drop1" xlinkHref="#rainDrop" x="25" y="65"/>
      <use id="drop3" xlinkHref="#rainDrop" x="45" y="65"/>
      <use xlinkHref="#whiteCloud" x="7" />
    </svg>
    <figcaption>Patchy Rain Night</figcaption>
  </figure>

        </>
    ) : ("")}


      {cityData?.icon===("10d") ? (
        <>
 <figure>
    <svg className="icon" viewbox="0 0 100 100">
      <use xlinkHref="#sun" x="-12" y="-18"/>
      <use xlinkHref="#grayCloud" className="small-cloud" fill="url(#gradGray)"/>
      <use id="drop1" xlinkHref="#rainDrop" x="25" y="65"/>
      <use id="drop3" xlinkHref="#rainDrop" x="45" y="65"/>
      <use xlinkHref="#whiteCloud" x="7" />
    </svg>
    <figcaption>Patchy Rain Day</figcaption>
  </figure>
        </>
    ) : ("")}


      {cityData?.icon===("01d") ? (
        <>
      

      <figure>
  <svg className="icon" viewBox="0 0 100 100">
    <use xlinkHref="#sun" />
  </svg>
  <figcaption>Sunny</figcaption>
</figure>

  
        </>
      ) : ("")}


      {cityData?.icon==("01n") ? (
        <>
         <figure>
    <svg className="icon" viewbox="0 0 100 100">
      <use xlinkHref="#moon" x="-15"/>
      <use xlinkHref="#star" x="42" y="30" className="stars animated infinite flash"/>
      <use xlinkHref="#star" x="61" y="32" className="stars animated infinite flash delay-1s"/>
      <use xlinkHref="#star" x="55" y="50" className="stars animated infinite flash delay-2s"/>
    </svg>
    <figcaption>Clear Night</figcaption>
  </figure>
        </>
      ) : ("")}

      {cityData?.icon === ("03d" || "03n") ? (
        <>
          <figure>
            <svg className="icon" viewbox="0 0 100 100">
              <use
                xlinHref="#grayCloud"
                className="small-cloud"
                fill="url(#gradGray)"
              />
              <use xlinHref="#whiteCloud" x="7" />
            </svg>
          </figure>
        </>
      ) : (
        ""
      )}

      {cityData?.icon === ("04d" || "04n") ? (
        
<>

          <figure>
            <svg className="icon" viewbox="0 0 100 100">
              <use
                xlinHref="#grayCloud"
                className="small-cloud"
                fill="url(#gradGray)"
                />
              <use
                xlinHref="#grayCloud"
                x="25"
                y="10"
                className="reverse-small-cloud"
                fill="url(#gradDarkGray)"
                />
              <use xlinHref="#whiteCloud" x="7" />
            </svg>
          </figure>

                </>
        
      ) : (
        ""
      )}

      {cityData?.icon == ("09d" || "09n") ? (
        <>
          <figure>
            <svg className="icon" viewbox="0 0 100 100">
              <use
                xlinHref="#grayCloud"
                x="25"
                y="10"
                className="reverse-small-cloud"
                fill="url(#gradDarkGray)"
              />
              <use id="snowFlake1" xlinHref="#snowFlake" x="20" y="55" />
              <use id="snowFlake2" xlinHref="#snowFlake" x="35" y="65" />
              <use id="snowFlake3" xlinHref="#snowFlake" x="45" y="60" />
              <use id="snowFlake4" xlinHref="#snowFlake" x="50" y="65" />
              <use id="snowFlake5" xlinHref="#snowFlake" x="63" y="65" />
              <use xlinHref="#rainDrizzle" x="15" y="65" />
              <use xlinHref="#rainDrizzle" x="25" y="65" />
              <use xlinHref="#rainDrizzle" x="35" y="65" />
              <use xlinHref="#rainDrizzle" x="45" y="65" />
              <use xlinHref="#whiteCloud" x="5" y="-7" />
            </svg>
          </figure>
        </>
      ) : (
        ""
      )}

      {cityData?.icon == ("13d" || "13n") ? (
        <>
          <figure>
            <svg className="icon" viewbox="0 0 100 100">
              <use id="snowFlake1" xlinHref="#snowFlake" x="20" y="55" />
              <use id="snowFlake2" xlinHref="#snowFlake" x="35" y="65" />
              <use id="snowFlake3" xlinHref="#snowFlake" x="45" y="60" />
              <use id="snowFlake4" xlinHref="#snowFlake" x="50" y="65" />
              <use id="snowFlake5" xlinHref="#snowFlake" x="63" y="65" />
              <use xlinHref="#whiteCloud" x="10" y="-15" />
            </svg>
          </figure>
        </>
      ) : (
        ""
      )}

      {cityData?.icon === ("50d" || "50n") ? (
        <>
          <figure>
            <svg classNameName="icon" viewBox="0 0 100 100">
              <use
                xlinHref="#grayCloud"
                classNameName="small-cloud"
                fill="url(#gradDarkGray)"
                x={0}
                y={20}
              />
              <use
                xlinHref="#grayCloud"
                x={30}
                y={30}
                classNameName="reverse-small-cloud"
                fill="url(#gradGray)"
              />
              <use id="mist" xlinHref="#mist" x={0} y={30} />
            </svg>
          </figure>
        </>
      ) : (
        ""
      )}

      {cityData?.icon === ("11d" || "11n") ? (
        <>
          <figure>
            <svg className="icon" viewbox="0 0 100 100">
              <use
                xlinHref="#grayCloud"
                className="small-cloud"
                fill="url(#gradGray)"
              />
              <use
                xlinHref="#grayCloud"
                x="25"
                y="10"
                className="reverse-small-cloud"
                fill="url(#gradDarkGray)"
              />
              <use
                xlinHref="#thunderBolt"
                x="30"
                y="61"
                className="lighting animated infinite flash"
              />
              <use xlinHref="#whiteCloud" x="7" />
              <use
                xlinHref="#thunderBolt"
                x="45"
                y="56"
                className="lighting animated infinite flash delay-1s"
              />
            </svg>
          </figure>
        </>
      ) : (
        ""
      )}

      <div classNameName="d-flex justify-content-center">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={(e) => searchCity(e)}
          style={{ width: 300, opacity: 0.4 }}
        />
      </div>
    </>
  );
}
