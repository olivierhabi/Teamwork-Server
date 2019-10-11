[![Build Status](https://travis-ci.org/walter-tricks/Teamwork-Server.svg?branch=develop)](https://travis-ci.org/walter-tricks/Teamwork-Server)
[![Coverage Status](https://coveralls.io/repos/github/walter-tricks/Teamwork-Server/badge.svg?branch=develop)](https://coveralls.io/github/walter-tricks/Teamwork-Server?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/75a9dd2d9fdf82348a91/maintainability)](https://codeclimate.com/github/walter-tricks/Teamwork-Server/maintainability)

# Teamwork

Teamwork is an internal social network for organizations’ employees. The goal of this
application is to facilitate more interaction between colleagues and facilitate team bonding.

## Code style

The style-guide is ESlint-airbnb, and it uses prettier for formatting code. To enable `VS Code + ESLint + prettier` follow the steps below:

- `cd root_directory`
- `yarn add -D prettier eslint eslint eslint-config-prettier eslint-plugin-prettier`
- Create `.eslintrc.json`:`{ "extends": "plugin:prettier/recommended" }`
- In VS Code, `Ctrl + Shift + X`
- Search and install _ESLint_
- Search and install _Prettier Code Formatter_
- Restart VS Code.

### Getting Started

### Clone the latest version of the repository

`git@github.com:walter-tricks/Teamwork-Server.git` or `https://github.com/walter-tricks/Teamwork-Server.git`

### Change directory

`cd into the project directory`

### Install the project's dependencies with

`yarn` or `npm install`

# API 
## Endpoints

`POST /api/v1/auth/signup`: Register a user.

`POST /api/v1/auth/signin `: User can Login.

`POST /api/v1/articles `: User can Create articles.

`PATCH /api/v1/articles/:id `: Use can Update articles.

`DELETE /api/v1/articles/:id `: Use Can Delete articles.

`GET /api/v1/articles/:id `: Use Can get articles by Id.

`GET /api/v1/feeds `: Use Can view all article by latest top.

`POST /api/v1/articles/:id/comments `: Use Can comment to specific article.

# POSTMAN documentation 
[API Documentation](https://documenter.getpostman.com/view/8274199/SVtVTnpF)

# GITHUB PAGES
[GitHub Pages](https://walter-tricks.github.io/TeamworkUI/)

# HEROKU
[Heroku Backend](https://teamwork25.herokuapp.com)


