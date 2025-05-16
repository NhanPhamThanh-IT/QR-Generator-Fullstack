import {
    Button,
} from '@mui/material';

export const ActionButton = ({ text, iconComponent: IconComponent, isIconAtStart, color }) => {
    return (
        <Button
            variant="contained"
            color={color}
            startIcon={isIconAtStart ? <IconComponent size={16} /> : null}
            endIcon={!isIconAtStart ? <IconComponent size={16} /> : null}
            sx={{ borderRadius: 28 }}
        >
            {text}
        </Button>
    );
};

export default ActionButton;
