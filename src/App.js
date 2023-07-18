import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, CssBaseline, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";

import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack
            direction="row"
            sx={{ marginTop: "64px" }}
            p={2}
            display="flex"
          >
            <Box
              position="fixed"
              sx={{ width: "200px", display: { sm: "none", md: "block" } }}
            >
              <Sidebar />
            </Box>
            <Box
              position="relative"
              sx={{
                left: {
                  md: "216px",
                },
                width: {
                  sm: "100%",
                  md: "calc(100vw - 248px)",
                  lg: "calc(100vw - 514px)",
                },
              }}
            >
              <Feed />
            </Box>
            <Box
              position="fixed"
              sx={{
                width: "250px",
                right: "16px",
                display: { sm: "none", lg: "block" },
              }}
            >
              <Rightbar />
            </Box>
          </Stack>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
