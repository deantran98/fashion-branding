import { createTheme, responsiveFontSizes } from "@mui/material";

const lightTheme = responsiveFontSizes(
	createTheme({
		spacing: 4,
		typography: {
			fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
			h1: {
				fontSize: "5rem",
				fontFamily: "Raleway",
			},
			h3: {
				fontSize: "2.5rem",
				fontFamily: "Open Sans",
			},
            p: {
                fontSize: "1rem",
				fontFamily: "Open Sans",
            }
		},
		palette: {
			background: {
				default: "#FFFFFF", //White
			},
			primary: {
				main: "#F6F3E7", 
			},
			secondary: {
				main: "#EBE6D9",
				icons: "#FOE2CE", 
			},
			text: {
				primary: "#CCB687", 
				secondary: "#E3D7BD", 
			},
		},
	})
);

const darkTheme = responsiveFontSizes(
	createTheme({
		spacing: 4,
		typography: {
			fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
			h1: {
				fontSize: "5rem",
				fontFamily: "Raleway",
			},
			h3: {
				fontSize: "2.5rem",
				fontFamily: "Open Sans",
			},
            p: {
                fontSize: "1rem",
				fontFamily: "Open Sans",
            }
		},
		palette: {
			background: {
				default: "#000000", //Black
			},
			primary: {
				main: "#141414", //Chinese Black
			},
			secondary: {
				main: "#1B1B1B", //Eerie Black
				icons: "#FFFFFF", //white
			},
			text: {
				primary: "#F3F3F3", //Anti-Flash White
				secondary: "#E1E1E1", //Chinese White
			},
		},
	})
);

export default lightTheme;
export { darkTheme };
