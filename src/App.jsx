import { Box,createTheme,Stack, ThemeProvider, } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import MobscrnMenu from "./components/MobscrnMenu";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <MobscrnMenu setMode={setMode} mode={mode}/>
        <Stack direction='row' justifyContent='space-between' spacing={0}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed/>
          <Rightbar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
