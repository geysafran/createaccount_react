import React, { Component } from 'react';
import './App.css';

import Login from './component/Login';
import Timers from './components/Timers';
import Signup from './components/Signup';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'signup',
            user: {
                name: '',
                email: '',
                password: '',
            },
        }
    }

criarConta = (name, email, password) => {
    this.setState({
        user: {
            name: name,
            email: email,
            password: password,
        },
        currentScreen: 'login',
    });
}

clickCriarConta (screen) => {
    this.setState ({
        currentScreen: screen;
    })

}

comparacao = (email, password) => {
    console.log(email === this.state.user.email)
    console.log(password === this.state.user.password)

    if (email === this.state.user.email && this.state.user.password === password){
        return this.setState({
            currentScreen: screen;
        })
    }

}

renderScreen = () => {
    switch(this.state.currentScreen) {
        case 'timers':
            return <Timers />;
        case 'signup':
            return <Signup criarConta={this.criarConta} />
        case 'login':
            default:
                return <Login comparacao={this.comparacao} />;
    }
}

render(){
    return (
        <div>
            {this.renderScreen()}
        </div>
    )
}
}

export default App;
