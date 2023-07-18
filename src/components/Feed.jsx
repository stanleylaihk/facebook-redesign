import {
  Avatar,
  Box,
  Button,
  Card,
  InputBase,
  Stack,
  Typography,
  useTheme,
  styled,
  TextField,
  Modal,
  ButtonGroup,
} from "@mui/material";
import { ColorModeContext, tokens } from "./../theme";
import Post from "./Post";
import Story from "./Story";
import React, { useState } from "react";
import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  VideoCameraBack,
  PersonAdd,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: 10,
});

const Feed = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Stack direction="row" display="flex" gap={2} paddingBottom={2}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
          bgcolor={colors.paper}
          height={200}
          overflow="hidden"
          sx={{
            borderRadius: "15px",
          }}
        >
          <Button
            variant="contained"
            sx={{ height: "64px" }}
            onClick={(e) => setOpen(true)}
          >
            <Add />
          </Button>
        </Box>

        <Story img="https://images.unsplash.com/photo-1473177027534-53d906e9abcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" />
        <Story img="https://images.unsplash.com/photo-1496135137828-b0b35fc44608?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
        <Story img="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
        <Story img="https://images.unsplash.com/photo-1582103287241-2762adba6c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
      </Stack>

      <Box
        bgcolor={colors.paper}
        p={2}
        overflow="hidden"
        marginBottom={2}
        sx={{ borderRadius: "15px" }}
      >
        <Box display="flex">
          <Avatar
            sx={{
              color: colors.primary,
              bgcolor: colors.background,
              marginRight: 2,
            }}
          />
          <InputBase
            placeholder="What's on your mind, Mike?"
            sx={{ width: "100%" }}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" paddingTop={2}>
          <Stack direction="row" gap={2}>
            <Button sx={{ bgcolor: colors.background }}>
              <VideoCameraBack sx={{ marginRight: 1 }} /> Live Video
            </Button>
            <Button sx={{ bgcolor: colors.background }}>
              <Image sx={{ marginRight: 1 }} />
              Photo/Video
            </Button>
            <Button sx={{ bgcolor: colors.background }}>
              <EmojiEmotions sx={{ marginRight: 1 }} /> Feeling/Activity
            </Button>
            <Button sx={{ bgcolor: colors.background }}>．．．</Button>
          </Stack>
          <Button variant="contained">Post</Button>
        </Box>
      </Box>
      <Box>
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src=""
              onClick={(e) => setOpen(true)}
            />
            <Typography>Mark</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's up"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions />
            <Image />
            <VideoCameraBack />
            <PersonAdd />
          </Stack>
          <ButtonGroup fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Feed;
