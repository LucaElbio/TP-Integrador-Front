import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/login";
import { useUser } from "../context/UserContext";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  borderRadius: theme.shape.borderRadius,
  animation: "float 3s ease-in-out infinite",
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
    "100%": { transform: "translateY(0px)" },
  },
}));

export const Login = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // post to login endpoint with email and password
    postLogin({ email, password })
      .then(({ data }) => {
        setUser({ id: data.id, name: data.name });
        navigate("/movies");
      })
      .catch(({response}) => {
        alert(response.data.message);
      });
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <StyledPaper>
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
        </Box>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleInputChange(setEmail)}
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={handleInputChange(setPassword)}
          variant="outlined"
        />
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </StyledPaper>
    </Grid>
  );
};
