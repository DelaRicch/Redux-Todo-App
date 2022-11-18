import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";

import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";

const SearchTodo = () => {
  //   Getting todos from redux store
  const Todo = useSelector((state) => state.todo);

  //   Display search content
  const [displayContent, setDisplayContent] = useState(false);
  const handleShow = () => setDisplayContent(true);
  const handleHide = () => setDisplayContent(false);

  const [searchItems, setSearchItems] = useState("");
  const handleChange = (e) => {
    setSearchItems(e.target.value);
  };

  const searchResult = Todo.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchItems.toLowerCase()) ||
      item.details.toLowerCase().includes(searchItems.toLowerCase())
    );
  });

  return (
    <>
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
          onFocus={handleShow}
          onBlur={handleHide}
          value={searchItems}
          onChange={handleChange}
        />
        <Tooltip title="Add Todo" placement="top" arrow>
          <IconButton sx={{ fontSize: "2rem" }}>
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
          display: displayContent ? "flex" : "none",
          flexDirection: "column",
          gap: "1rem",
          position: "absolute",
          zIndex: "90",
          background: "#ffffff",
          bottom: "3.5rem",
        }}
      >
        {searchResult.map((item) => (
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
            ></Box>
          </article>
        ))}
      </Box>
    </>
  );
};

export default SearchTodo;
