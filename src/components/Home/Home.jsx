import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import AddTodo from "../Add/AddTodo";
import EditTodo from "../Edit/EditTodo";

import { IoMdAdd } from "react-icons/io";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../features/Todos/TodosSlice";

const Home = () => {
  const dispatch = useDispatch();

  const [currentItem, setCurrentItem] = useState(null);
  // Open and close Add Todo Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Open and close Edit Todo
  const [openEditModal, setOpenEditModal] = useState(false);
  const openModal = (id) => {
    setCurrentItem(id);
    setOpenEditModal(true);
  };
  const closeModal = () => setOpenEditModal(false);

  //   Getting todos from redux store
  const Todo = useSelector((state) => state.todo);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: "40rem",
          height: "max-content",
          padding: "2rem",
          border: "1px solid #c4ecff",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            maxWidth: "100%",
            height: "max-content",
            marginInline: "auto",
            borderRadius: "0.5rem",
            boxShadow: "3px 3px 7px 2px rgba(0,26,255,0.2)",
            padding: "2rem 3rem",
          }}
        >
          <TextField
            label="Search Todo"
            id="search-todo"
            InputProps={{
              type: "search",
            }}
            size="small"
          />
          <Tooltip title="Add Todo" placement="top" arrow>
            <IconButton sx={{ fontSize: "2rem" }} onClick={() => handleOpen()}>
              <IoMdAdd />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          component="section"
          sx={{
            width: "25rem",
            height: "22rem",
            marginInline: "auto",
            borderRadius: "0.5rem",
            boxShadow: "3px 3px 7px 2px rgba(0,26,255,0.2)",
            padding: "0.5rem",
            overflowY: "scroll",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {Todo.length < 1 ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>Oops, You currently have no Todo 😒 </div>
            </div>
          ) : (
            Todo.map((item) => (
              <article
                key={item.id}
                style={{
                  width: "100%",
                  height: "max-content",
                  display: "grid",
                  gridTemplateColumns: "20% 60% 20%",
                  alignItems: "center",
                  gap: "0.2rem",
                  fontSize: "0.9rem",
                  background: "#f1f1f1",
                  borderRadius: "0.5rem",
                  padding: "0 0.3rem",
                }}
              >
                <div>{item.title} :</div>
                <div
                  style={{
                    padding: "0.5 0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.details.substring(0, 40)}
                </div>
                <Box
                  sx={{
                    background: "#e7e7e7",
                    borderRadius: "0.5rem",
                    padding: "0.3rem 0",
                    display: "flex",
                    alignItems: "center",
                    width: "max-content",
                    height: "100%",
                    justifySelf: "flex-end",
                  }}
                >
                  <Tooltip title="Edit Todo" placement="bottom" arrow>
                    <IconButton
                      aria-label="edit"
                      onClick={() => openModal(item?.id)}
                    >
                      <EditIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Todo" placement="bottom" arrow>
                    <IconButton
                      aria-label="delete"
                      onClick={() => dispatch(deleteTodo(item.id))}
                    >
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </article>
            ))
          )}
        </Box>
      </Box>
      <AddTodo open={open} handleClose={handleClose} />
      <EditTodo
        openEditModal={openEditModal}
        closeModal={closeModal}
        id={currentItem}
      />
    </Box>
  );
};

export default Home;
