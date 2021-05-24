import React, { useEffect, useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./Category.css";
import axios from "axios";

const AddCategory = (props) => {
  const initState = {
    name: "",
    price: 0,
    count: 0,
  };
  const [state, setState] = useState(initState);

  const [makeReq, setMakeReq] = useState(false);

  const inputOnchangeHandler = (e) => {
    // e.target.name
    //TODO e => set into state
  };

  const addBtnHandler = (e) => {
    e.preventDefault();
    setMakeReq(true);
    // axios.post('/category', {
    //     ...state
    // }).then(res=>{
    //     if (res.status === 200)
    //         alert('Category added')
    //     setState(initState)
    // })
    // setState(initState)
  };

  useEffect(() => {
    if (makeReq) {
      setMakeReq(false);
      axios
        .post("/category", {
          ...state,
        })
        .then((res) => {
          if (res.status === 200) alert("Category added");
          setState(initState);
        });
    }
  }, [makeReq]);

  return (
    <div>
      <Button text={"AddCategory"} onClick={addBtnHandler} />
      <Input value={state.name} name={"name"} onchage={inputOnchangeHandler} />
      <Input
        value={state.price}
        name={"price"}
        onchage={inputOnchangeHandler}
      />
      <Input
        value={state.count}
        name={"count"}
        onchage={inputOnchangeHandler}
      />
    </div>
  );
};
export default AddCategory;
