import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import LoginView from './view';
import * as actions from '../../actions/index';
import store from '../../store';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            loading:false,
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSetField = this.handleSetField.bind(this);
    }
    
    handleSetField = name => event => {
        this.setState({
        [name]: event.target.value
        
    })
    console.log("anu",event.target.value);
    
    };

    performLogin = async (email, password) => {
        const value = await this.props.login({
          variables: { email, password },
        });
    
        return value.data.login;
      };
    
      handleLogin = async () => {
        const { email, password } = this.state;
        
        try {
          this.setState({
            loading: true,
            error: '',
          });
    
          let message;
            const { error, token } = await this.performLogin(email, password);
    
            if (token) {
              store.dispatch(actions.setToken(token));
    
              this.props.onRedirectEnabled(true);
    
              this.setState({
                loading: false,
              });
    
              return;
            }
    
            switch (error) {
              case 'ERROR_USER_NOT_FOUND':
                message = 'Invalid login credentials';
                break;
              case 'ERROR_NOT_VALID_PHONE_NUMBER':
                message = 'Invalid phone number provided';
                break;
              case 'INTERNAL_SERVER_ERROR':
                message = 'Internal server error';
                break;
              default:
                message = 'Unknown error';
                break;
            }
          
    
          this.setState({
            error: message,
            loading: false,
          });
        } catch (error) {
          this.setState({
            error: error.message,
            loading: false,
          });
        }
      };

    render(){
        return(
            <LoginView {...this.setState} onSetField={this.handleSetField} onLogin={this.handleLogin} />
            
        ) 
    }
}

const login = gql`
  mutation($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`;

export default graphql(login, { name: 'login' })(Login);