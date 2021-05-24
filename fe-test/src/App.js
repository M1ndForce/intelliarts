import AddCategory from "./components/category/AddCategory";
import "./App.css";
import AddItem from "./components/category/AddItem";
import CategoriesList from "./components/category/CategoriesList";
import CategoriesClear from "./components/category/ClearCategory";
import AddPurchase from "./components/purchases/Purchases";
import CreateReport from "./components/reports/CreateReport";

function App() {
  return (
    <div className="App">
      <AddCategory />
      <AddItem />
      <AddPurchase />
      <CreateReport name={"ReportForMonth"} rout={"/report?date="} />
      <CreateReport name={"ReportFromDate"} rout={"reportfromdate?date="} />
      <CategoriesList />
      <CategoriesClear />
    </div>
  );
}

export default App;
