import { useState, useEffect } from 'react'
import { Box, Button, Card, List, ListItem, Typography } from "@mui/material";
import NavBar from '../components/Navbar';
import DisplayTable from "../components/DisplayTable";
import UploadFileDialog from '../components/UploadFIleDialog';

function MainPage() {
    const [openUploadFileWin, setOpenUploadFileWin] = useState(false);
    const [scrapedData, setScrapedData] = useState([]);

    useEffect(() => {
        getData
    });

    //get scraped data
    function getData() {
        console.log(query)
        axios.get(`http://127.0.0.1:5000/query/${query}`).then((response) => {
            const res = response.data
            setScrapedData(current => [...current, res])
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    const setUploadFileDialog = () => 
    {
        if(openUploadFileWin === false){
            setOpenUploadFileWin(true);
        } 
        else
            setOpenUploadFileWin(false);
    };

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };

    return (
        <Box sx={{ display: 'flex' }}>
            <NavBar />
            <Box
                position='relative'
                sx={{
                    paddingTop: "64px",
                    flexGrow: 1,
                    height: "90%",
                    width: "90%",
                    mt: '2rem',
                }}>

                <h2>FILE TABLE</h2>
                <DisplayTable />
                <Button
                    onClick={() => setUploadFileDialog()}
                    sx={{
                        marginTop: '2rem',
                        backgroundColor: '#ffdd00',
                        color: 'black',
                        fontWeight: 'bold',
                        width: '240px',
                        height: '40px',
                        ml: '84%'
                    }}>
                    
                    <UploadFileDialog
                        isOpen = {openUploadFileWin}
                        closeDialog = {setUploadFileDialog}/>
                    Upload

                </Button>
                
                <h2>TBI UPDATES</h2>
                <List style={flexContainer}>
                    {scrapedData.map((p, index) => { return (
                    <ListItem key={index}>
                        <Card sx={{ width: '20vh', height: '25vh', padding: '20px', borderTop: '2px solid #ffdd00' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Recently Scraped Updates Here!!
                        </Typography>
                        </Card>
                    </ListItem>
                    )})}
                    <ListItem>
                        <Card sx={{ width: '30vh', height: 'fit-content', minHeight: '25vh', padding: '20px', borderTop: '2px solid #ffdd00' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Recently Scraped Updates Here!!
                        </Typography>
                        </Card>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default MainPage