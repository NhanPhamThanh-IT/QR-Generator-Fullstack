import { useState } from 'react';

export const useDialog = (initialState = { open: false, data: null }) => {
    const [dialog, setDialog] = useState(initialState);

    const openDialog = (data = null) => {
        setDialog({ open: true, data });
    };

    const closeDialog = () => {
        setDialog({ open: false, data: null });
    };

    const updateDialog = (updates) => {
        setDialog(prev => ({ ...prev, ...updates }));
    };

    return {
        dialog,
        openDialog,
        closeDialog,
        updateDialog,
        isOpen: dialog.open,
        data: dialog.data
    };
};