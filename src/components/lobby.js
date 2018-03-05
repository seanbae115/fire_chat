import React, { Component } from 'react';
import {connect} from 'react-redux'
import {db} from '../firebase';
import {getRoomList, createRoom} from '../actions';


class Lobby extends Component {
    constructor(props){
        super(props);

        this.state = {
            roomName: ''
        };
    }
    componentDidMount(){
        db.ref('/chat-rooms').on('value', snapshot => {
            this.props.getRoomList(snapshot.val());
        });
    }

    handleCreateRoom(e){
        e.preventDefault();

        this.props.createRoom(this.state.roomName);

        this.setState({roomName: ''});
    }

    render(){
        const { roomName } = this.state
        const { roomList } = this.props
        let rooms = [];

        if(roomList){
            rooms = Object.keys(roomList).map((key, index) => {
                return <li key={index} className="collection-item">{roomList[key].name}</li>
            })
        } else {
            rooms.push(<li key="0" className="collection-itme">No rooms available. Create one above.</li>)
        }
        

        return(
            <div>
                <h3>Chat Lobby</h3>
                <form onSubmit={this.handleCreateRoom.bind(this)}>
                    <label>Chat Room Name</label>
                    <input type="text" onChange={e => this.setState({roomName: e.target.value})} value={roomName}/>
                    <button>Create Room</button>
                </form>
                <ul className="collection">
                    {rooms}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        roomList: state.chat.roomList
    }
}

export default connect(mapStateToProps, {getRoomList, createRoom})(Lobby);