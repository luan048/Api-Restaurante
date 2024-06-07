const cliente = require('../config/db')

async function getRestaurant() {
    try{
        await cliente.connect()

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu um erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function insertRestaurant(restaurantname, quantable) {
    try{
        await cliente.connect()

        await cliente.query('INSERT INTO restaurant("restaurantname", "quantable") values ('+"'"+restaurantname+"', '"+quantable+"');")
        console.log('Valor inserido na tabela')

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu um erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function delRestaurant(idrestaurant) {
    try{
        await cliente.connect()

        await cliente.query("DELETE FROM restaurant WHERE idrestaurant = '"+idrestaurant+"';")
        console.log('Restaurante removido da tabela')

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function upRestaurant(idrestaurant, newId) {
    try{
        await cliente.connect()

        await cliente.query("UPDATE restaurant SET idrestaurant = '"+newId+"' WHERE idrestaurant = '"+idrestaurant+"'; ")

        const resultado = await cliente.query('SELECT * FROM restaurant')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

module.exports = {
    getRestaurant,
    insertRestaurant,
    delRestaurant,
    upRestaurant
}