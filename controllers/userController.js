const Cliente = require('../config/db')

const {getRestaurant} = require('./restaurantController')

// getRestaurant()

const {insertReservation} = require('./reservationController')

// insertReservation('Ally', 'Luan', 5, 8, '20:00:00')

const {delReservation} = require('./reservationController')

// delReservation()

const {upReservation} = require('./reservationController')

// upReservation()

const { getUser, creatUser, userValidation, updateName, updateMail,  updatePassword,  delUser} = require('../services/userServices')

// getUser('luki90@mail.com')
// creatUser('Luan', 'luan@gmail.com', 1278)
// userValidation('luki90@mail.com', 1278)
// updateName('LuanP', 'luan10@gmail.com')
// updateMail('LuanMont@hotmail.com', 'Lua1Mont@hotmail.com')
// updatePassword('luan@gmail.com', '123')
// delUser(8039)
