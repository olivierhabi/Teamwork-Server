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
  const queryText = `CREATE TABLE IF NOT EXISTS
  comments(
    comment_id UUID PRIMARY KEY,
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

const flagArticleTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  flag_articles(
    id UUID PRIMARY KEY,
    flag VARCHAR(128) NOT NULL,
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

const flagCommentTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  flag_comments(
    id UUID PRIMARY KEY,
    flag VARCHAR(128) NOT NULL,
    comment_id VARCHAR(128) NOT NULL,
    comment VARCHAR(128) NOT NULL,
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
  flagArticleTables();
  flagCommentTables();
};
module.exports = createTables;

require('make-runnable');
