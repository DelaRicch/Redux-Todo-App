import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/Todos/TodosSlice";

const AddTodo = ({ open, handleClose }) => {
  // Working with redux store
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const titleChange = (e) => setTitle(e.target.value);
  const detailsChange = (e) => setDetails(e.target.value);

  //   Adding todo to redux store
  const dispatch = useDispatch();
  const saveTodo = () => {
    if (title && details) {
      dispatch(
        addTodo({
          id: nanoid(),
          title,
          details,
        })
      );
      setTitle("");
      setDetails("");
      handleClose();
    }
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-form">
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "40rem",
            maxHeight: "30rem",
            borderRadius: "0.7rem",
            boxShadow: "1px 1px 7px 2px #2037ff67",
            background: "#ffffff",
          }}
        >
          <Typography
            variant="h5"
            mt={2}
            sx={{ textAlign: "center", fontWeight: "700" }}
          >
            Add Todo
          </Typography>
          <form
            id="modal-form"
            style={{
              padding: "2rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "50rem",
              borderRadius: "0.7rem",
            }}
          >
            <TextField
              size="small"
              label="Todo Title"
              id="todoTitle"
              value={title}
              onChange={titleChange}
            />
            <TextField
              id="outlined-todoDetails-flexible"
              label="Todo Details"
              multiline
              maxRows={5}
              value={details}
              onChange={detailsChange}
              sx={{ width: "20rem" }}
            />

            <Button
              variant="contained"
              sx={{
                width: "max-content",
                padding: "0 0.5rem",
                display: "flex",
                marginInline: "auto",
              }}
              type="button"
              onClick={() => saveTodo()}
            >
              Add Todo
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTodo;
