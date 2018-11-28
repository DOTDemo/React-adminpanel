import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import store from './store';
import './index.css';
import App from './App';

const client = new ApolloClient({
    uri: "https://api.graph.cool/simple/v1/cjp12eu1p7sqg0185o5za8ft7"
});

const customtheme = createMuiTheme({

    
    overrides: {
      MuiTypography: {
        colorTextPrimary: {
          color: 'white',
        },
      },
    },
  
  });

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <MuiThemeProvider theme={customtheme}>
                <App />
            </MuiThemeProvider>
        </ApolloProvider>
    </Provider>
, document.getElementById('root'));
