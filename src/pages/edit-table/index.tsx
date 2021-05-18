import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormDialog from './dialog'
import { IRows, onFormikSubmit } from './type'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const rows: Array<IRows> = [
  { name: 'Frozen yoghurt', calories: 159, fat:6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat:9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat:16.0, carbs: 24, protein: 6.0 },
  { name: 'Cupcake', calories: 305, fat:3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat:16.0, carbs: 49, protein: 3.9 }
];

export default function BasicTable() {
  const classes = useStyles();

  const [open, setOpen] = useState(false)

  const [curRow, setCurRow] = useState<IRows | null>()

  const handleClick = (row: IRows) => {
    setCurRow(row)
    setOpen(true)
  }

  const handleSubmit: onFormikSubmit = (values, options) => {
    console.log(values)
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
              <TableCell align="right">setting</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleClick(row)} variant="contained" size="small" color="primary">
                    edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        curRow ?
        <FormDialog open={open} data={curRow} handleClose={() => setOpen(false)} handleSubmit={handleSubmit} /> :
        null
      }
    </>
  )
}
