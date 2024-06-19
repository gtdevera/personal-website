import Typography from '@mui/material/Typography';
import '../stylesheets/Startup.css';

export default function Startup() {
    return(
        <div id="startUpContainer">
            <div id="startUp">
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: '"Lucida Grande", sans-serif',
                    fontWeight: 700,
                    fontSize:100,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    It's Me
                </Typography>
            </div>
        </div>
    )
}