import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Box, 
  Typography, 
  Button, 
  Container,
  CssBaseline,
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bg from '../images/bg.png'; // Fixed import statement

const theme = createTheme({
  palette: {
    primary: {
      main: '#5a51d6',
    },
    secondary: {
      main: '#d65158',
    },
  },
});

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container 
        maxWidth={false}
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${bg})`, // Fixed template literal syntax
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Paper 
            elevation={6}
            sx={{
              p: 4,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              borderRadius: 4,
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 600,
                textAlign: 'center',
                mb: 4
              }}
            >
              Woxsen University
            </Typography>

            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{ mb: 4 }}
            >
              <Tab label="Faculty" sx={{ fontWeight: 'bold' }} />
              <Tab label="Student" sx={{ fontWeight: 'bold' }} />
            </Tabs>

            {activeTab === 0 ? (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Faculty Login
                </Typography>
                <Button
                  component={Link}
                  to="/login/facultylogin"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: '1.125rem',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  Continue as Faculty
                </Button>
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Student Login
                </Typography>
                <Button
                  component={Link}
                  to="/login/studentlogin"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: '1.125rem',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  Continue as Student
                </Button>
              </Box>
            )}
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;