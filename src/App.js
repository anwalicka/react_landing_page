import logo from '../src/images/logo.svg';
import './App.css';
import Header from '../src/components/header';
import Footer from '../src/components/Footer'
import MainContent from '../src/components/MainContent';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='bg-main'>
      <Navbar />
      <MainContent />
      <Footer/>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;