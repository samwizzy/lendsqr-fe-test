import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import { IconButton, Menu, MenuItem, Popover } from "@mui/material";
import { MdOutlineFilterList, MdOutlineMoreVert, MdOutlineVisibility } from "react-icons/md";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { AppDispatch, RootState } from "../store";
import { getUsersAsync } from "../store/slices/users.slice";
import { IUser, User } from "../store/model/User";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import FilterForm from "./FilterForm";

type ID = "orgName" | "userName" | "email" | "phoneNumber" | "createdAt" | "employmentStatus";

interface Column {
  id: ID;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: string) => string | JSX.Element;
}

const columns: readonly Column[] = [
  { id: "orgName", label: "ORGANIZATION", minWidth: 170 },
  { id: "userName", label: "USERNAME", minWidth: 100 },
  { id: "email", label: "EMAIL", minWidth: 170 },
  { id: "phoneNumber", label: "PHONE NUMBER", minWidth: 170 },
  {
    id: "createdAt",
    label: "DATE JOINED",
    minWidth: 170,
    format: (value) => (value ? moment(value).format("MMM DD, YYYY hh:mm A") : ""),
  },
  {
    id: "employmentStatus",
    label: "STATUS",
    minWidth: 170,
    format: (value) => <Chip label={value} variant="outlined" color="primary" />,
  },
];

function AppTable() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [userId, setUserId] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data, filterUsers } = useSelector((store: RootState) => store.users);
  const [tableRows, setTableRows] = React.useState<IUser[]>([]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setUserId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewUser = () => {
    setAnchorEl(null);
    navigate(`/users/${userId}`);
  };

  React.useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  React.useMemo(() => {
    const rows: IUser[] = filterUsers.map((row: User) => ({
      id: row.id,
      orgName: row.orgName,
      userName: row.userName,
      email: row.email,
      phoneNumber: row.phoneNumber,
      createdAt: row.createdAt,
      employmentStatus: row.education.employmentStatus,
    }));
    setTableRows(rows);
  }, [filterUsers]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [filterAnchorEl, setFilterAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const openFilter = Boolean(filterAnchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", my: 4 }}>
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  <div className="flex items-center space-x-2">
                    <span>{column.label}</span>
                    <IconButton size="small" onClick={handleFilterClick}>
                      <MdOutlineFilterList size={20} />
                    </IconButton>
                  </div>
                </TableCell>
              ))}
              <TableCell>
                <MdOutlineMoreVert size={24} color="primary" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  <TableCell>
                    <IconButton
                      id="demo-positioned-button"
                      aria-controls={open ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(ev) => handleClick(ev, row.id)}
                      size="small"
                    >
                      <MdOutlineMoreVert size={24} color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleViewUser}>
          <MdOutlineVisibility className="mr-4" /> View Details
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FiUserX className="mr-4" /> Blacklist User
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FiUserCheck className="mr-4" /> Activate User
        </MenuItem>
      </Menu>

      <Popover
        id={id}
        open={openFilter}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        elevation={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <FilterForm />
      </Popover>
    </Paper>
  );
}
export default AppTable;
