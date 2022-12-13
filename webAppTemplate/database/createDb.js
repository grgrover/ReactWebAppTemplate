const db = require('./index.js')

const createDb = async function () {
  const client = await db.connect()

  // await client.query('DROP DATABASE IF EXISTS nist')
  // await client.query('CREATE DATABASE nist')

  await client.query('DROP TABLE IF EXISTS comments')
  await client.query('CREATE TABLE comments (id serial primary key, contentID INT, username varchar, comment varchar, likes INT, dislikes INT, parentID INT, children_quantity INT, submitted_at TIMESTAMP with time zone)')

}

createDb()
.then(()=>{console.log('Database and table created successfully')})
.catch(err => {console.log(err)})

