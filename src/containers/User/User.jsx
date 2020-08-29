import React from 'react';
import './User.scss';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function User() {
  const history = useHistory();

  return (
    <section className="user">
      <div className="user-form">
        <div>
          <TextField fullWidth id="nome" label="Nome" />
        </div>
        <div>
          <TextField id="cpf" label="CPF" />
          <TextField id="email" label="e-mail" />
        </div>
        <div>
          <TextField id="password" label="Senha" />
          <TextField id="confirm-password" label="Confirmar Senha" />
        </div>
        <div>
          <Button onClick={() => history.push('/')}>Cancelar</Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </section>
  );
}

export default User;
