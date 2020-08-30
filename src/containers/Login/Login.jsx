import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BoticarioServices from '../../utils/services';


function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadUsers();
  }, []);


  function loadUsers() {
    BoticarioServices.getUsers().then((res) => {
      setUsers(res);
    })
      .catch((error) => {
        return error;
      });
  }

  function login() {

    if (users.find(e => e.email === email)) {
      const user = users.find(e => e.email === email);
      if (user.senha === password) {
        localStorage.setItem('userToken', 'logged');
        history.push('/products');
      } else {
        alert('usuario ou senha inválidos');
        return false;
      }
    } else {
      alert('usuario não encontrado');
      return false;
    }
  }

  return (
    <section className="login">
      <div className="login-form">
        <div className="login-body" >
          <div className="email">
            <TextField fullWidth id="email" label="e-mail" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="password">
            <TextField fullWidth type="password" id="password" label="senha" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className="login-footer">
          <Button variant="outlined" color="primary" fullWidth onClick={() => login()}> Entrar </Button>
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