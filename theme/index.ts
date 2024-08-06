import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string): PaletteColor =>
  augmentColor({ color: { main: mainColor } });

// Define the custom color
declare module "@mui/material/styles" {
  interface Palette {
    customGrey: PaletteColor;
  }
  interface PaletteOptions {
    customGrey?: PaletteColorOptions;
  }
}

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#5b3a3a",
    },
    secondary: {
      main: "#ffff",
      dark: "#820D0D",
      contrastText: '#fff',
    },
    customGrey: createColor("#EDF2F7"),
  },

  typography: {
    fontFamily: "DM Sans",
  },
});
