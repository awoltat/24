import React, {useState, useEffect} from "react";
import './Main.css';
import UserCards from "../UserCards/UserCards";
import UserAlbums from "../UserAlbums/UserAlbums";
import UserPhotos from "../UserPhotos/UserPhotos";
import {Route, Switch} from "react-router-dom";
import axios from "axios";

const Main = ({pageName}) => {
    const [data, setData] = useState({
        users: [],
        albums: [],
        photos: [],

    });


    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/users');
                const responseP = await axios.get('http://jsonplaceholder.typicode.com/photos');
                const responseA = await axios.get('http://jsonplaceholder.typicode.com/albums');
                setData({
                    users: response.data,
                    albums: responseA.data,
                    photos: responseP.data,
                });
            } catch (e) {
                console.log(e);
            }
        };
        fetchCards();
    }, []);

    return (
        <section className='main-container'>
            <Switch>
                <Route path="/users" render={(props) => <UserCards {...props} data={data.users}/>}/>
                <Route path="/albums" render={(props) => <UserAlbums {...props} data={data.albums}/>}/>
                <Route path="/photos" render={(props) => <UserPhotos {...props} data={data.photos}/>}/>
            </Switch>
        </section>
    );
};

export default Main;