import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import listarInvitados from './servicios/invitadoListarService';
import './App.css';
function App() {
    const [listaInvitado, setListaInvitado] = useState([]);
    const columns = [
        {
            dataField: 'guest_id',
            text: 'ID Invitado',
        },
        {
            dataField: 'name',
            text: 'Nombre',
        },
        {
            dataField: 'last_name',
            text: 'Apellido',
        },
    ];
    useEffect(async () => {
        try {
            const { result, message, status } = await listarInvitados();
            setListaInvitado(result);
            alert(message);
        } catch (error) {
            alert(error);
        }
    }, []);
    return (
        <div className="App">
            <h1>Consumo del REST API</h1>
            <p>Lista de invitados</p>

            <BootstrapTable keyField="guest_id" data={listaInvitado} columns={columns} />

            <div className="parent">
                {listaInvitado.map((guest) => (
                    <Card guest={guest} key={guest.guest_id} />
                ))}
            </div>
        </div>
    );
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function Card({ guest }) {
    const red = getRandomNumber(0, 256);
    const green = getRandomNumber(0, 256);
    const blue = getRandomNumber(0, 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return (
        <div className="child" style={{ backgroundColor: color }}>
            <p>Nombre: {guest.name}</p>
            <p>Apellidos: {guest.last_name}</p>
        </div>
    );
}

export default App;
