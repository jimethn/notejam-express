try {
  var cs = require('./cloud-settings.js');
} catch (e) {
  console.log("cloud-settings.js not found");
  var cs = { dsn: "sqlite://notejam.db" };
}

var settings = {
  development: {
    env: "dev",
    db: "notejam.db",
    dsn: cs.dsn
  },
  test: {
    env: "test",
    db: "notejam_test.db",
    dsn: "sqlite://notejam_test.db"
  }
};


var env = process.env.NODE_ENV
if (!env) {
  env = 'development'
};
module.exports = settings[env];
