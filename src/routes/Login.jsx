import * as React from 'react';
import { Button, Box, Container, Stack, TextField, Typography } from '@mui/material';
import ButtonBackToMainPage from './ButtonBackToMainPage';

function Login() {
  return (
    <Box>
      <ButtonBackToMainPage/>
      <Container
      sx={{
        marginTop: "227px",
        marginBottom: "60px",
        width: 480,
    }}>

       <Stack gap={"41px"}>
        <Typography
          variant='h5'
          textAlign="center"
          >Вход</Typography>

        <form 
          action='submit'
          style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            gap: "41px"
          }}>

        <TextField label="Почта" type='email' size='small' fullWidth variant='outlined'></TextField>
        <TextField label="Пароль" type='password' size='small' fullWidth variant='outlined'></TextField>
        
        <Button
        variant='contained'
        color='inherit'
        size='large' 
        sx={{
          height: 40,
          width: 200,
          textTransform: 'none',
         }}>Войти</Button>

          </form> 
       </Stack>
      </Container>
    </Box>



 
  )
}

export default Login;