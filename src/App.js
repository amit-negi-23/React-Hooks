import Learning_useState from "./1_useState/learningHook";
import Learning2_useState from "./1_useState/learningHook2";
import Learning3_useState from "./1_useState/learningHook3";
import Learning4_useState from "./1_useState/learningHook4";
import Learning5_useState from "./1_useState/learningHook5";
import Learning_useEffect from "./2_useEffect/learningHook";
import Learning2_useEffect from "./2_useEffect/learningHook2";
import Learning3_useEffect from "./2_useEffect/learningHook3";
import Learning4_useEffect from "./2_useEffect/learningHook4";
import Learning_useRef from "./3_useRef/learningHook";
import Learning2_useRef from "./3_useRef/learningHook2";
import Learning3_useRef from "./3_useRef/learningHook3";
import Learning4_useRef from "./3_useRef/learningHook4";
import Learning5_useRef from "./3_useRef/learningHook5";
import "./App.css";

function App() {

  return (
    <div className="container">
      <Learning_useState/>
      <Learning2_useState/>
      <Learning3_useState/>
      <Learning4_useState/>
      <Learning5_useState/>
      
      <Learning_useEffect/>
      <Learning2_useEffect/>
      <Learning3_useEffect/>
      <Learning4_useEffect/>
      
      <Learning_useRef/>
      <Learning2_useRef/>
      <Learning3_useRef/>
      <Learning4_useRef/>
      <Learning5_useRef/>
    </div>
  );
}

export default App;
