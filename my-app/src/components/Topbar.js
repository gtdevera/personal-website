import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

function handleClick(event) {
    console.info('You clicked a breadcrumb.');
}

const topBarTheme = createTheme({
    palette: {
        primary: {
            main: '#04a031'
        },
        secondary: {
            main: '#a00471',
        },
    },
});

function ResponsiveAppBar() {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/about" onClick={handleClick}>
          ABOUT
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/projects"
          onClick={handleClick}
        >
          PROJECTS
        </Link>,
        <Link key="3" color="text.primary" href="/deepdive" underline="hover" onClick={handleClick}>
          DEEPDIVE
        </Link>,
      ];

  return (
    <ThemeProvider theme={topBarTheme}>
        <AppBar position="sticky" color="primary">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Link variant="h5" href="/" color="text.primary" underline="none" marginRight={3}>
                    My Website
                </Link>
            <Stack spacing={2}>
                <Breadcrumbs separator="- -" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
