import Dpwnload from "./components/Download/Dpwnload";
import { Features } from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Reviews from "./components/Reviews/Reviews";
import Team from "./components/Team/Team";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Features/>
      <Works/>
      <Team/>
      <Reviews/>
      <Dpwnload/>
      <Footer/>
    </div>
  );
}

export default App;
