
import { useContext } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import { Context } from "./main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const { res, selectedPartOfSpeech} = useContext(Context);

  return (
    <Router>
      <div className="container mx-auto px-10">
        <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
      {
        res?.meanings?.length > 0 && res.meanings.map((item, index) => (
          <Content {...item} key={index} selectedPartOfSpeech={selectedPartOfSpeech} />
        ))
      }
    </div>
      
    </Router>
  );
}

export default App;
