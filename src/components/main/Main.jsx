import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showresult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  console.log(recentPrompt);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showresult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Taha.</span>
              </p>
              <p>How can I help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest a coffee shop near me</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Brief me about todays news</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>What is trending in google</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Create a React app using AI</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader"></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
            ></input>
            <div className="">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} onClick={(e) => onSent()} alt="" />
            </div>
          </div>
          <div className="bottom-info">
            Gemini may display inacurate info, including about people so double
            check before proceeding
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
