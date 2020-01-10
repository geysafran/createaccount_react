
import React from "react";
import ".././App.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: {
        nome: [],
        email: [],
        password: [],
        password2: []
      }
    };
  }

  render() {
    return (
      <form
        onSubmit={ev => {
          ev.preventDefault();
          this.props.handleSetState("login");
        }}
      >
        <label>
          Nome:
          <input
            type="text"
            placeholder="Nome"
            onChange={ev =>
              this.setState({
                name: ev.target.value
              })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            onChange={ev =>
              this.setState({
                email: ev.target.value
              })
            }
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            placeholder="Senha"
            onChange={ev =>
              this.setState({
                password: ev.target.value
              })
            }
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            onChange={ev =>
              this.setState({
                password2: ev.target.value
              })
            }
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default Signup;