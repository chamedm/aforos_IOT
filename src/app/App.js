import './App.css';
import Navbar from './Navbar';
import LineChart from '../card/LineChart';
import InfoCard from '../card/InfoCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LineChart/>
      <InfoCard/>
    </div>
  );
}

export default App;
