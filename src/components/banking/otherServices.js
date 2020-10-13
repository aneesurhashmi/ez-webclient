import React from "react"

import mainimage from "../../images/otherservices-main.jpg"
import ApartmentIcon from '@material-ui/icons/Apartment';

import fbicon from "../../images/fb.png"
import instagramicon from "../../images/insta.png"
import twittericon from "../../images/twitter.png"
import yticon from "../../images/yt.png"
import googleicon from "../../images/google.png"


export default function OtherServices() {

    return (
        <div className="otherservices-container">
            <div>
                <h1>Other Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div id="otherservices-mainimage">
                <img src={mainimage} />
                <div>
                    <div></div>
                    <div>
                        <h2>
                            02: Site Map
                    </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el.</p>

                    </div>


                </div>
            </div>
            <div className="cards-container" style={{ "padding": "5px" }}>
                <div className="card" >
                    <ApartmentIcon />
                    <h2>02 Site Map</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el. </p>
                </div>
                <div className="card">
                    <ApartmentIcon />
                    <h2>02 Site Map</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el. </p>
                </div>
                <div className="card">
                    <ApartmentIcon />
                    <h2>02 Site Map</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing el. Lorem ipsum dolor sit amet, consectetur adipiscing el. </p>
                </div>
            </div>

            <footer>
                {/* <InstagramFilled /> */}
                {/* <InstagramOutlined /> */}

                <div>
                    <img src={fbicon} />
                    <img src={instagramicon} />
                    <img src={twittericon} />
                    <img src={yticon} />
                    <img src={googleicon} />

                </div>
                <p>All Right Reserved. &copy; Copyrights 2020 Ezee Housing</p>
            </footer>
        </div>
    )
}