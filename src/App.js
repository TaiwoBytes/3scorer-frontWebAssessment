import Routing from './route/Routing';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
