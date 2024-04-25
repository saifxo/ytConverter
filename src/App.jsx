import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";

function App() {
  return (
    <>
      <div
        className="h-[100vh] w-full"
        style={{ fontFamily: "Raleway, sans-serif" }}
      >
        <Header />
        <Main />

        <Footer />
      </div>
    </>
  );
}

export default App;
