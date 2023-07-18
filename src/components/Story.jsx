import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "./../theme";

const Story = (data) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      flex={1}
      bgcolor={colors.primary}
      height={200}
      overflow="hidden"
      sx={{
        borderRadius: "15px",
        backgroundSize: "cover",
        backgroundImage: `url(${data.img})`,
      }}
    >
      <Box
        display="flex"
        p={1}
        sx={{
          background:
            "linear-gradient(180deg, rgba(13,29,46,1) 0%, rgba(13,29,46,0) 100%)",
        }}
      >
        <Box marginRight={1}>
          <Avatar sx={{ color: colors.primary, bgcolor: colors.background }} />
        </Box>
        <Box>
          <Typography fontWeight={500}>Join</Typography>
          <Typography>2 mins ago</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Story;
