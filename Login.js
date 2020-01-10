import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
        }
    }

changeEmail = (event) => {
    this.setState ({
        email: event.target.value,
    })
}
changeSenha = (event) => {
    this.setState ({
        senha: event.target.value,
    })
}
handleSubmit = (event) => {
   event.preventDefault();
   this.props.comparacao(this.state.email, this.state.senha)
    }

render(){
    return (
        <div className='div-login'>
            <form
        onSubmit={ev => {
          ev.preventDefault();
          this.props.handleSetState("timer");
        }}
      >
        <label>
          Email:
          <input
            type="email"
            placeholder="email@email.com"
            onChange={ev => this.setState({ email: ev.target.value })}
          />
        </label>
        <label>
          Senha:
          <input
            type="text"
            placeholder="Senha"
            onChange={ev => this.setState({ senha: ev.target.value })}
          />
        </label>
        <input type="submit" />
        {
          <button
            onClick={event => {
              event.preventDefault();
              this.props.handleSetState("signup");
            }}
          >
            Criar conta
          </button>
        }
      </form>
        </div>
    )
}
}

export default Login;