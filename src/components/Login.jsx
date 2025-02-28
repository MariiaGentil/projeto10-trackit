import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { UserContext } from "../contexts/UserContext"

export const Login = () => {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate()
    const{setUserData} = useContext(UserContext)

    function loginValidate(e) {
        e.preventDefault()
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginData)
        promise.then(response => {
            const { data } = response
            setUserData({token: data.token, image: data.image})
            navigate('/habits')
        }).catch()
    }

    return (
        <DivLogin>
            <img src="../src/assets/logo.png" />
            <form onSubmit={loginValidate}>
                <input type="text" placeholder="email" required onChange={e => setLoginData({ ...loginData, email: e.target.value })} value={loginData.email} />
                <input type="password" placeholder="senha" required onChange={e => setLoginData({ ...loginData, password: e.target.value })} value={loginData.password} />
                <button type="submit" className="entrar">Entrar</button>
            </form>
            <Link to='register'><p>Não tem uma conta? Cadastre-se!</p></Link>
        </DivLogin>
    )
}

const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img{
        width: 180px;
    }

    form{
        padding: 30px 0 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    input{
        width: 300px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--grey-ligth);
        color: var(--grey-dark);
    }
    
    input::placeholder{
        color: var(--grey-ligth)
    }

    input:focus{
        outline: 1px solid var(--grey-dark);
    }

    button{
        width: 300px;
        padding: 10px;
        border-radius: 5px;
        background-color: var(--blue-ligth);
        border: none;
        color: var(--white);
        cursor: pointer;
    }

    p{
        font-family: "Lexend Deca", sans-serif;
        color:  var(--blue-ligth);
        text-decoration: underline;
        padding-top: 15px;
        font-size: 12px;
        cursor: pointer;
    }
`