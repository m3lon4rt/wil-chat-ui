import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Box, Typography, TextField } from "@mui/material";
import { useState } from "react";

const UploadFileDialog = (props) => {

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