import Button from '@mui/material/Button';
import '../stylesheets/Homepage.css';
import TopBar from './Topbar.js';
import Startup from './StartupPage.js';

export default function HomePage() {


    return(
        <>
            <div className="homeContainer">
                <TopBar/>
                <Startup/>
            </div>
        </>
    )
}