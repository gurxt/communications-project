import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


export default function AgeTrends({ _data }) {
    // 'Size': importance_size[idx],
    // 'Panel': importance_panel[idx],
    // 'Resolution': importance_resolution[idx],
    // 'Refresh Rate': importance_refresh[idx],
    // 'Contrast': importance_contrast[idx],
    // 'Brightness': importance_brightness[idx],
  //.reduce((x, y) => x.Size + y.Size, 0) / 13).toFixed(2)


  const data = {
    '18-25': [
      12,
      (_data.filter(row => row.Age === "18-25").map(row => row.Size).reduce((x, y) => x + y, 0) / 12).toFixed(2),
      (_data.filter(row => row.Age === "18-25").map(row => row.Panel).reduce((x, y) => x + y, 0) / 12).toFixed(2),
      (_data.filter(row => row.Age === "18-25").map(row => row.Resolution).reduce((x, y) => x + y, 0) / 12).toFixed(2),
      (_data.filter(row => row.Age === "18-25").map(row => row['Refresh Rate']).reduce((x, y) => x + y, 0) / 12).toFixed(2),
      (_data.filter(row => row.Age === "18-25").map(row => row.Contrast).reduce((x, y) => x + y, 0) / 12).toFixed(2),
      (_data.filter(row => row.Age === "18-25").map(row => row.Brightness).reduce((x, y) => x + y, 0) / 12).toFixed(2),
    ],
    '26-35': [
      10,
      (_data.filter(row => row.Age === "26-35").map(row => row.Size).reduce((x, y) => x + y, 0) / 10).toFixed(2),
      (_data.filter(row => row.Age === "26-35").map(row => row.Panel).reduce((x, y) => x + y, 0) / 10).toFixed(2),
      (_data.filter(row => row.Age === "26-35").map(row => row.Resolution).reduce((x, y) => x + y, 0) / 10).toFixed(2),
      (_data.filter(row => row.Age === "26-35").map(row => row['Refresh Rate']).reduce((x, y) => x + y, 0) / 10).toFixed(2),
      (_data.filter(row => row.Age === "26-35").map(row => row.Contrast).reduce((x, y) => x + y, 0) / 10).toFixed(2),
      (_data.filter(row => row.Age === "26-35").map(row => row.Brightness).reduce((x, y) => x + y, 0) / 10).toFixed(2),
    ],
    '36-45': [
      5,
      (_data.filter(row => row.Age === "36-45").map(row => row.Size).reduce((x, y) => x + y, 0) / 5).toFixed(2),
      (_data.filter(row => row.Age === "36-45").map(row => row.Panel).reduce((x, y) => x + y, 0) / 5).toFixed(2),
      (_data.filter(row => row.Age === "36-45").map(row => row.Resolution).reduce((x, y) => x + y, 0) / 5).toFixed(2),
      (_data.filter(row => row.Age === "36-45").map(row => row['Refresh Rate']).reduce((x, y) => x + y, 0) / 5).toFixed(2),
      (_data.filter(row => row.Age === "36-45").map(row => row.Contrast).reduce((x, y) => x + y, 0) / 5).toFixed(2),
      (_data.filter(row => row.Age === "36-45").map(row => row.Brightness).reduce((x, y) => x + y, 0) / 5).toFixed(2),
    ],
    '>45': [
      2,
      (_data.filter(row => row.Age === ">45").map(row => row.Size).reduce((x, y) => x + y, 0) / 2).toFixed(2),
      (_data.filter(row => row.Age === ">45").map(row => row.Panel).reduce((x, y) => x + y, 0) / 2).toFixed(2),
      (_data.filter(row => row.Age === ">45").map(row => row.Resolution).reduce((x, y) => x + y, 0) / 2).toFixed(2),
      (_data.filter(row => row.Age === ">45").map(row => row['Refresh Rate']).reduce((x, y) => x + y, 0) / 2).toFixed(2),
      (_data.filter(row => row.Age === ">45").map(row => row.Contrast).reduce((x, y) => x + y, 0) / 2).toFixed(2),
      (_data.filter(row => row.Age === ">45").map(row => row.Brightness).reduce((x, y) => x + y, 0) / 2).toFixed(2),
    ],
  }

  console.log(data)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // size, panel, resolution, refresh rate, contrast, brightness
  return (
    <Paper sx={{ width: '75%', backgroundColor: "#02273b", border: "2px solid #999"}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              ></TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
              Number
              </TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
              Size    
              </TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
              Panel 
              </TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
              Resolution
              </TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
              Refresh Rate
              </TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
                Contrast
              </TableCell>
              <TableCell
                key={Math.random()}
                align="center"
                style={{ fontWeight: "bold", backgroundColor: "#32323299", color: "#fff", fontSize: '12px', top: 0, minWidth: 50, borderRight: "1px ridge #fff"}}
              >
                Brightness 
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={Math.random()}>
                    <TableCell key={Math.random()} align="center" style={{ fontSize: '11px', color: "#fff", borderRight: '1px ridge #fff'}}>
                        { row }
                    </TableCell>
                    { data[row].map(column => {
                      return (
                        <TableCell key={Math.random()} align="center" style={{ fontSize: '11px', color: "#fff", borderRight: '1px ridge #fff'}}>
                            { column }
                        </TableCell>
                      )
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
        count={Object.keys(data).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}