import AddCategory from "./components/category/AddCategory";
import "./App.css";
import AddItem from "./components/category/AddItem";
import CategoriesList from "./components/category/CategoriesList";
import CategoriesClear from "./components/category/ClearCategory";
import AddPurchase from "./components/purchases/Purchases";

function App() {
  return (
    <div className="App">
      <AddCategory />
      <AddItem />
      <AddPurchase />
      <CategoriesList />
      <CategoriesClear />
    </div>
  );
}

export default App;
