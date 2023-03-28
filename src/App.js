import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import CarListPage from "./pages/CarListPage";
import CarPage from './pages/CarPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={CarListPage} />
        <Route path="/cars/:id" component={CarPage} />
      </div>
    </Router>
  );
}

export default App;
