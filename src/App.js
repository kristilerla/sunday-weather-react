import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Weather search engine</h2>
      <Weather />
      <WeatherSearch city="London" />
      <Footer />
      </header>
     
    </div>
   
   
  );

}

export default App;


 