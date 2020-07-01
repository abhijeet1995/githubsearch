import React, {Fragment, useState} from "react";
import Axios from "axios";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

let GithubAPI = () => {
    const [username , setUsername] = useState('');
    const [profile , setProfile] = useState({});
    const [repos , setRepos] = useState([]);
    

    const searchUser = (e) => {
        e.preventDefault();
        fetchProfile();
        fetchRepos();
    };

    // fetch Profile
    const fetchProfile = () => {
        let dataURL = `https://api.github.com/users/${username}?clientId=${process.env.clientId}&clientSecret=${process.env.clientSecret}`
        Axios.get(dataURL).then((response) => {
            setProfile(response.data);
        }).catch((err) => {
            console.error(err);
        });
    };

    // fetch Repos
    const fetchRepos = () => {
        let dataURL = `https://api.github.com/users/${username}/repos?clientId=${process.env.clientId}&clientSecret=${process.env.clientSecret}`
        Axios.get(dataURL).then((response) => {
            setRepos(response.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    return(
        <Fragment>
        {/*    <pre>{JSON.stringify({username , profile , repos})}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <h3>Github User Search</h3>
                            </div>
                            <div className="card-body">
                                <form className="form-inline" onSubmit={searchUser}>
                                    <div className="form-group">
                                        <input
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            size="40"
                                            type="text"
                                            className="form-control" placeholder="Search a User"/>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-secondary btn-sm" value="Search" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(profile).length > 0 ?
                                <GithubProfile profile={profile}/>  : null
                        }
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        {
                            repos.length > 0 ?
                                <GithubRepos repos={repos}/>  : null
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    );
};
export default GithubAPI;