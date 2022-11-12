import Header from "./components/Header";
import Phase from "./components/Phase";
import Navigation from "./components/Navigation";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <Phase phase="I" />
      <Phase phase="II" />
      <Phase phase="III" />
      <Phase phase="IV" />
      <Phase phase="V" />
      <Phase phase="VI" />
      <Navigation />
    </div>
  );
}

export default App;
