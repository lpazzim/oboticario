import React, { useEffect, useState } from 'react';
import './User.scss';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BoticarioServices from '../../utils/services';

function User() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [valid, setValid] = useState(false);


  const history = useHistory();

  useEffect(() => {
    if (valid) {
      handleSubmit();
    }
  }, [valid]);

  function handleSubmit() {
    BoticarioServices.postUser(user).then(() => {
      history.push('/products');
    })
      .catch((error) => {
        return error;
      });
  }

  function validateFields() {
    if (user) {
      if (!user.name) {
        setError('O campo nome é obrigatório!');
        return false;
      }
      if (!user.cpf) {
        setError('O campo cpf é obrigatório!');
        return false;
      }
      if (!user.email) {
        setError('O campo email é obrigatório!');
        return false;
      }
      if (!user.senha) {
        setError('O campo senha é obrigatório!');
        return false;
      }

      if (!error) {
        setValid(true);
      }
    } else {
      setError('Preencha as informações para salvar!');
    }
  }

  return (
    <section className="user">
      <div className="user-form">
        <h3>Cadastro de usuário</h3>
        <div className="name">
          <TextField fullWidth id="nome" label="Nome" onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          } />
        </div>
        <div className="form-row">
          <div className="cpf">
            <TextField id="cpf" label="CPF" onChange={(e) =>
              setUser({ ...user, cpf: e.target.value })
            } />
          </div>
          <div className="email">
            <TextField id="email" label="e-mail" onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            } />
          </div>
        </div>
        <div className="form-row">
          <div className="password">
            <TextField id="password" label="Senha" type="password" onChange={(e) =>
              setUser({ ...user, senha: e.target.value })
            } />
          </div>
          <div className="confirm-password">
            <TextField id="confirm-password" label="Confirmar Senha" type="password" onChange={(e) =>
              setConfirmPassword(e.target.value)
            } />
          </div>
        </div>
        <div className="form-footer">
          <div className="user-button">
            <Button variant="outlined" color="primary" onClick={() => history.push('/')}>Cancelar</Button>
          </div>
          <div className="user-button">
            <Button variant="outlined" color="primary" onClick={() => {
              validateFields();
            }}>Salvar</Button>
          </div>
        </div>
        <div className="error-message">
          {error ?
            <p>{`*${error}`} </p> : null
          }
        </div>
      </div>
    </section>
  );
}

export default User;
