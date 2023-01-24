import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAll from "./components/DisplayAll";
import CreateForm from "./components/CreateForm";
import Details from "./components/Details";
import UpdateForm from "./components/UpdateForm"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll/>} path="/" default/>
          <Route element={<CreateForm/>} path="/author/add"/>
          <Route element={<Details/>} path="/author/details/:id"/>
          <Route element={<UpdateForm/>} path="/author/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
