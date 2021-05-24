import Button from "../../components/button/Button";
import axios from "axios";
import "./Category.css";

const CategoriesList = () => {
  axios.defaults.baseURL = "http://localhost:5000";

  const addItemBtnHandler = (e) => {
    axios
      .get("/categories" )
      .then((res) => {
        console.log(res.data);
        if (res?.data?.name) {
        } else {
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Button text={"List"} onclick={addItemBtnHandler} />
    </div>
  );
};

export default CategoriesList;
