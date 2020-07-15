import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "fontsource-roboto";

import NavBar from "./NavBar";
import Featured from "./Featured";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <main>
          <Featured />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
