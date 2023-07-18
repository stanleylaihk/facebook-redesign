import {
  Favorite,
  FavoriteBorder,
  MoreHoriz,
  Share,
} from "@mui/icons-material";
import { tokens } from "./../theme";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  CardActions,
  Checkbox,
  useTheme,
} from "@mui/material";
import React from "react";

const Post = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box overflow="hidden" sx={{ borderRadius: "15px" }} marginBottom={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ color: colors.primary, bgcolor: colors.background }}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreHoriz color="primary" />
            </IconButton>
          }
          title="Title"
          subheader="Sept 14, 2022"
          sx={{ bgcolor: colors.paper }}
        />
        <CardMedia
          component="img"
          height="20%"
          src="https://images.unsplash.com/photo-1663573794485-6203eef8e30a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
        <CardContent sx={{ bgcolor: colors.paper }}>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rem.
            Reprehenderit perspiciatis quam recusandae, pariatur odit facilis
            dolore, porro, eligendi autem ab eius delectus impedit temporibus
            accusantium earum ea repellendus.
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ bgcolor: colors.paper }}>
          <IconButton>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
