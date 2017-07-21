let users = require('./userData.json');

module.exports = {
  getUsers: (req, res) => {
    if(req.query.age) {
      console.log('GOT AGE?');
      let ages = users.filter(item => item.age < req.query.age);
      res.status(200).send(ages)
    }
    else if(req.query.lastname) {
      console.log('GOT SIRNAME?');
      let lastnames = users.filter(item => item.lastname.includes(req.query.lastname));
      res.status(200).send(lastnames);
    }
    else if(req.query.email) {
      console.log('YOU\'VE GOT MAIL!');
      let emails = users.filter(item => item.email.includes(req.query.email));
      res.status(200).send(emails);
    }
    else if(req.query.favorites) {
      console.log('GOT FAVORITES?');
      let specFavorite = users.filter(item => item.favorites.includes(req.query.favorites));
      res.status(200).send(specFavorite);
    }
    else {
      console.log('GOT USERS?');
      res.status(200).send(users);
    }
  },

  getUsersById: (req, res) => {
    if(req.params.id) {
      let targetUser = users.filter(item => item.id === parseInt(req.params.id));
      res.status(200).send(targetUser);
    }
    else if(!req.params.id) {
      console.log('NO SUCH USER!');
      res.status(404).json(null);
    }
  },

  getAdmins: (req, res) => {
    console.log('FOUND ADMIN!');
    let admins = users.filter(item => item.type === 'admin');
    res.status(200).send(admins);
  },

  getNonAdmins: (req, res) => {
    console.log('FILTERED ADMINS!');
    let nonadmins = users.filter(item => item.type !== 'admin');
    res.status(200).send(nonadmins);
  },

  getUsersByType: (req, res) => {
    if(req.params.type) {
      console.log('FOUND TYPE!');
      let userType = users.filter(item => item.type === req.params.type);
      res.status(200).send(userType);
    }
    else {
      console.log('GOT USERS AGAIN?');
      res.status(200).send(users);
    }
  },

  updateUser: (req, res) => {
    console.log("UPDATED USER!");
    users = users.map(item => {
      if(item.id === req.params.id) {
        item.name = "The New Guy";
      }
      return item;
    });
    res.status(200).json(users);
  },

  postUser: (req, res) => {
    console.log("POSTED USER!")
    users.pop(req.body);
    res.status(200).json(users);
  },

  deleteUser: (req, res) => {
    console.log("DELETED USER!");
    data = data.filter(item => item.year < parseInt(req.params.year));
    res.status(200).json(data);
  }
}