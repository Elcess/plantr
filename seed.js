const db = require('./models');

let synced = db.sync({force: true})
  .then(() => {
    db.close();
    })
      .catch(error =>
        {
          console.error(error);
          db.close()
        });
