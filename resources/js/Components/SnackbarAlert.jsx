import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SnackbarAlert({ alert }) {
    const [open, setOpen] = useState(alert ? true : false);

    setTimeout(() => setOpen(false), alert.duration);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };
    
    return (
        <Snackbar
            open={open}
            autoHideDuration={alert.duration}
            anchorOrigin={alert.anchor_origin}
            onClose={handleClose}
        >
            <Alert severity={alert.severity} sx={{ width: '100%' }}>
                {alert?.message}
            </Alert>
        </Snackbar>
    );
}
