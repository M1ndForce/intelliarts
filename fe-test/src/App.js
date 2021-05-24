import AddCategory from "./components/category/AddCategory";
import "./App.css";
import AddItem from "./components/category/AddItem";
import CategoriesList from "./components/category/CategoriesList";
import CategoriesClear from "./components/category/ClearCategory";

function App() {
  return (
    <div className="App">
      <AddCategory />
      <AddItem />
      <CategoriesList />
      <CategoriesClear />
    </div>
  );
}

export default App;
