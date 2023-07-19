import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  75, 50, 125, 100, 200, 100, 30, 30, 30, 30, 30, 30
]

export default function TableExample({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', backgroundColor: "#02273b", border: "2px solid #999"}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              { Object.keys(data[0]).map((row, idx) => (
                <TableCell
                  key={idx}
                  align="center"
                  style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: columns[idx], borderRight: "1px ridge #fff"}}
                >
                  { row }
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {Object.keys(row).map((column) => {
                      let value = row[column]
                      if (column === "Usage") {
                        const nulls = value.filter(val => val === null).length
                        if (nulls === 2)
                          value = value[0]
                        if (nulls === 1) {
                          value = value.join(", ")
                          value = value.slice(0, value.length - 2)
                        }
                        if (value.length === 3) {
                          value = value.join(", ")
                          value = value.slice(0, value.length)
                        }
                      }
                      
                      return (
                        <TableCell key={Math.random()} align="center" style={{ fontSize: '11px', color: "#fff", borderRight: '1px ridge #fff'}}>
                            { value }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{ backgroundColor: "#32323299", fontSize: "12px", color: "#fff"}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}