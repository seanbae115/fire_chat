import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import ChatRoom from './chat_room'
import Lobby from './lobby'

const App = () => (
    <div className="container">
        <h1 className="center-align">Fire 🔥 Chat</h1>

        <Route exact path="/" component={Lobby}/>
        <Route exact path="/room/:roomId/log/:logId" component={ChatRoom}/>

    </div>
);

export default App;
