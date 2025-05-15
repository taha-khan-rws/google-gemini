import { createContext } from "react";
import run from "../config/gemini.js";
import { useState } from "react";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showresult, setShowresult] = useState(false);
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState("")

  const onSent = async (prompt) => {
    setResultData("")
    setLoading(true)
    setShowresult(true)
    setRecentPrompt(input)
    let response = await run(input);
    setResultData(response)
    setLoading(false)
    setInput("")
  };
  const contextData = {
    previousPrompt,setPreviousPrompt,recentPrompt,setRecentPrompt,onSent,showresult,loading,resultData,input,setInput
  };
  // onSent("What is react");
  return (
    <Context.Provider value={contextData}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
