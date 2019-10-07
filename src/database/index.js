import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Connected to database succesfully');
});

// pool.query(`SELECT * FROM team`, (err, res) => {
//   if (err) return console.log(err);

//   console.log(res);
// });

/**
 * Create tables
 */
const createArticleTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    articles(
      id UUID PRIMARY KEY,
      title VARCHAR(128) NOT NULL,
      article VARCHAR(128) NOT NULL,
      tag_list TEXT[],
      author_id VARCHAR(128) NOT Null,
      created_on TIMESTAMP,
      modified_on TIMESTAMP
    )`;
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create User Tables
 */
const createUserTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      first_name VARCHAR(128) NOT NULL,
      last_name VARCHAR(128) NOT NULL,
      email VARCHAR(128) NOT NULL,
      password VARCHAR(128) NOT NULL,
      gender VARCHAR(128) NOT NULL,
      job_role VARCHAR(128) NOT NULL,
      department VARCHAR(128) NOT NULL,
      address VARCHAR(128) NOT NULL,
      is_admin BOOLEAN NOT NULL

    )`;
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create Comment
 */
const createCommentTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  comments(
    id UUID PRIMARY KEY,
    created_on TIMESTAMP,
    comment VARCHAR(128) NOT NULL

  )`;
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

const flagArticleTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  flag_article(
    id UUID PRIMARY KEY,
    flag TIMESTAMP,
    article_id VARCHAR(128) NOT NULL,
    title VARCHAR(128) NOT NULL,
    article VARCHAR(128) NOT NULL,
    created_on TIMESTAMP
  )`;
  pool
    .query(queryText)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

module.exports = {
  createArticleTables,
  createUserTables,
  createCommentTables,
  flagArticleTables
};

require('make-runnable');

// const queryText = `CREATE TABLE
// users(
//   id UUID PRIMARY KEY,
//   first_name VARCHAR(128) NOT NULL,
//   last_name VARCHAR(128) NOT NULL,
//   email VARCHAR(128)NOT NOT NULL,
//   password VARCHAR(128) NOT NULL,
//   gender VARCHAR(128) NOT NULL,
//   job_role VARCHAR(128) NOT NULL,
//   department VARCHAR(128) NOT NULL,
//   address VARCHAR(128) NOT NULL,
//   is_admin BOOLEAN NOT NULL
//   )`;
