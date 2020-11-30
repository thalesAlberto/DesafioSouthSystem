const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const axios = require('axios');

const url = "http://localhost:3000/product"

var statusCode;
var id;
var response;

Given('que eu tenho uma base de dados vazia', function () {
    axios.delete(url);
});

Given('que eu tenho uma base de dados não vazia', function () {
    return axios({
        method: 'post',
        url: url,
        data: {
            name: "Queijo Suiço",
            type: 'Food',
            description: 'Queijo suiço, valido até 2022, manter refrigerado'
        }
    }).then(res => {
        id = res.data._id;
    })
});

When('eu criar um produto com o campo Name vazio', function () {
    return axios({
        method: 'post',
        url: url,
        data: {
            type: 'Food',
            description: 'Queijo suiço, valido até 2022, manter refrigerado'
        }
    }).catch(err => {
        response = err.response.data;
        statusCode = err.response.status;
    });
});


When('eu criar um produto com o campo Type vazio', function () {
    return axios({
        method: 'post',
        url: url,
        data: {
            name: 'Queijo Suiço',
            description: 'Queijo suiço, valido até 2022, manter refrigerado'
        }
    }).catch(err => {
        response = err.response.data;
        statusCode = err.response.status;
    });
});

When('eu criar um produto com campos válido', function () {
    return axios({
        method: 'post',
        url: url,
        data: {
            name: "Queijo Suiço",
            type: 'Food',
            description: 'Queijo suiço, valido até 2022, manter refrigerado'
        }
    }).then(res => {
        statusCode = res.status
    })
});

Then('o produto será criado', function () {
    return axios({
        method: 'get',
        url: url
    }).then(res => {
        let data = res.data
        expect(data).to.be.an('array').and.have.lengthOf(1);
        expect(data[0]).to.have.a.property('name').to.be.equal("Queijo Suiço");
        expect(data[0]).to.have.a.property("type").to.be.equal("Food");
        expect(data[0]).to.have.a.property("description").to.be.equal("Queijo suiço, valido até 2022, manter refrigerado");
    });
});

When('eu realizar uma busca sem filtros nos produtos', function () {
    return axios({
        method: 'get',
        url: url
    }).then(res => {
        response = res.data;
        statusCode = res.status;
    });
});

When('eu buscar um produto com id válido e existente', function () {
    return axios({
        method: 'get',
        url: url + "/" + id
    }).then(res => {
        response = res.data;
        statusCode = res.status;
    });
});

When('eu buscar um produto com id inexistente ou inválido', function () {
    return axios({
        method: 'get',
        url: url + "/sauhusnajs"
    }).catch(err => {
        statusCode = err.response.status;
    });
});

When('eu editar um produto com id válido e existente', function () {
    return axios({
        method: 'put',
        url: url + "/" + id,
        data: {
            name: "Queijo Suiço Vencido",
            type: "Food",
            description: "Queijo suiço vencido no dia 01/11/2020"
        }
    }).then(res => {
        response = res.data;
        statusCode = res.status;
    })
});

When('eu excluir um produto com id válido e existente', function () {
    return axios({
        method: 'delete',
        url: url + "/" + id
    }).then(res => {
        statusCode = res.status;
    });;
});

Then('o produto com aquele id vai ser editado', function () {
    return axios({
        method: 'get',
        url: url + "/" + id
    }).then(res => {
        let data = res.data;
        expect(data._id).to.be.equal(response._id);
        expect(data.name).to.be.equal(response.name);
        expect(data.description).to.be.equal(response.description);
    });
});

Then('vai ser retornado todos os produtos existentes', function () {
    expect(response).to.be.an('array').and.not.be.empty;
});

Then('o produto com aquele id vai ser excluido', function () {
    return axios({
        method: 'get',
        url: url + "/" + id
    }).then(res => {
        let data = res.data;
        expect(data).to.be.null;
    });
});

Then('a mensagem {string} será exibida', function (mensagem) {
    return expect(response).to.be.equal(mensagem);
});

Then('vai ser retornado o produto com id indicado', function () {
    return axios({
        method: 'get',
        url: url + "/" + id
    }).then(res => {
        let data = res.data;
        expect(data._id).to.be.equal(response._id);
        expect(data.name).to.be.equal(response.name);
        expect(data.description).to.be.equal(response.description);
    });
});

Then('o código {string} será exibido', function (code) {
    expect(parseInt(code)).to.be.equal(statusCode);
});


