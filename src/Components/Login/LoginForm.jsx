import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
    
    const username = useForm();
    const userpassword = useForm();

    const {userLogin, error, loading} = React.useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && userpassword.validate()) {
            userLogin(username.value, userpassword.value)
        }
    }

    return (
    <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Senha" type="password" name="userpassword" {...userpassword}/>
            {loading ? 
            (<Button disabled >Carregando...</Button>)
            : 
            (<Button>Entrar</Button>)}
            
            {error && <p>{error}</p>}
        </form>
        <Link to='/login/criar'>Cadastro</Link>
    </section>
    );
}

export default LoginForm;
