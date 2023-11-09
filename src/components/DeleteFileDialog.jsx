import { Button, Dialog, DialogContent, DialogTitle, DialogActions, Box, Typography } from "@mui/material";

const DeleteFileDialog = (props) => {

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