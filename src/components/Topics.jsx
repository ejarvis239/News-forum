import React from "react";
import "../App.css";
import { Link } from "@reach/router";

const Topics = () => {
        return (
            <div>
            <h1>News Topics</h1>
           
            <div id="TopicsContainer">
                <div id="Topic">
                    <h2>Coding</h2>
                    <Link to="/articles/coding" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/be/dd/ef/beddef99d59666201ae293bcc362ec97.jpg" alt="Coding" width="100" height="100" />      
                    </Link>
                </div>
                
                <div id="Topic">
                    <h2>Football</h2>
                    <Link to="/articles/football" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/9a/07/ab/9a07ab814238e792d99daba3a093b005.jpg" alt="Football" width="100" height="100" />  </Link>
                </div>

                <div id="Topic">
                    <h2>Cooking</h2>
                    <Link to="/articles/cooking" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/c2/eb/eb/c2ebeb96f22ff99135eef8e4c24bb730.jpg" alt="Cooking" width="100"  />  </Link>              
                </div>
                <div id="Topic">
                    <h2>Music</h2>
                    <Link to="/articles/music" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/4f/17/66/4f1766cd89d046f899a9480ada9be3aa.jpg" alt="Music" width="100"  />  </Link>              
                </div>
                <div id="Topic">
                    <h2>Movies</h2>
                    <Link to="/articles/movies" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/1a/6f/b1/1a6fb1a4aed5cc0d2a502628bae02352.jpg" alt="Music" width="100"  />  </Link>              
                </div>
                <div id="Topic">
                    <h2>All Articles</h2>
                    <Link to="/articles" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/4e/e8/9a/4ee89ab101a9f206e1ed6867df87dce5.jpg" alt="Music" width="100"  />  </Link>              
                </div>
            </div>
            </div>
        )
    }

export default Topics;