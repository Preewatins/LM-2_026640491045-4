import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyCard from './MyHomepage';
import ProfileView from '../View';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyCard />} />
        <Route path="/card/:id" element={<ProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;