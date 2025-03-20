import { Typography } from "@mui/material";

const Tooltip = ({top, left, content}) => {
    return (
        <Typography sx={{
            position: 'absolute',
            background: 'var(primary)',
            top: !top ? '-13px' : top,
            left: !left ? '2px' : left,
            borderRadius: '10px',
            padding: '0 5px',
            fontSize: '11px'
        }} color='error' component={'div'}>
            {content}
        </Typography>
    );
};

export default Tooltip;