import './App.css';
import Linechart from './chart/LineChart';
import Navbar from './app/Navbar';
function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar/>
        <Linechart/>
      </div>

    </div>
  );
}

export default App;
