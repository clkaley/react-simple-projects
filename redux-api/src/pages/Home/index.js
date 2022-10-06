import React from "react";
import {Helmet} from "react-helmet";
function Home() {

  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Breaking Bad</title>
               
            </Helmet>
      <div className="container mt-5">
        <div className="row">
           <h1 className="text-center">Breaking Bad API with redux</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
