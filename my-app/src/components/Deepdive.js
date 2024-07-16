import * as React from 'react';
import { Typography } from '@mui/material';

import '../stylesheets/Deepdive.css'

export default function Deepdive() {

    return(
        <div id="deepdiveBackground">
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p id='ddIntro' className='oleo-script-bold' style={{fontSize:30, textAlign:'center', width:600}}>
                    "Somebody come get this man a hobby that isn't media consumption or else
                    he's going to be addicted to screens for the rest of his life"
                </p>
            </div>
            <p style={{color:"white", textAlign:'center', fontSize:30}}>
                ---------------------------
                ---------------------------
                ---------------------------
            </p>
        </div>
    )
}