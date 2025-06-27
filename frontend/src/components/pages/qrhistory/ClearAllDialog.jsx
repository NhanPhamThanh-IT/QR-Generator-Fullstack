import { Typography, Box, Chip } from '@mui/material';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ConfirmationDialog from '../common/ConfirmationDialog';

const ClearAllDialog = ({
    open,
    onClose,
    onConfirm,
    items = [],
    itemType = 'items',
    loading = false,
    showStats = false
}) => {
    const getStats = () => {
        if (!showStats || !Array.isArray(items)) return null;
        
        const stats = items.reduce((acc, item) => {
            const type = item.data_type || item.type || 'Unknown';
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        
        return Object.entries(stats).map(([type, count]) => (
            <Chip
                key={type}
                label={`${count} ${type}`}
                size="small"
                variant="outlined"
            />
        ));
    };

    return (
        <ConfirmationDialog
            open={open}
            onClose={onClose}
            onConfirm={onConfirm}
            title={`Clear All ${itemType}`}
            confirmText={`Clear All (${items.length})`}
            cancelText="Cancel"
            confirmColor="error"
            icon={<ClearAllIcon color="error" />}
            loading={loading}
        >
            <Typography gutterBottom>
                Are you sure you want to delete all {itemType} from your history?
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                <strong>This action cannot be undone.</strong> All {items.length} {itemType} will be permanently deleted.
            </Typography>
            
            {showStats && items.length > 0 && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                    <Typography variant="subtitle2" gutterBottom>
                        Items to be deleted:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {getStats()}
                    </Box>
                </Box>
            )}
        </ConfirmationDialog>
    );
};

export default ClearAllDialog;