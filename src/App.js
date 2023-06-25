import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './TodoContainer';
import style from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route exact path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;