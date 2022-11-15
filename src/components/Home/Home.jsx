import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";
import AddTodo from "../Add/AddTodo";

import { IoMdAdd } from "react-icons/io";
import Todo from "../../data";

const Home = () => {
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
          width: "40rem",
          height: "max-content",
          padding: "2rem",
          border: "1px solid #c4ecff",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            maxWidth: "30rem",
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
          <Tooltip title="Add Todo" placement="bottom" arrow>
            <IconButton sx={{ fontSize: "2rem" }}>
              <IoMdAdd />
            </IconButton>
          </Tooltip>
        </Box>

        <Box
          component="section"
          sx={{
            maxWidth: "30rem",
            height: "max-content",
            marginInline: "auto",
            borderRadius: "0.5rem",
            boxShadow: "3px 3px 7px 2px rgba(0,26,255,0.2)",
            padding: "2rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          {Todo.map((item) => (
            <article
              key={item.id}
              style={{
                width: "100%",
                height: "max-content",
              }}
            >
              rtteterte
            </article>
          ))}
        </Box>
      </Box>
      {/* <AddTodo /> */}
    </Box>
  );
};

export default Home;
