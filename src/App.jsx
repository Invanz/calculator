import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperarionButton";
import "./styles.css";
import Calculator from "./components/Calculator";

function App() {

  return (<>
  <h1 className="title">Just a Calculator.</h1>
  < Calculator />
  </>
  )
}

export default App
