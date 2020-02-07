const { Router } = require ('express');

const routes = Router();

routes.get('/companies',(request,response)=>{
    return response.json({ hello: 'World'});
});

module.exports = routes;