
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import GitHubSection from "./components/GithubSection";
//import { GitHubCommitActivity } from "./components/CommitActivity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Portfolio />
      <GitHubSection />
      <Contact />
      <Footer />


    </>
  );
}

export default App;


