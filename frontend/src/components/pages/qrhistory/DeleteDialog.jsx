import { Delete as DeleteIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import ConfirmationDialog from '../common/ConfirmationDialog';

const DeleteDialog = ({
    open,
    onClose,
    onConfirm,
    item,
    itemName = 'item',
    loading = false
}) => {
    return (
        <ConfirmationDialog
            open={open}
            onClose={onClose}
            onConfirm={onConfirm}
            title="Confirm Delete"
            confirmText="Delete"
            cancelText="Cancel"
            confirmColor="error"
            icon={<DeleteIcon color="error" />}
            loading={loading}
        >
            <Typography>
                Are you sure you want to delete this {itemName}?
            </Typography>
            {item && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {item.name || item.content || item.title || 'Selected item'}
                </Typography>
            )}
        </ConfirmationDialog>
    );
};

export default DeleteDialog;