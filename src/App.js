// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForms from './components/TextForm';

// let name="Ashwini"
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container mb-3">
        <TextForms heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
