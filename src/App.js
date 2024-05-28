import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Weather search engine</h2>
      <Weather city="Paris"/>
      <WeatherSearch city="London" />
      </header>
     
    </div>
   
  );
}

export default App;


 