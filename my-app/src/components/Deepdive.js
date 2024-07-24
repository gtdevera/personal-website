import * as React from 'react';
import { Typography } from '@mui/material';

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

            </div>
        </div>
    )
}