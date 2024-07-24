import * as React from 'react';
import { Typography } from '@mui/material';
import Athena from '../images/Athena.jpg';
import GoodWillHunting from '../images/GoodWillHunting.jpg';
import PortraitOfALadyOnFire from '../images/PortraitOfALadyOnFire.jpg';
import TheGrandBudapestHotel from '../images/TheGrandBudapestHotel.jpg';

import '../stylesheets/Deepdive.css'

export default function Deepdive() {

    return(
        <div id="deepdiveBackground">
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p id='ddIntro' className='oleo-script-bold' style={{fontSize:26, textAlign:'center', width:600}}>
                    "That's my question! I still don't understand the play."
                    "Doesn't matter. Just keep telling the story.
                    You're doing him right."
                </p>
            </div>
            <p style={{color:"white", textAlign:'center', fontSize:30}}>
                ---------------------------
                ---------------------------
                ---------------------------
            </p>
            <div id="topFour">
                <div class="filmLeft">
                    <img src={Athena} alt="Athena Poster" class="topFourPoster" style={{marginRight: '10px'}}/>
                    <div class="filmText">
                        <Typography variant="h3" gutterBottom> Athena (2022) dir. Romain Gavras</Typography>
                        <Typography variant="h5">
                            I think one of the trends that I thoroughly enjoyed for no particular reason in this past decade or so 
                            are the scenes that are entirely one take which showcases the production and acting in a scene really well
                            and is one of the reasons I really liked this movie. If there's one thing that I particularly enjoy out of movies
                            it's that righteous vengeance and this has got that in spades towards the end. 
                        </Typography>
                    </div>
                </div>
                <div class="filmRight">
                    <div class="filmText">
                        <Typography variant="h3" gutterBottom style={{marginRight: '15px'}}> Good Will Hunting (1997) dir. Gus van Sant</Typography>
                        <Typography variant="h5"  gutterBottom>
                            Out of all the films I talk about in this section I have too much attachment to this one. Partially because I wish I was 
                            in any way more like Will and had the life he lives in this movie and partially because this was one of the earliest ones
                            I watched when I got into watching movies. It's genuinely one of my comfort films and one of the largest reasons is because
                            I love watching people become better and do better because they want and seek out a life they desire and not to mention the 
                            movie has Robin Williams be a therapist for Will who wouldn't want that?
                        </Typography>
                    </div>
                    <img src={GoodWillHunting} alt="Good Will Hunting Poster" class="topFourPoster"/>
                </div>
                <div class="filmLeft">
                    <img src={PortraitOfALadyOnFire} alt="Portrait of a Lady on Fire Poster" class="topFourPoster"style={{marginRight:'10px'}}/>
                    <div class="filmText">
                        <Typography variant="h3" gutterBottom> Portrait of a Lady on Fire (2019) dir. Céline Sciamma</Typography>
                        <Typography variant="h5" gutterBottom>
                            This is an interesting one because I don't speak French and the entirety of my comprehension of the movie 
                            comes from subtitles and what I learn through my perception of it and man is it breathtaking nonetheless.
                            First of all the movie is beautiful and gorgeous and even though it's got three characters for the majority
                            of it you grow to root for them and care deeply about their lives. I love Marianne and Héloïse's relationship
                            and the ending is one of my favourite endings of all time without having to pull an elaborate stunt to make it
                            memorable.
                        </Typography>
                    </div>
                </div>
                <div class="filmRight">
                    <div class="filmText">
                        <Typography variant="h3" gutterBottom> The Grand Budapest Hotel (2014) dir. Wes Anderson</Typography>
                        <Typography variant="h5" gutterBottom> 
                            This movie has had it's praises sung since it premiered and a horde of people before me have spoken
                            on why this movie is so good and what about it is amazing but I'll focus on what I enjoyed and that's 
                            the level of levity and fun it has. A movie about two hotel workers doesn't sound that interesting but 
                            it is! And they go through a lot and they grow together and while it's certainly outlandish it still 
                            feels human and real and that's what sticks.

                        </Typography>
                    </div>
                    <img src={TheGrandBudapestHotel} alt="The Grand Budapest Hotel Poster" class="topFourPoster"/>
                </div>
            </div>
        </div>
    )
}