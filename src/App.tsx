import './App.css';
import { BrowserRouter } from 'react-router-dom'
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <User />
      </div>
    </BrowserRouter>
  );
}

export default App;
