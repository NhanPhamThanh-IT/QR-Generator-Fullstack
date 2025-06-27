import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
} from '@mui/material';

const ConfirmationDialog = ({
    open,
    onClose,
    onConfirm,
    title,
    content,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmColor = 'primary',
    icon,
    loading = false,
    maxWidth = 'sm',
    children
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth
        >
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {icon && icon}
                {title}
            </DialogTitle>
            <DialogContent>
                {content && <Typography>{content}</Typography>}
                {children}
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 1 }}>
                <Button
                    onClick={onClose}
                    color="inherit"
                    variant="outlined"
                    disabled={loading}
                >
                    {cancelText}
                </Button>
                <Button
                    onClick={onConfirm}
                    color={confirmColor}
                    variant="contained"
                    disabled={loading}
                >
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationDialog;