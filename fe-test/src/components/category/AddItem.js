import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import axios from "axios";
import "./Category.css";

const AddItem = () => {
  axios.defaults.baseURL = "http://localhost:5000";

  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  function inputOnchangeHandler(e) {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "count") {
      setCount(e.target.value);
    }
  }
  function changeToggleToFalse() {
    setError(null);
    setResponse(null);
    return setToggle(false);
  }

  const addItemBtnHandler = (e) => {
    axios
      .put("/categories", {
        name: name,
        count: count,
      })
      .then((res) => {
        console.log(res.data);
        setToggle(true);
        if (res?.data?.name) {
          setName("");
          setCount("");
          setResponse(res.data);
          setTimeout(changeToggleToFalse, 5000);
        } else {
          setName("");
          setCount("");
          setError(res?.data.message);
          setTimeout(changeToggleToFalse, 5000);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      {toggle ? (
        <h2>
          {response?.name} {response?.count} {error}
        </h2>
      ) : null}
      <Input
        text={"NAME"}
        value={name}
        id={"name"}
        onChange={inputOnchangeHandler}
      />
      <Input
        text={"COUNT"}
        value={count}
        id={"count"}
        onChange={inputOnchangeHandler}
      />
      <Button text={"AddItem"} onclick={addItemBtnHandler} />
    </div>
  );
};

export default AddItem;
