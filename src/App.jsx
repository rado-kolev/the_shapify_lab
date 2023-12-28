import { Route, Routes } from 'react-router-dom';
import {Footer, Navbar} from './components';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <div className='flex flex-col max-w-[1488px] m-auto px-4 sm:px-10 bg-[#fffafb]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
