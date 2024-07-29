import {Typography } from "@mui/material"
import '../stylesheets/About.css'

export default function About() {
    return(
        <div className="aboutBackground">
            <div id="homepageContainer">
                <Typography
                    variant="h5"
                    component="a"
                    maxWidth="xl"
                    sx={{
                    display: { xs: 'none', md: 'flex' , justifyContent: "center"},
                    fontFamily: '"Lucida Grande", sans-serif',
                    fontWeight: 'bold',
                    fontSize:90,
                    letterSpacing: '.4rem',
                    }}
                >
                    The Beginning
                </Typography>
                <Typography
                    variant="h6"
                    component="a"
                    maxWidth="xl"
                    className="beginText"
                >
                    Hello! First and foremost I'm Gio and this is my website to basically display information about me 
                    that's both helpful and unhelpful in varying quantities. 
                </Typography>
                <br/>
                <br/>
                <Typography
                    variant="h6"
                    component="a"
                    maxWidth="xl"
                    className="beginText"
                >
                    Hopefully this looks good when the final product comes out and I get to put more stuff here that isn't
                    just random words because this has to be meaningful text at the end product
                </Typography>

            </div>
        </div>
    )
}