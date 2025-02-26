import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Stack, Link } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.100",
        px: 4,
        py: 2,
        mb: 4,
        position: "fixed",
        width: "100%",
        zIndex: 9999,
        top: 0,
      }}
    >
      <Stack direction="row" spacing={4}>
        <Link
          component={RouterLink}
          to="/"
          fontWeight="medium"
          underline="none"
          color="inherit"
        >
          Counter
        </Link>
        <Link
          component={RouterLink}
          to="/form"
          fontWeight="medium"
          underline="none"
          color="inherit"
        >
          User Form
        </Link>
        <Link
          component={RouterLink}
          to="/editor"
          fontWeight="medium"
          underline="none"
          color="inherit"
        >
          Editor
        </Link>
        <Link
          component={RouterLink}
          to="/dashboard"
          fontWeight="medium"
          underline="none"
          color="inherit"
        >
          Dashboard
        </Link>
      </Stack>
    </Box>
  );
};

export default Navbar;
