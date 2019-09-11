const db = require('../data/db-config.js');

module.exports = {
    findUserPosts,
};

function findUserPosts(id){

  return db('users as u') //remember the return!
    .join('posts as p', 'u.id', 'p.user_id')
    .where({ user_id: id })
    .select('p.id', 'p.contents', 'u.username')
    .then(posts => {
        return posts;
    })
}