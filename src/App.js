import React from 'react';
import Footer from "./components/Footer/Footer";
import ContentContainer from "./components/Content/ContentContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = () => {
  return (
      <div>
        <NavbarContainer/>
        <ContentContainer/>
        <Footer/>
      </div>
  );
};

export default App;
