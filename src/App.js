import './App.css';
import Button from './button.js';
import Header from './header.js';

var times = [(new Date())];
console.log(times[0])

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Button></Button>
    </div>
  );
}

export default App;
