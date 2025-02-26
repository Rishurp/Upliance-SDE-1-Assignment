import { Link as RouterLink } from "react-router-dom";
import { Box, Stack, Link, Button } from "@mui/material";
import { useAuth } from "../AuthContext";
import { auth } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Navbar = () => {
  const { currentUser } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#5F4C4C",
        px: 3,
        py: 2,
        mb: 4,
        position: "fixed",
        width: "100%",
        zIndex: 9999,
        top: 0,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack 
        direction="row" 
        spacing={2} 
        alignItems="center" 
        flexWrap="wrap" 
      >
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Home
        </Link>
        {currentUser && (
          <>
            <Link
              component={RouterLink}
              to="/form"
              underline="none"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              User Form
            </Link>
            <Link
              component={RouterLink}
              to="/editor"
              underline="none"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Editor
            </Link>
            <Button
              onClick={handleSignOut}
              sx={{
                color: "#fff",
                backgroundColor: "#941313",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "red" },
                ml: "auto", 
              }}
            >
              Sign Out
            </Button>
          </>
        )}
        {!currentUser && (
          <Box
            sx={{
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={handleGoogleSignIn}
          >
            Sign In
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Navbar;
