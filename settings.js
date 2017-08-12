var settings = {
  development: {
    env: "dev",
    db: "notejam.db",
    dsn: "mysql://notejamuser:notejampw@notejam-dbinstance.ceiipxppnqt3.us-east-2.rds.amazonaws.com/notejam"
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
