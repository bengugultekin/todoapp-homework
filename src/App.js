import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Notelist from "./components/Notelist";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <Notelist />
      </section>
    </>
  );
}

export default App;
