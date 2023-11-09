import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage, Delete } from "@mui/icons-material";
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import DeleteFileDialog from "./DeleteFileDialog";

function TablePaginationActions(props) {
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5, pr: '0px' }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
                sx={{ color: "white" }}
            >
                <FirstPage />
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                sx={{ color: "white" }}
            >
                <KeyboardArrowLeft />
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
                sx={{ color: "white" }}
            >
                <KeyboardArrowRight />
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
                sx={{ color: "white" }}
            >
                <LastPage />
            </IconButton>
        </Box>
    );
}

const rowHeaders = ["FILENAME", "AUTHOR", "DATE"]

const StyledPaper = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.5)",
    backgroundBlendMode: "overlay",
    //borderTop: "2px solid #ffdd00",
    color: "white"
}));

function DisplayTable() {
    //data
    const transactionhistory = [
        {
            filename: "Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
        {
            filename: "Training_Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
        {
            filename: "Scraped_Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
        {
            filename: "Extra_Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
        {
            filename: "Sample_Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
        {
            filename: "Old_Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
        {
            filename: "Mysterious_Data.pdf",
            author: "Unknown",
            date: "2021-11-08"
        },
    ];

    const [page, setPage] = useState(0);
    const [selectedFilename, setSelectedFilename] = useState("");
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openDeleteFileWin, setOpenDeleteFileWin] = useState(false);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactionhistory.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const setDeleteFileDialog = (filename) => 
    {
        setSelectedFilename(filename);
        if(openDeleteFileWin === false){
            setOpenDeleteFileWin(true);
        } 
        else
            setOpenDeleteFileWin(false);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(
        <StyledPaper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ borderBottom: "2px solid #ffdd00" }}>
                        {rowHeaders.map((header, index) => (
                            <TableCell
                                key={index}
                                sx={{
                                    color: "black",
                                    fontWeight: 'bold'
                                }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? transactionhistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : transactionhistory
                    ).map((row, index) => {
                        const itemDate = new Date(row.date);
                        itemDate.setDate(itemDate.getDate());
                    return(
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" sx={{color: "black"}}>
                                {row.filename}
                            </TableCell>
                            <TableCell sx={{color: "black"}}>
                                {row.author}
                            </TableCell>
                            <TableCell sx={{color: "black"}}>
                                {itemDate.toISOString().split("T")[0]/*dateOnly*/}
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => setDeleteFileDialog(row.filename)} sx={{ color: "white" }}>
                                    {openDeleteFileWin ?
                                        <>
                                        <DeleteFileDialog
                                        isOpen = {openDeleteFileWin}
                                        closeDialog = {setDeleteFileDialog}
                                        filename = {selectedFilename}
                                        trueFileName = {selectedFilename}/>
                                        </>
                                    : <></>}
                                    <Delete style={{ color: 'black' }}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )})}

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={transactionhistory.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                'aria-label': 'rows per page',
                                },
                                sx: { color: "warning" }
                            }}
                            sx={{ color: "black" }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </StyledPaper>
    );
}

export default DisplayTable;