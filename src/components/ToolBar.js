import VidBackwardIcon from "@atlaskit/icon/glyph/vid-backward";
import VidForwardIcon from "@atlaskit/icon/glyph/vid-forward";
import VidPlayIcon from "@atlaskit/icon/glyph/vid-play";
import Toggle from "@atlaskit/toggle";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "../index.css";


const ToolBarClass = {
  minWidth: "250px",
  background: "rgba(33,33,33,.5)",
  position: "absolute",
  right: "0px",
  height: "100%",
  color: "white",
  textAlign: "center",
  alignItem: "center",
  zIndex: "1000",
};

export default function ToolBar() {
  // const [hidden, setHidden] = useState(false)
  // const handleClick = () => {
  //     setHidden(!hidden);
  // }

  const [datasState, setDatasState] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users?_limit=2"
        );
        setDatasState(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDatas();
  }, []);

  return (
    <>
      <div style={ToolBarClass} className="tool-bar hidden && 'hidden'">
        <h1>Drive & Relax</h1>
        <div className="table-select">
          <div className="city-box">
            <p>Scroll down for more cities</p>
            <div className="list-city">
              <ul>
                <div className="btn-city">
                  {datasState.map((item) => {
                    return item.name;
                  })}
                </div>
                <div className="btn-city">Tokyo</div>
                <div className="btn-city" id="active">
                  Seoul
                </div>
                <div className="btn-city">HongKong</div>
                <div className="btn-city">Phnom Penh</div>
                <div className="btn-city">Kuala Lumpur</div>
                <div className="btn-city">Naypyidaw</div>
                <div className="btn-city">Manila</div>
                <div className="btn-city">Demo</div>
                <div className="btn-city">Demo</div>
              </ul>
            </div>
          </div>
        </div>
        <div className="movement-speed">
          <p>Movement speed</p>
          <div className="group-btn-speed">
            <button className="btn-speed active">1x</button>
            <button className="btn-speed">1.5x</button>
            <button className="btn-speed">2x</button>
          </div>
        </div>
        <div className="street-noise">
          <p>Street Noise</p>
          <button>OFF</button>
        </div>
        <div className="sound-radio">
          <ReactAudioPlayer
            className="sound-page"
            src="https://listen.moe/kpop/stream?"
            autoPlay
            controls
          />
          <div className="radio-box">
            <p>Listen Moe K-pop</p>
            <div className="list-option">
              <div className="div-control">
                <VidBackwardIcon />
                <VidPlayIcon />
                <VidForwardIcon />
              </div>
              <input
                type="range"
                min="1"
                max="100"
                className="slider"
                id="myRange"
              ></input>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="status-div">
        {/* <WatchIcon onClick={handleClick} /> */}
          <Toggle
            id="toggle-controlled"
            onChange={() => setIsChecked(prev => !prev)}
            isChecked={isChecked}
          />
      </div>
    </>
  );
}
