import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      {/* Header Area */}
      <Header />
      {/* Route Components */}
      <Home />
      {/* Footer Area */}
      <Footer />
    </div>
  );
}

export default App;
