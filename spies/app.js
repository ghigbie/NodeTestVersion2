module.exports.handleSignup = (email, password) => {
    //Check if email already exisits
    //Save the user to the database
    db.saveUser({ email, password }); //ES6 use of object with names the sames as the property
    //Send the welcome email
};
