import './App.css';
import NavBar from './NavBar';
import LegendsPage from './LegendsPage.js';
import {Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route exact path="/legends">
            <LegendsPage />
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
