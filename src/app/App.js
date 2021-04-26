import './App.css';
import Navbar from './Navbar';

import PlaceItem from '../card/PlaceItem';
function App() {

  const cafeteriaData = {
    "id": "c1",
    "name": "Cafeteria central",
    "date": "01/30/2021",
    "maxCapacity": 50,
    "capacityLog": {
      "06:00": 1,
      "07:00": 3,
      "08:00": 10,
      "09:00": 25,
      "10:00": 35,
      "11:00": 38,
      "12:00": 23,
      "13:00": 40,
      "14:00": 35,
      "15:00": 52,
    }
  };

  const jardinData = {
    "id": "c2",
    "name": "Jardín central",
    "date": "01/30/2021",
    "maxCapacity": 30,
    "capacityLog": {
      "06:00": 1,
      "07:00": 1,
      "08:00": 2,
      "09:00": 3,
      "10:00": 5,
      "11:00": 21,
      "12:00": 15,
      "13:00": 26,
      "14:00": 23,
      "15:00": 28,
    }
  };
  return (
    <div className="App">
      <Navbar/>
      <p className='title'>
        Dashboard
      </p>
      <PlaceItem data={cafeteriaData}/>
      <PlaceItem data={jardinData}/>
    </div>
  );
}

export default App;
