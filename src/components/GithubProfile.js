import React, {Fragment} from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile = (props) => {
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            // to check an object is empty
                            Object.keys(props).length !== 0 ?
                                <GithubProfileCard profile={props.profile}/> : null
                        }
                    </div>
                    <div className="col-md-9">
                        {
                            // to check an object is empty
                            Object.keys(props).length !== 0 ?
                                <GithubProfileDetails profile={props.profile}/> : null
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default GithubProfile;