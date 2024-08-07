import './Login.css'

function Login(){
    return(
        <form action='/'>
            <input placeholder='username'></input>
            <input placeholder='password' type='password'></input>
        </form>
    );
}

export default Login;