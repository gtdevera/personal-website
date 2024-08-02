import {Typography, Container } from "@mui/material"

import '../stylesheets/About.css'
import MKHO from '../images/AboutPhotos/MarrakeshOutskirts.png'
import MNCV from '../images/AboutPhotos/MonacoView.png'
import PRTS from '../images/AboutPhotos/PortoSunset.png'
import CNBF from '../images/AboutPhotos/BridalFalls.png'

export default function About() {
    return(
        <div class="aboutBackground">
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
                <Container id="meBox">
                    <img src={CNBF} alt="Waterfall lit by sunlight" class="aboutPhoto"/>
                    <Typography
                        variant="h6"
                        component="a"
                        maxWidth="xl"
                        class="beginText"
                        sx={{
                            marginLeft:'2%'
                            }}
                    >
                        This is my website to basically display information about me 
                        that's both helpful and unhelpful in varying quantities but will give you
                        a decent idea of who I am as a person and the skills I have.
                        
                    </Typography>
                </Container>
                <br/>
                <br/>
                <Typography
                    variant="h6"
                    component="a"
                    maxWidth="xl"
                    class="beginText"
                >
                    I've got a couple hobbies though they get differing degrees of attention depending on what I'm
                    in the mood for. I'm into travelling (which you'll see a couple photos for here), watching movies
                    (my Letterboxd has an insane amount listed there), music (who isn't though), and occasionally 
                    read books and write on the side. 
                </Typography>
                <br/>
                <Container sx={{display:"flex", marginTop:"2%", marginBottom:"2%", justifyContent:"center", alignItems:"center"}}>
                    <img src={MNCV} alt="View of a bay of ships in a city" class="aboutPhoto"/>
                    <img src={PRTS} alt="Sunset atop a city" class="aboutPhoto"/>
                    <img src={MKHO} alt="Inside of a building in a desert" class="aboutPhoto"/> 
                </Container>
                <br/>
                <Typography
                    variant="h3"
                    maxWidth="xl"
                    class="beginText"
                >
                    In terms of programming I've got experience with Python, C, C++, Java, Frontend (HTML, CSS, Javascript), and
                    some Backend (Terraform). There's always something to learn for each of these languages like data processing,
                    making web-based apps, etc, and the Projects section highlights the ones I've worked on most recently.
                    
                </Typography>
            </div>
        </div>
    )
}