import { Button, Box, Container, Stack, TextField, Typography } from '@mui/material';
import ButtonBackToMainPage from '../components/ButtonBackToMainPage'

function Registration() {
    return (
        <Box>
            <ButtonBackToMainPage/>
            <Container
                sx={{
                    marginTop: "67px",
                    marginBottom: "60px",
                    width: 480,
                }}
            >
                <Stack gap={"41px"}>
                    <Typography
                        variant='h5'
                        textAlign="center"
                    >Регистрация</Typography>
                    <form 
                        action="submit"
                        style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "41px"
                        }}
                    >
                        <TextField label="Имя" size='small' fullWidth variant='outlined'></TextField>
                        <TextField label="Фамилия" size='small' fullWidth variant='outlined'></TextField>
                        <TextField label="Отчество" size='small' fullWidth variant='outlined'></TextField>
                        <TextField label="Номер телефона" type='tel' size='small' fullWidth variant='outlined'></TextField>
                        <TextField label="Почта" type='email' size='small' fullWidth variant='outlined'></TextField>
                        <TextField label="Пароль" type='password' size='small' fullWidth variant='outlined'></TextField>
                        <Button 
                            sx={{
                                height: 40,
                                width: 200,
                                background: "#E0E0E0",
                                color: "black",
                                textTransform: 'none',
                                "&:hover": {
                                    color: "white"
                                }
                            }} 
                            size='large' 
                            variant='contained'
                        >Зарегистрироваться</Button>
                    </form>
                </Stack>
            </Container>
        </Box>
    )
}

export default Registration