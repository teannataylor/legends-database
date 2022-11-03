import './App.css';
import NavBar from './NavBar';
import LegendsPage from './LegendsPage.js';
import {Switch ,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
        <Switch>
          <Route path="/legends">
            <LegendsPage />
          </Route>
          {/* <Route path="/form">
            <LegendForm />
          </Route> */}
          <Route path="/">
            <h1>Homepage</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
