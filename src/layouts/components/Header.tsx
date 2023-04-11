import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import avatar from "/assets/icons/avatar.svg";
import { Avatar, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { HiChevronDown, HiMenuAlt1 } from "react-icons/hi";
import SearchInput from "../../components/SearchInput";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth/user.slice";

type IProps = {
  sidebarOpen: boolean;
  openDrawer: (arg: any) => void;
};

function Header(props: IProps) {
  const { openDrawer } = props;
  const dispatch: AppDispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  return (
    <header className="header px-4 sm:px-16">
      <Box alignItems="center" sx={{ display: "flex" }}>
        <IconButton sx={{ mr: { xs: 0, sm: 1 }, display: { xs: "block", sm: "none" } }} onClick={openDrawer}>
          <HiMenuAlt1 color="#333" />
        </IconButton>
        <SearchInput />
      </Box>

      <menu className="menu">
        <ul className="menu-list space-x-4 sm:space-x-8">
          <li className="hidden sm:block">
            <a href="">Docs</a>
          </li>
          <li>
            <a href="">
              <IoNotificationsOutline size={24} display="block" />
            </a>
          </li>
          <li className="flex items-center space-x-1 sm:space-x-4">
            <Avatar src={avatar} alt="@SevenOutman" sx={{ width: 48, height: 48 }} />

            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="text"
              disableElevation
              onClick={handleClick}
              endIcon={<HiChevronDown />}
              color="secondary"
            >
              Adedeji
            </Button>

            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={1}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Account
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Settings
              </MenuItem>
              <MenuItem onClick={logoutUser} disableRipple>
                Logout
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </menu>
    </header>
  );
}

export default Header;
