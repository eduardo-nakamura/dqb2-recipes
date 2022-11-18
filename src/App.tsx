// import { useState } from 'react'

// import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ResponsiveAppBar from "./components/header"

function App() {
  // const [themeSelect, setTheme] = useState(true)


  return (
    <>
      {/* <CssBaseline /> */}

      <ResponsiveAppBar  />
      <Container component="main" sx={{ p: 4, margin: '0px auto' }}>
        <Outlet />
      </Container>
      {/* <Footer /> */}
    </ >
  );
}

export default App;
