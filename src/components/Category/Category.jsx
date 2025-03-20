import { useContext, useState } from "react";
import { Button, Tooltip } from "../";
import { FilterListRounded } from "@mui/icons-material";
import { CategoryContext } from "../../context";

const Category = () => {
    const { category, setCategory, categories } = useContext(CategoryContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setCategory(option);
        toggle();
    };

    return (
        <div className="category">
            <Tooltip content={category} />
            <Button component={"iconButton"} handler={toggle}>
                <FilterListRounded color="error" />
            </Button>
            <div style={{
                visibility: isOpen ? 'visible' : 'hidden'
            }} className="container-option">

            {
                categories.map(option => 
                    <Button handler={() => selectOption(option)} disableElevation color="inherit" variant="contained" className="option-category">
                        {option}
                    </Button>
                )
            }  
            </div>
        </div>
    );
};

export default Category;