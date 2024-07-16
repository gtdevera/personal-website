import { Tooltip, Typography } from "@mui/material"
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
                    sx={{
                    display: { xs: 'none', md: 'flex' , justifyContent: "center"},
                    fontFamily: '"Lucida Grande", sans-serif',
                    fontSize:30,
                    letterSpacing: '.2rem',
                    }}
                >
                    My name is Gorgonzola and I'm making this website as a way of showcasing I can make things
                    and be able to code it without having the intention of fulfilling a school project.
                    There's also more things I would like to display and I've got inspiration from the few 
                    personal websites of what I'm aiming for in terms of quality and content. 
                </Typography>
                <br/>
                <Typography
                    variant="h6"
                    component="a"
                    maxWidth="xl"
                    sx={{
                    display: { xs: 'none', md: 'flex' , justifyContent: "center"},
                    fontFamily: '"Lucida Grande", sans-serif',
                    fontSize:30,
                    letterSpacing: '.2rem',
                    }}
                >
                    Anyways I want to yap more just to see how the text fits on the page.
                    I'm trying to figure out how to make spaces in between these paragraphs beacuse I 
                    don't want it just be one massive paragraph lol
                </Typography>

            </div>
        </div>
    )
}