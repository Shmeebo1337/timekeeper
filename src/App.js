import './App.css';
import Button from './button.js';
import Header from './header.js';
import Info from './Info.js';

const date = new Date();
const fakeData = {
  type: "out",
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDay(),
  hour: date.getHours(),
  minute: date.getMinutes()
};

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button></Button>
      <Info last={fakeData}></Info>
    </div>
  );
}

export default App;
