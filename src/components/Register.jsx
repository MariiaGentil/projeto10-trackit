import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"

export const Register = () => {
    const [newUserData, setNewUserData] = useState({})
    const navigate = useNavigate()

    function registerValidate(e) {
        e.preventDefault()
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', newUserData)
        promise.then(() => {
            navigate('/')
        }).catch()
    }

    return (
        <DivRegister>
            <img src="../src/assets/logo.png" />
            <form onSubmit={registerValidate}>
                <input type="text" placeholder="email" required onChange={e => setNewUserData({ ...newUserData, email: e.target.value })} value={newUserData.email} />
                <input type="password" placeholder="senha" required onChange={e => setNewUserData({ ...newUserData, password: e.target.value })} value={newUserData.password} />
                <input type="text" placeholder="nome" required onChange={e => setNewUserData({ ...newUserData, name: e.target.value })} value={newUserData.name} />
                <input type="url" placeholder="foto" required onChange={e => setNewUserData({ ...newUserData, image: e.target.value })} value={newUserData.image} />
                <button type="submit">Cadastar</button>
            </form>
            <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
        </DivRegister>
    )
}

const DivRegister = styled.div`
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