import "./App.css";
import FigmaComponent from "./Figma";
import Counter from "./components/Counter";
import InputChange from "./components/InputChange";
import PostsComponent from "./components/Posts";

function App() {
  return (
    <>
      <PostsComponent />
      <InputChange />
      <Counter />
      <FigmaComponent />
    </>
  );
}

export default App;
