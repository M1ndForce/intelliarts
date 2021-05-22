import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({});
  axios
    .get("http://localhost:5000/report", {
      params: { date: "2012-02" },
    })
    .then(function (response) {
      setState(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div className="App">{state[0]?.totalPrice}</div>;
}

export default App;
