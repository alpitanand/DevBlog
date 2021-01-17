const User = require('../model/user');

module.exports = {
    
    save: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },

    findUserByEmail: async (email) =>{
        return await User.findOne({email:email});
    },
    
    finduserByID: async (id) =>{
        return User.findById(id);
    }
}