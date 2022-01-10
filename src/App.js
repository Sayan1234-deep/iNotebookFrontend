import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomePage from './Pages/HomePage'
import NoteState from './context/note/Notestate';

function App() {
  return (
    <>
      <NoteState>
        <div className="App">
          {/* <Alerts title="success" message="wowwwwwwwwwwwwwwwwwwwwwwww"/> */}
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </NoteState>
    </>
  );
}

export default App;
