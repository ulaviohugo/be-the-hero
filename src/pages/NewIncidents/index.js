import React, {useState} from "react";
import{ Link, useNavigate } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';

import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    let navigate = useNavigate();

    const ongId = localStorage.getItem('ongId');

    async function hundleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents',data, {
                headers: {
                    Authorization:ongId,
                }
            } );
            navigate('/profile');
        } catch (error) {
            alert("Erro ao cadastrar caso ,tente novamente.");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                <img src={logoImg} alt="heroes" />

                    <h1>Registar novo caso:</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/> 
                        Ver Registo
                    </Link>
                </section>

                <form onSubmit={hundleNewIncident}>
                    <input
                         placeholder="Título do caso" 
                         value={title}
                         onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                         placeholder="Descriçãol" 
                         value={description}
                         onChange={e => setDescription(e.target.value)}
                    />
                    
                    <input
                         placeholder="Valor em kwanza" 
                         value={value}
                         onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Registar</button>
                </form>
            </div>
        </div>
    );
}