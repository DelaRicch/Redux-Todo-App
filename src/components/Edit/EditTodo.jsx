import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../../features/Todos/TodosSlice";

const EditTodo = ({ closeModal, openEditModal, id }) => {
  // Working with redux to get todos from store
  const todo = useSelector((state) =>
    state.todo.find((item) => item.id === id)
  );

  const [title, setTitle] = useState(todo?.title);
  const [details, setDetails] = useState(todo?.details);

  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDetailsChange = (e) => setDetails(e.target.value);

  const saveEdit = () => {
    if (title && details) {
      dispatch(
        editTodo({
          id: id,
          title,
          details,
        })
      );
      console.log(title);
    }
    closeModal();
  };

  return (
    <Modal open={openEditModal} onClose={closeModal}>
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
          Edit Todo
        </Typography>
        <form
          id="modal-form"
          style={{
            padding: "2rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRadius: "0.7rem",
          }}
        >
          <TextField
            size="small"
            label="Todo Title"
            id="todoTitle"
            defaultValue={todo?.title}
            onChange={onTitleChange}
          />
          <TextField
            label="Todo Details"
            multiline
            maxRows={5}
            id="todoDetails"
            defaultValue={todo?.details}
            onChange={onDetailsChange}
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
            onClick={saveEdit}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditTodo;
