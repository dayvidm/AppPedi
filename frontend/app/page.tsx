'use client'
import { theme } from "@/utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function Home() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  )
}
