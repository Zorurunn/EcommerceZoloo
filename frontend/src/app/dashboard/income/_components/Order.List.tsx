import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ROWS } from "@/constants";
import { Box, Stack } from "@mui/material";

interface Column {
  id: "ID" | "order" | "pay" | "date";
  label: string;
  minWidth?: number;
  fontSize: number;
  fontColor: string;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  {
    id: "ID",
    label: " Захиалгын ID дугаар",
    minWidth: 100,
    fontSize: 12,
    fontColor: "#3F4145",
  },
  {
    id: "order",
    label: " Захиалагч",
    minWidth: 170,
    fontSize: 12,
    fontColor: "#3F4145",
  },
  {
    id: "pay",
    label: " Төлбөр",
    minWidth: 100,
    fontSize: 12,
    align: "center",
    fontColor: "#3F4145",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Огноо",
    minWidth: 100,
    fontSize: 12,
    align: "center",
    fontColor: "#3F4145",
    format: (value: number) => value.toFixed(2),
  },
];

export default function OrderList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        borderRadius: "8px",
        border: "1px solid #ECEDF0",
      }}
    >
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: column.fontSize,
                    color: column.fontColor,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ px: "20px" }}>
            {ROWS
              .slice
              //   page * rowsPerPage,
              //   page * rowsPerPage + rowsPerPage
              ()
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.order}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Stack p={2}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </Stack>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
