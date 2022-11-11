import Header from "./components/Header";
import Phase from "./components/Phase";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Phase phase="I"></Phase>
      <Phase phase="II"></Phase>
      <Phase phase="III"></Phase>
      <Phase phase="IV"></Phase>
      <Phase phase="V"></Phase>
    </div>
  );
}

export default App;
