import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    signUp = event => {
        event.preventDefault();
        const {username, password} = this.state;

        axios
        .post('http://localhost:5000/api/login', {username, password})
        .then((response) => {
            this.setState({login: response.data, username:'', password:''})
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <form>
                <input 
                    onChange={this.handleInput}
                    placeholder="username"
                    value={this.username}
                    name="username"
                />
                 <input 
                    onChange={this.handleInput}
                    placeholder="Password"
                    value={this.password}
                    name="password"
                />
                <button onSubmit={this.signUp}></button>
                </form>
            </div>
        )
    }
}

export default Login