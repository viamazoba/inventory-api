# Inventory - RESTful API :rocket:

## Table of contents :page_facing_up:

- [Overview](#overview)
  - [Installation](#installation)
  - [The Challenge](#the-challenge)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [API Routes](#api-routes-partial-listing)
- [Authors](#author)

## Overview :writing_hand:

The application is a product inventory management system that utilizes CRUD operations to manage products. It allows users to create, edit, update, and delete products. The application consists of a backend and frontend, and this repository contains the backend structure.
This is the link of the frontend repository: [Frontend Project](https://github.com/erickfabiandev/CrudProject-React-Express) , and the link of the application deployed in vercel: [Deployed Project](https://crud-project-react-express.vercel.app/)

### Installation :gear:

To get started with the project, follow these steps:

1. Clone the repository:

```shell
git clone https://github.com/viamazoba/inventory-api.git
```

2. Navigate to the project directory:

```shell
cd inventory-api
```

3. Install the dependencies:

```shell
 npm install
```

4. Start the application:

```shell
 npm run dev
```

#### Note:

To run this project properly, you need the version of Node specified in the .nvmrc file (v18.18.2).

### The Challenge :weight_lifting_man:

The main challenge of this project is to develop a RESTful API that allows for product management. To achieve this, various REST architectural principles were implemented:

1. Create a service for the products.
2. Create endpoints for the products, where the endpoints have a noun related to the service.
3. Use HTTP verbs to perform CRUD operations on the API.
4. Send information in JSON format.
5. Ensure the API is stateless.

Other challenges of the API included:

- Connecting the API to the database.
- Managing the database using an ORM, specifically Sequelize.
- Using Jest.js and Supertest.js for unit and integration testing.
- Using Swagger.js to document the API.
- Using TypeScript for project development.

## My Process :mountain:

### Built With :hammer_and_wrench:

The project was built with the following technologies and tools:

- PostgresSQL
- Node.js
- Express.js
- TypeScript
- Swagger.js
- Jest.js
- Supertest.js
- Colors.js
- Nodemon
- Cors

### What I Learned :microscope:

During the development of this project, I gained experience in:

- Utilizing React to create reusable components and manage the application state.
- Applying custom styles using Sass to enhance the visual appearance.
- Consuming an Express backend API to perform CRUD (Create, Read, Update, Delete) operations on products.

### Continued Development :briefcase:

In future development, I plan to enhance the project by adding additional features, such as authentication and authorization for user access, pagination and filtering options for the product list, and error handling.

### Useful Resources :sos:

Here are some resources that were helpful in the development of this project:

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/)

## API Routes (Partial Listing)

```javascript
const routes = (app: Application) => {
  app.use("/api/healthcheck", healthcheckRouter);
  app.use("/api/user", userRouter);
};

export default routes;
```

## Author :nerd_face:

This project was created by viamazoba. You can find my GitHub profile at the following link:

- [viamazoba](https://github.com/viamazoba)
