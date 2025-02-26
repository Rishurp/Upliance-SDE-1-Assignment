import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; 
import { TextField, Button, Box, Typography } from "@mui/material";

const LOCAL_STORAGE_KEY = "userData";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(), 
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isDirty, setIsDirty] = useState(false); 


  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY); 
    if (savedData) {
      setFormData(JSON.parse(savedData)); 
    }
  }, []); 



  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    setIsDirty(false);
    alert("User data saved successfully!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>User Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Address" name="address" value={formData.address} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
