const model = require('../model/model_creatureList.js')
const creaturesController = {
  creature_list: async (req, res) => {
    let creatureList = await model.getCreaturesList();
    console.log('creatureList', creatureList[0].sprites.versions);
    res.render('../src/views/creature_list', { title: 'Página Inicial', list: creatureList });
  },
};

module.exports = creaturesController;