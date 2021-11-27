db.createUser({
  user: "user",
  pwd: "2665640",
  roles: [
    {
      role: "readWrite",
      db: "samara",
    },
  ],
});
