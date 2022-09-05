// import logo from './logo.svg';
// import './App.css';

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

// export default App;
// import Painting from "./components/Painting";
import PaintingList from "./components/PaintingList";
import Section from "./components/Section";
import paintings from "./paintings.json";

export default function App() {
  // const isOnline = true;
  return (
    <div>
      {/* <PaintingList items={paintings} /> */}
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Лучшее"></Section>
    </div>
  );
}
