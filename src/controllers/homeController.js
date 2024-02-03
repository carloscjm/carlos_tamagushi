const model = import('../model/model_creatureList.js')

const HomeController = {
    index: (req, res) => {
      res.render('../src/views/index', { title: 'Página Inicial' });
    },
  };
  
  module.exports = HomeController;
  