import "../stylesheets/Projects.css"
import SampleImage from "../images/AboutPhotos/PortoSunset.png"
import SecondSample from "../images/AboutPhotos/MonacoView.png"
import { Paper, Typography } from "@mui/material"

export default function Projects(){
    return(
        <div class="projectBackground">
            <Paper elevation={3} class="projectPaper">
                <img src={SampleImage} alt="Sample" style={{marginRight: '10px', maxWidth:'40%'}}/>
                <Typography class="projectDescription">
                    Text that would explain the project and other various details surrounding what I did
                </Typography>
            </Paper>
            <Paper elevation={3} class="projectPaper">
                <img src={SecondSample} alt="More Samples" style={{marginRight:'10px', maxWidth:'40%'}}/>
                <Typography class="projectDescription">
                    More text for another project that I would describe
                </Typography>
            </Paper>
        </div>
    )
}