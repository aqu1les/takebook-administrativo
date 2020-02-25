import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from './style';

export default function Requests() {
    const user = useSelector(state => state.auth);
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState('');

    function sendMsg(e) {
        e.preventDefault();
        setMsg('');
    }
    function handleChange(e) {
        e.preventDefault();
        setMsg(e.target.value);
    }
    return (
        <Wrapper>
            <input onChange={handleChange} value={msg} />
            <ul>
                {messages.map((msg, i) => (
                    <li key={i}>
                        {msg.user} - {msg.msg}
                    </li>
                ))}
            </ul>
            <button onClick={sendMsg} disabled={!msg}>
                Send
            </button>
        </Wrapper>
    );
}

/*export default class Requests extends Component {
    state = {
        user: 2,
        msg: '',
        messages: []
    }
    socket = null;
    componentDidMount() {
        this.registerToSocket();
    }

    registerToSocket = () => {
        this.socket = io(`${SOCKET_URL}?user_id=${this.state.user}`);
        this.socket.on('msg', msg => {
            this.setState({ messages: [...this.state.messages, msg] });
        });
    }
    sendMsg = e => {
        e.preventDefault();
        this.socket.emit('send msg', { user: this.state.user, msg: this.state.msg });
        this.setState({ msg: '' });
    }
    render() {
        return (
            <Wrapper>
                <input onChange={e => this.setState({ msg: e.target.value })} value={this.state.msg} />
                <ul>
                    {this.state.messages.map((msg, i) => (
                        <li key={i}>{msg.user} - {msg.msg}</li>
                    ))}
                </ul>
                <button onClick={this.sendMsg} disabled={!this.state.msg}>Send</button>
            </Wrapper>
        );
    }
}

*/
