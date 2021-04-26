import './App.css';
import Navbar from './Navbar';

import PlaceItem from '../card/PlaceItem';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>
        Dashboard
      </p>
      <PlaceItem/>
    </div>
  );
}

export default App;
