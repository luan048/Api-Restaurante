const cliente = require('../config/db')

// getUserall() //ESSE É SOMENTE PARA TESTE, NÃO PARA USAR!!!!!!!!!!!!!!!!!
// getUser('luan10@gmail.com')
// creatUser('Lucas', 'luca09@gmail.com', 2605)
// userValidation('luan123@gmail.com', 123)
// updateName('LuanP', 'luan10@gmail.com')
// updateMail('LuanMont@hotmail.com', 'Lua1Mont@hotmail.com')
// updatePassword('luan@gmail.com', '123')
// delUser(1)

async function getUserall() { //TESTE
    await cliente.connect()

    const resultado = await cliente.query('SELECT * FROM users')
    console.table(resultado.rows)
    
    await cliente.end()
}

async function getUser(email) {
    try{
        await cliente.connect()

        const resultado = await cliente.query("SELECT * FROM users WHERE email = '"+email+"';")

        if(resultado.rows.length > 0) { //rows.length representa as linhas do DB, se === 0, significa que não existe nenhuma linha com esse email
            console.table(resultado.rows)
        }

        else{
            console.log('Usuário não encontrado')
        }
    }

    catch(ex) {
        console.log('Ocorreu um erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function creatUser(userName, email, password){
    try{
        await cliente.connect()
            
        await cliente.query('INSERT INTO users ("username", "email", "password") values ('+"'"+userName+"', '"+email+"', '"+password+"');")
            
        const resultado = await cliente.query('SELECT * FROM users')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Ocorreu um erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function userValidation(email, password) { //É para LOGIN
    try {
        await cliente.connect()

        const query = 'SELECT * FROM users WHERE email = $1'
        const values = [email];
        const result = await cliente.query(query, values);
        const user = result.rows[0];
  
        if (!user || user.password !== password) {
          console.log('Email ou senha incorretos')
        }

        else{
            console.log('Logado com sucesso!')
        }
    }
    catch(ex) {
        console.log('Erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function updateName(newName, email) {
    try{
        await cliente.connect()

        const resultado = await cliente.query ("UPDATE users SET username = '"+newName+"' WHERE email = '"+email+"';")

        if (resultado.rowCount === 0) {
            console.log('Email não encontrado')
        } 
        else {
            const newUser = await cliente.query("SELECT * FROM users WHERE email = '"+email+"';")
            console.table(newUser.rows)
        }
    }

    catch(ex) {
        console.log('Erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function updateMail(newEmail, email) {
    try{
        await cliente.connect()

        const resultado = await cliente.query("UPDATE users SET email = '"+newEmail+"' WHERE email = '"+email+"';")

        if(resultado.rowCount === 0) {
            console.log('Email não existe!')
        }

        else{
            const Emailnew = await cliente.query("SELECT * FROM users WHERE email = '"+newEmail+"';")
            console.table(Emailnew.rows)
        }
    }

    catch(ex) {
        console.log('Erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function updatePassword(email, newPassword) {
    try{ 
        await cliente.connect()

        const resultado = await cliente.query("UPDATE users SET password = '"+newPassword+"' WHERE email = '"+email+"';")

        if(resultado.rowCount === 0) {
            console.log('Email não existe!')
        }

        else{
            const newPassword = await cliente.query("SELECT * FROM users WHERE email = '"+email+"';")
            console.table(newPassword.rows)
        }
    }

    catch(ex) {
        console.log('Erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

async function delUser(iduser) {
    try {
        await cliente.connect()

        await cliente.query("DELETE FROM users WHERE id_identifier = '"+iduser+"';")

        const resultado = await cliente.query('SELECT * FROM users')
        console.table(resultado.rows)
    }

    catch(ex) {
        console.log('Erro ao conectar-se. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}
//AJUSTAR PARA COLOCAR UM ID GENERATION