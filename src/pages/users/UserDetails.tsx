import React, { useEffect } from "react";
import { AppBar, Avatar, Box, Button, Divider, Stack, Tab, Tabs, useTheme } from "@mui/material";
import backArrowIcon from "/assets/icons/back-arrow.svg";
import personIcon from "/assets/icons/person.svg";
import activeStarIcon from "/assets/icons/active-star.svg";
import inactiveStarIcon from "/assets/icons/inactive-star.svg";
import GeneralDetails from "./components/GeneralDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getUserById } from "../../store/slices/users.slice";
import { Link, useParams } from "react-router-dom";
import SpinLoader from "../../components/SpinLoader";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function UserDetails() {
  const dispatch: AppDispatch = useDispatch();
  const theme = useTheme();
  const { id = "" } = useParams();
  const [value, setValue] = React.useState(0);
  const { selectedUser } = useSelector((store: RootState) => store.users);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  if (!selectedUser) {
    return <SpinLoader />;
  }

  return (
    <div className="py-8 sm:py-16">
      <header className="mb-4 sm:mb-8">
        <div className="flex items-center mb-8">
          <img src={backArrowIcon} width={24} className="mr-6" alt="" />
          <Link to="/users" className="text-base">
            Back to users
          </Link>
        </div>
        <div className="block sm:flex justify-between items-center">
          <h1 className="text-xl font-medium text-secondary">User Details</h1>
          <Stack spacing={2} direction="row">
            <Button color="error" variant="outlined">
              Blacklist User
            </Button>
            <Button color="primary" variant="outlined">
              Activate User
            </Button>
          </Stack>
        </div>
      </header>

      <section className="w-full">
        <Box sx={{ bgcolor: "background.paper", mb: 4 }}>
          <AppBar position="static" color="inherit" elevation={1}>
            <div className="p-16">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 4 }}
                alignItems="center"
                divider={<Divider orientation="vertical" flexItem />}
              >
                <div className="flex items-center space-x-8">
                  <Avatar sx={{ width: 120, height: 120, bgcolor: "#213f7d16" }}>
                    <img src={selectedUser.profile.avatar ?? personIcon} alt="person" />
                  </Avatar>
                  <div>
                    <h3 className="text-secondary font-medium">Grace Effiom</h3>
                    <p>LSQFf587g90</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-secondary font-medium text-base mb-4">User's Tier</h3>
                  <Stack direction="row" spacing={2}>
                    <img src={activeStarIcon} alt="active" />
                    <img src={inactiveStarIcon} alt="inactive" />
                    <img src={inactiveStarIcon} alt="inactive" />
                  </Stack>
                </div>
                <div>
                  <h3 className="text-secondary font-medium text-2xl mb-4">₦200,000.00</h3>
                  <p className="text-xs">9912345678/Providus Bank</p>
                </div>
              </Stack>
            </div>

            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="full width tabs example"
            >
              <Tab label="General Details" {...a11yProps(0)} />
              <Tab label="Documents" {...a11yProps(1)} />
              <Tab label="Bank Details" {...a11yProps(2)} />
              <Tab label="Loans" {...a11yProps(3)} />
              <Tab label="Savings" {...a11yProps(4)} />
              <Tab label="App and System" {...a11yProps(5)} />
            </Tabs>
          </AppBar>
        </Box>

        <Box sx={{ bgcolor: "background.paper", py: 2 }}>
          <div>
            <TabPanel value={value} index={0} dir={theme.direction}>
              <GeneralDetails user={selectedUser} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
              Item Five
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
              Item Six
            </TabPanel>
          </div>
        </Box>
      </section>
    </div>
  );
}

export default UserDetails;
