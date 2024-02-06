import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {FiLogIn} from 'react-icons/fi';

import api from "../../services/api";

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){

    const [id, setID] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('seccion', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
        
            navigate('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="heroes" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                    placeholder="Sua ID" 
                    value={id}
                    onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/Register">
                        <FiLogIn size={16} color="#E02041"/> 
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    );
}