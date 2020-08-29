import React from 'react';
import './Login.scss';
import Grid from '@material-ui/core/Grid';
import { Button, TextField } from '@material-ui/core';


export default function Login() {
  return (
    <div className="login">
      <Grid container className="login-form">
        <Grid item xs={12} className="login-body">
          <Grid item xs={12} className="login-body">
            <TextField id="email" label="e-mail" className="text-field" />
          </Grid>
          <Grid item xs={12} className="login-body">
            <TextField id="password" label="senha" className="text-field" />
          </Grid>
        </Grid>
        <Grid item xs={12} className="login-footer">
          <Button> Cancelar </Button>
          <Button> Login </Button>
        </Grid>
      </Grid>
    </div>
  );
}
