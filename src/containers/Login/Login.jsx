import React from 'react';
import './Login.scss';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Login() {
  const history = useHistory();

  return (
    <section className="login">
      <div className="login-form">
        <div className="login-body" >
          <div className="email">
            <TextField fullWidth id="email" label="e-mail" />
          </div>
          <div className="password">
            <TextField fullWidth type="password" id="password" label="senha" />
          </div>
        </div>
        <div className="login-footer">
          <Button variant="outlined" color="primary" fullWidth onClick={() => history.push('/products')}> Entrar </Button>
          <div>
            <span>Você ainda não tem uma conta? </span>
            <a href="#/user">Cadastrar-se</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;