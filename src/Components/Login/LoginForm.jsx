import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css'
import styleBtn from '../Forms/Button.module.css'
import Head from '../Helper/Head';

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
    <section className='animeLeft'>
        <Head title="Login"/>
        <h1 className='title'>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Senha" type="password" name="userpassword" {...userpassword}/>
            {loading ? 
            (<Button disabled >Carregando...</Button>)
            : 
            (<Button>Entrar</Button>)}
            <Error error={error}/>
        </form>
        <Link className={styles.forgotPass} to='/login/perdeu'>Esqueci minha senha</Link>
        <div className={styles.register}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possue uma conta? Cadastre-se no site!</p>
            <Link className={styleBtn.button} to='/login/criar'>Cadastro</Link>
        </div>
    </section>
    );
}

export default LoginForm;
