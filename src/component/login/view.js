import React from 'react';
import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import TextField from '../form/component/textfield';
import Button from '../form/component/button';

const Wrapper = styled.div`
  display: flex;
  margin:10;
  padding:20
  flex: 1;
  min-height: 100vh;
  align-items: center;
`;

const Form = styled.form`
  max-width: 420px;
  padding: 30px;
  margin: 30px auto;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

const textInput = {
  width: '100%',
  margin: 50,
};

const LoginView = ({ email, onLogin, onSetField, password }) => {
  return (
    <Wrapper>
      <Form onSubmit={onLogin}>
        <CardContent style={{ background: '#3f51b5' }}>
          <Typography variant="h5" color="textPrimary" >
                Dashboard Login
          </Typography>
        </CardContent>
        <TextField
          label={'Email'}
          value={email}
          onChange={val => onSetField('email', val)}
          style={textInput}
        />
        <TextField
          type="password"
          label={'Password'}
          value={password}
          onChange={val => onSetField('password', val)}
          style={textInput}
        /><br/>
        <Button onClick={onLogin} label={'Login'}/><br/>  
        <Link to="/signup">Create New Account</Link><br/>
        {/* {error && <Error>{error}</Error>} */}
        <Link to="/forget">Forgot Password</Link>
      </Form>
      
    </Wrapper>
  );
};

export default LoginView;
