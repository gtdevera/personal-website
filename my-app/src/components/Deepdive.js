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
                    <img src={Athena} alt="Athena Poster" style={{maxWidth:'20%', height: 'auto'}}/>
                    <Typography> You are alive</Typography>
                </div>
                <div class="filmRight">
                    <img src={GoodWillHunting} alt="Good Will Hunting Poster" style={{maxWidth:'20%', height:'auto'}}/>
                </div>
                <div class="filmLeft">
                    <img src={PortraitOfALadyOnFire} alt="Portrait of a Lady on Fire Poster" style={{maxWidth:'20%', height: 'auto'}}/>
                </div>
                <div class="filmRight">
                    <img src={TheGrandBudapestHotel} alt="The Grand Budapest Hotel Poster" style={{maxWidth:'20%', height: 'auto'}}/>
                </div>
            </div>
        </div>
    )
}