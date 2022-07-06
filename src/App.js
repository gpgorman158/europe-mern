import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import {Routes, Route} from "react-router-dom";
import Home from './Home.js'
import Country from './Country.js'
import SearchResults from './SearchResults.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:country" element={<Country />}></Route>
        <Route path="/search/:results" element={<SearchResults />}></Route>
      </Routes>
    </div>
  );
}

export default App;
