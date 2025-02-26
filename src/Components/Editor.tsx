import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography } from "@mui/material";

const LOCAL_STORAGE_KEY = "richTextData";

const Editor: React.FC = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Rich Text Editor
      </Typography>
      <ReactQuill theme="snow" value={content} onChange={handleChange} />
    </Box>
  );
};

export default Editor;
