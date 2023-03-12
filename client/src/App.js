import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Supplies from './Supplies';
import Signin from './Signin';
import Contribute from './Contribute';
import Hello from './hello';
import Phases from './Phases';
import Graduation from './Graduation';
import Nostalgia from './nostalgia';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/explore" element={<Homepage />}></Route>
          <Route path="/supplies" element={<Supplies />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/contribute" element={<Contribute />}></Route>
          <Route path="/hello" element={<Hello />}></Route>
          <Route path="/phases" element={<Phases />}></Route>
          <Route path="/graduation" element={<Graduation />}></Route>
          <Route path="/nostalgia" element={<Nostalgia />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
