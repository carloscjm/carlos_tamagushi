const axios = require('axios');

async function getCreaturesList() {
    let listaCreatures = [];
    for (let i = 1; i <= 3; i++) {
        let poke = i;
        if (i == 2) {
            poke = 5
        } else if (i == 3) {
            poke = 8
        } if (i == 4) {
            poke = 9
        }
        let responseApi = await axios.get('https://pokeapi.co/api/v2/pokemon/'+poke)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Erro:', error.message);
        });
        listaCreatures.push(responseApi);
    }
    return listaCreatures;
}

module.exports = {
    getCreaturesList: getCreaturesList,
};