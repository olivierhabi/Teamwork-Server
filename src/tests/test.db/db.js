import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Connected to database succesfully');
});

const createArticleTables = () => {
  const queryText = `DROP TABLE IF EXIST; CREATE TABLE
    articles(
      id SERIAL,
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
  const queryText = `DROP TABLE IF EXIST; CREATE TABLE
    users(
      id SERIAL,
      first_name VARCHAR(128) NOT NULL,
      last_name VARCHAR(128) NOT NULL,
      email VARCHAR(128) UNIQUE NOT NULL,
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
  const queryText = `DROP TABLE IF EXIST; CREATE TABLE
  comments(
    comment_id SERIAL,
    comment VARCHAR(128) NOT NULL,
    author_id VARCHAR(128) NOT NULL,
    article_id VARCHAR(128) NOT NULL,
    article_title VARCHAR(128) NOT NULL,
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

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

const createTables = () => {
  createArticleTables();
  createUserTables();
  createCommentTables();
};
module.exports = createTables;

require('make-runnable');
