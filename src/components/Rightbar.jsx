import React from "react";
import { tokens } from "./../theme";
import {
  AvatarGroup,
  Avatar,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  useTheme,
  Button,
  Stack,
  styled,
  Badge,
} from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
      marginRight: "12px",
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Rightbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Stack
        direction="column"
        alignItems="stretch"
        spacing={2}
        sx={{ bgcolor: colors.paper, borderRadius: "10px" }}
        p={2}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" fontWeight={500}>
            Friend requests
          </Typography>
          <Typography color="primary" fontWeight={500}>
            30
          </Typography>
        </Box>
        <Box display="flex">
          <Box marginRight="16px">
            <Avatar
              alt="Elon musk"
              sx={{ color: colors.primary, bgcolor: colors.background }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography fontWeight={500}>Elon musk</Typography>
            <Typography>12 mutual friends</Typography>
          </Box>
          <Box>
            <Typography fontWeight={500}>4h</Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" sx={{ marginRight: "16px" }}>
            Confirm
          </Button>
          <Button sx={{ bgcolor: colors.background }}>Delete</Button>
        </Box>
        <Typography variant="h6" fontWeight={500}>
          Birthdays
        </Typography>
        <Box display="flex">
          <Box p={1}>🎁</Box>
          <Box>Mr Jones and 7 others have brithdays today.</Box>
        </Box>
        <Typography variant="h6" fontWeight={500}>
          Active
        </Typography>
        <Box display="flex" alignItems="center">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ color: colors.primary, bgcolor: colors.background }}
            />
          </StyledBadge>
          <Typography marginLeft="16px">Tim Cook</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Rightbar;
