const db = require('./db.js');

const router = {

  users: {
    get: (req, res) => {
      console.log('Serving to GET request on /users');
      let sql = 'SELECT * FROM users';
      db.connection.query(sql, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        res.send(data);
      });  
    },

    post: (req, res) => {
      console.log('Serving to POST request on /users');
      let name = req.body.userName;
      let sql = `INSERT INTO users (user_name) VALUES ('${name}')`;

      db.connection.query(sql, (err) => {
        if (err) {
          console.log(err);
          return;
        }
         console.log('User successfully saved into DB!'); 
      }
      
      );
      res.send('User successfully saved into DB!');
    }

  },

  forum: {
    get: (req, res) => {
      console.log('Serving to GET request on /forum');
      let sql = 'SELECT * FROM forum';
      db.connection.query(sql, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        res.send(data);
      }); 

    },
    post: (req, res) => {
      console.log('Serving to POST request on /forum');
      let ob = {
        text: req.body.text,
        created_at: new Date(),
        user_id: req.body.userId,
      };
      let sql = 'INSERT INTO posts SET ?';

      db.connection.query(sql, ob, (err) => {
        if (err) {
          console.log(err);
          return;
        }
         console.log('New post successfully saved into DB!'); 
      });
    }
  }
}

exports.router = router;