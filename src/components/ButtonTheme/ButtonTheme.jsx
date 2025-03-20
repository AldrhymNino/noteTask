// Components
import { DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "..";

// Context
import { ThemeContext } from "../../context";
import { useContext } from "react";

const ButtonTheme = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <Button handler={toggleTheme} component="iconButton">
            {isDark ? <DarkMode color="error" /> : <LightMode color="error" />}
        </Button>
    );
};

export default ButtonTheme;