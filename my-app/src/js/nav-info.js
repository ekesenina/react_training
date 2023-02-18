import React from "react";
import { withRouter } from "react-router-dom";

const ShowLocationInfo = ({watch, location, history}) => 
    <div>You are now at "{location.pathname}"</div>

const ShowLocationInfoWithRouter = withRouter(ShowLocationInfo)

export default ShowLocationInfoWithRouter;