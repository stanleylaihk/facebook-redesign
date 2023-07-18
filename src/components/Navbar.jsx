import { useState, useContext } from "react";
import { ColorModeContext, tokens } from "./../theme";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Mail,
  Notifications,
  DarkMode,
  LightMode,
  FaceRetouchingNatural,
} from "@mui/icons-material";

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="fixed">
      <Toolbar
        display="flex"
        sx={{ bgcolor: colors.paper, justifyContent: "space-between" }}
      >
        <Typography
          variant="h4"
          color="primary"
          fontWeight={700}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Facebook Redesign
        </Typography>
        <FaceRetouchingNatural sx={{ display: { xs: "block", sm: "none" } }} />
        <Box
          sx={{
            width: "40%",
            bgcolor: colors.background,
            borderRadius: "15px",
            paddingX: 2,
          }}
          overflow="hidden"
        >
          <InputBase sx={{ width: "100%" }} placeholder="Search facebook" />
        </Box>
        <Icons>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkMode color="primary" />
            ) : (
              <LightMode color="primary" />
            )}
          </IconButton>
          <Badge variant="dot" color="error">
            <Mail color="primary" />
          </Badge>
          <Badge variant="dot" color="error">
            <Notifications color="primary" />
          </Badge>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              color: colors.primary,
              bgcolor: colors.background,
            }}
            src=""
            onClick={(e) => setOpen(true)}
            backgroundColor="primary"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />
          <Typography>Username</Typography>
        </UserBox>
      </Toolbar>
      <Menu
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Setting</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
