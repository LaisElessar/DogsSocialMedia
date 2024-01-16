import React from 'react';
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const [username, setUserName] = React.useState('');
    const [userpassword, setUserPassword] = React.useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, userpassword}),
        }).then((response)=>{
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
        })
    }

    return (
    <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={({target})=> setUserName(target.value)}/>
            <input type='password' value={userpassword} onChange={({target})=> setUserPassword(target.value)}/>
            <button>Enviar</button>
        </form>
        <Link to='/login/criar'>Cadastro</Link>
    </section>
    );
}

export default LoginForm;
