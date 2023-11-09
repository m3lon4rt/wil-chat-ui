import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Box, Typography } from "@mui/material";

const DeleteFileDialog = (props) => {
    const handleSave = () => {
        axios.delete(`https://localhost:7216/api/Expenses/${props.id}`)
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
        <>{console.log(props.filename + " | " + props.truefname)}
            <Dialog open={props.filename === props.truefname && props.isOpen ? true : false }>
                <DialogTitle sx={{ fontWeight: 'bold' }}>DELETE FILE</DialogTitle>
                <DialogContent>
                    <Box sx={{
                        display: 'flex',
                        JustifyContent: 'center',   
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <Typography>
                            Are you sure you want to delete {props.filename}?
                        </Typography>
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
                            Delete
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

export default DeleteFileDialog;