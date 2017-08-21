var settings = {
  development: {
    env: "dev",
    db: "notejam.db",
    dsn: require('./cloud-settings.js').dsn
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
