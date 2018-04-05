import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoomData } from '../actions';

class ChatRoom extends Component {
    componentDidMount(){
        const { roomId, logId } = this.props.match.params;

        this.props.getRoomData(roomId, logId);
    }
    
    render(){
        console.log('Chat Info:', this.props.match.params)
        const { name } = this.props.roomInfo;

        return (
            <div>
                <h3>{name ? name : 'Loading...'}</h3>
            </div>
        )
    }
}

function mstp(state){
    return {
        roomInfo: state.chat.currentRoom
    }
}

export default connect(mstp, {getRoomData})(ChatRoom);
