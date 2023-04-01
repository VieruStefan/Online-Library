import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CarListPage from "./pages/CarListPage";
import CarPage from "./pages/CarPage";
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cars">
          <Route index element={<CarListPage />}/>
          <Route path=":id" element={<CarPage />}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
