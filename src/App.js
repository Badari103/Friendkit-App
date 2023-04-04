import './App.css';
import Friends from './components/body/nav/friends/Friends';
import Trips from './components/body/nav/trips/Trips';
import Calendar from './components/body/nav/calender/calender';

function App() {
  return (
    <div >
      <Friends />
      <Trips />
      <Calendar />
    </div>
  );
}

export default App;
