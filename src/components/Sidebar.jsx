import { tokens } from "./../theme";
import {
  Flag,
  Groups,
  Home,
  People,
  Settings,
  SmartDisplayOutlined,
  SportsEsports,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Avatar,
  Typography,
  useTheme,
  Divider,
  Button,
} from "@mui/material";
import React from "react";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Box sx={{ bgcolor: colors.paper, borderRadius: "10px" }} p={2}>
        <Box display="flex" alignItems="center" sx={{ padding: "8px 16px" }}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              marginRight: "26px",
              bgcolor: colors.background,
              color: colors.primary,
              borderRadius: "10px",
            }}
            src=""
          />
          <Typography>Mark</Typography>
        </Box>
        <Divider color={colors.primary} />
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friend">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#group">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#watch">
              <ListItemIcon>
                <SmartDisplayOutlined />
              </ListItemIcon>
              <ListItemText primary="Watch" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#page">
              <ListItemIcon>
                <Flag />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#market">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#game">
              <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
              <ListItemText primary="Game" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box textAlign="center">
          <Button sx={{ bgcolor: colors.background, width: "100%" }}>
            See More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
