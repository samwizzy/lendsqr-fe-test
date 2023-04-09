import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { filterUsers, resetFilter } from "../store/slices/users.slice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function FilterForm() {
  const dispatch: AppDispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      orgName: "",
      user: "",
      email: "",
      phoneNumber: "",
      createdAt: null,
      status: "",
    },
  });

  const handleResetFilter = () => {
    reset();
    dispatch(resetFilter());
  };

  const onSubmit = (data: any) => {
    dispatch(filterUsers(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm p-8">
      <FormControl fullWidth sx={{ mb: 2 }} size="small">
        <FormLabel id="demo-simple-select-label">Organization</FormLabel>

        <Controller
          name="orgName"
          rules={{ required: "Select a organization" }}
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value="labore-dolor-et">labore-dolor-et</MenuItem>
              <MenuItem value="quas-et-ut">quas-et-ut</MenuItem>
              <MenuItem value="aliquam-velit-ab">aliquam-velit-ab</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <FormLabel id="demo-simple-select-label">User</FormLabel>
        <Controller
          name="user"
          rules={{ required: "Enter User Name" }}
          control={control}
          render={({ field }) => <OutlinedInput placeholder="User" {...field} />}
        />
      </FormControl>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <FormLabel id="demo-simple-select-label">Email</FormLabel>
        <Controller
          name="email"
          rules={{ required: "Enter an email" }}
          control={control}
          render={({ field }) => <OutlinedInput placeholder="Email" {...field} />}
        />
      </FormControl>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <FormLabel id="demo-simple-select-label">Date</FormLabel>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name="createdAt"
            control={control}
            render={({ field }) => (
              <DatePicker {...field} disableFuture slotProps={{ textField: { InputProps: { size: "small" } } }} />
            )}
          />
        </LocalizationProvider>
      </FormControl>
      <FormControl fullWidth size="small" sx={{ mb: 2 }}>
        <FormLabel id="demo-simple-select-label">Phone Number</FormLabel>
        <Controller
          name="phoneNumber"
          rules={{ required: "Enter a phone number" }}
          control={control}
          render={({ field }) => <OutlinedInput placeholder="Phone Number" {...field} />}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }} size="small">
        <FormLabel id="demo-simple-select-label">Status</FormLabel>

        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={1}>Employed</MenuItem>
            </Select>
          )}
        />
      </FormControl>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="secondary" onClick={handleResetFilter}>
          Reset
        </Button>
        <Button type="submit" color="primary" disabled={!isValid} variant="contained" disableElevation>
          Filter
        </Button>
      </Stack>
    </form>
  );
}

export default FilterForm;
