const cliente = require('../config/db')

async function getReservation() {
    try{
        await cliente.connect()

        const resultado = await cliente.query('SELECT * FROM reservation')
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

async function insertReservation(namerestaurant, nameperson, numbertable, quantperson) {
    try{
        await cliente.connect()

        await cliente.query('INSERT INTO reservation("namerestaurant", "nameperson", "numbertable", "quantperson") values (' + "'" + namerestaurant + "', '" + nameperson + "', '" + numbertable + "', '" + quantperson + "');");
        console.log('Valor inserido na tabela')

        const resultado = await cliente.query('SELECT * FROM reservation')
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

async function delReservation(idreservation) {
    try{
        await cliente.connect()

        await cliente.query("DELETE FROM reservation where idreservation = '"+idreservation+"';")
        console.log('Valor removido da tabela')

        const resultado = await cliente.query('SELECT * FROM reservation')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function upReservation(idreservation, newId, newRestaurant, newPerson, newTable, newquant) {
    try{
        await cliente.connect()

        await cliente.query("UPDATE reservation SET idreservation = '"+newId+ "',namerestaurant = '" + newRestaurant + "', nameperson = '"+newPerson+ "', numbertable = '" + newTable + "' WHERE idreservation = '" + idreservation + "';")

        const resultado = await cliente.query('SELECT * FROM reservation')
        console.table(resultado.rows)
        console.log('Valor atualizado na tabela')
    }

    catch(ex) {
        console.log('Ocorreu erro ao conectar-se. Erro:'+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

module.exports = {
    getReservation,
    insertReservation,
    delReservation,
    upReservation
}