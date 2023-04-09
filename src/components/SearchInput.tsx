import React from "react";
import { HiSearch } from "react-icons/hi";
import { Button, FormControl, TextField } from "@mui/material";

function SearchInput() {
  return (
    <FormControl
      style={styles}
      variant="outlined"
      sx={{
        bgcolor: "background.paper",
        display: { xs: "none", sm: "inline-flex" },
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <TextField
        placeholder="Search for anything"
        size="small"
        variant="standard"
        InputProps={{ disableUnderline: true }}
        fullWidth
        margin="dense"
      />
      <Button variant="contained" sx={{ borderRadius: 0, alignSelf: "stretch" }} disableElevation>
        <HiSearch size={24} />
      </Button>
    </FormControl>
  );
}

const styles = {
  width: 420,
  border: "1px solid #eee",
  borderRadius: "6px",
  paddingLeft: "8px",
};

export default SearchInput;
