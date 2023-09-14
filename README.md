# project-2-restful-API

## Description
This project is a simple RESTful API for a pet adoption application. This application allows you to manage users who are interested in adopting pets, pets that are available for adoption, and the relationship between users and their adopted pets.

Main features:

**Users**

* You can add a new user to the user database. Each user has a name, a phone number, and an address.
* You can get information about a specific user, or retrieve a list of all users.
* You can delete a user from the user database.
* You can update the information of a specific user.

**Pets**

* You can add a new pet to the pets database. Each pet has a name, a type, an age, and an adoption status (adopted or not adopted yet).
* You can get information about a specific pet, or retrieve a list of all pets.
* You can delete a pet from the pet database.
* You can update the information of a specific pet.

**Database Relationships**

In the database, there is a one-to-many relationship between users and pets. This is implemented with an 'ownerId' field in the pets table, representing which user has adopted the pet. When a user adopts a pet, the user's id will be put in the pet's 'ownerId' field, joining a pet to the user who has adopted it.

This API does not include any frontend. It is tested using a software like Insomnia where you can send HTTP requests (GET, POST, PUT, DELETE) and see the responses from the API. The database behind this API is a MySQL database which includes two tables, `users` and `pets`.

This project handles the adoption process by updating the pet's 'adopted' status and setting its 'ownerId' field. It makes it possible to see which pets have been adopted by which users by examining the 'ownerId' field of each pet.

## Usage and Installation
Here's a quick guide on how to install and run it locally:

1. Extract the zip file I have attached into a directory of your choice.

2. Navigate to that directory in the terminal.

3. Install npm, Node's package manager by `npm install`.

4. Run `npm start` to start the application.

5. Use Insomnia to interact with the API on `http://localhost:3001`.
