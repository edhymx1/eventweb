const config = require('./../config/config');

async function listarInvitados() {
    const url = `${config.url}guest`;
    const data = await fetch(url);
    const result = await data.json();
    return result;
}

export default listarInvitados;
