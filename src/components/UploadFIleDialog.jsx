import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

const UploadFileDialog = (props) => {
    const [filePath, setFilePath] = useState("");
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFilePathChange = (event) => {
        const inputValue = event.target.value;
        setFilePath(inputValue);
    }

    const handleSave = () => {
        axios.post(`https://localhost:7216/api/Expenses/${props.id}`, {
            path: filePath
        })
        .then(response => {
            // Handle the response data
            setIsSuccessful(true);
            console.log(isSuccessful);
            console.log(response.data);
            console.log(props.id);
        })
        .catch(error => {
            // Handle any errors
            setIsError(true);
            console.log(isError);
            setErrorMessage(error.response.data)
            console.error(errorMessage);
        });
        
        // Close the dialog
        handleClose();
    };

    const handleClose = () => {
        props.closeDialog();
    };

    return (
        <>
            <Dialog open={props.isOpen}>
                <DialogTitle sx={{ fontWeight: 'bold' }}>UPLOAD FILE</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        display: 'flex',
                        JustifyContent: 'center', 
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>

                    <TextField
                        id="Filename"
                        onChange={handleFilePathChange}
                        onClick={e => e.stopPropagation()}
                        label="Input File Path"
                        variant="outlined"
                        sx={{
                            width: '100%'
                        }}/>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Box sx={{
                        display: 'flex',
                        JustifyContent: 'space-between' ,
                        alignItems: 'center',
                        flexDirection: 'row',
                        pr: "1rem",
                        m: "0rem 1.5rem 1.5rem 1.5rem"
                    }}>
                        <Button
                            onClick={handleSave}
                            sx={{
                                marginTop: '2rem',
                                backgroundColor: '#ffdd00',
                                color: 'black',
                                fontWeight: 'bold',
                                width: '200px',
                                height: '40px',
                                m: '1rem'
                            }}>
                            Upload
                        </Button>
                        <Button
                            onClick={handleClose}
                            sx={{
                                marginTop: '2rem',
                                backgroundColor: '#ffdd00',
                                color: 'black',
                                fontWeight: 'bold',
                                width: '200px',
                                height: '40px',
                                m: '1rem'
                            }}>
                            Cancel
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default UploadFileDialog;