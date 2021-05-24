import AddCategory from "./components/category/AddCategory";
import "./App.css";
import AddItem from "./components/category/AddItem";
import CategoriesList from "./components/category/CategoriesList";

function App() {
  return (
    <div className="App">
      <AddCategory />
      <AddItem />
      <CategoriesList />
    </div>
  );
}

export default App;
