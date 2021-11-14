import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '10ca37e1-48a2-45c5-96a4-aa1757bfb1ad'

const users = []; // array of users objects with user id, name, lastname, age

export const getUsers = (req, res) => {
  // console.log(users); // [ { name: 'Jhon', lastName: 'Doe', age: 25 }, { name: 'Jane', lastName: 'Doe', age: 22 } ]
  res.send(users);
};

export const createUser = (req, res) => {
  const userId = uuidv4();
  const { name, lastName, age } = req.body; // destructuring the body of the request
  users.push({ name, lastName, age, id: uuidv4() }); // pushing the new user to the array of users
  res.send(users); // sending the array with the new user
};

export const getUser = (req, res) => {
  // getting the user by id
  // console.log(req.params);
  const { id } = req.params;
  const user = users.find((user) => user.id === id); // finding the user with the id that was passed in the url
  res.send(user);
};

export const deleteUser = (req, res) => {
  // deleting the user by id
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id); // finding the index of the user with the id that was passed in the url
  users.splice(userIndex, 1); // removing the user from the array
  res.send(`user with the id ${id} succes deleted`);
};

export const editUser = (req, res) => {
  // updating the user by id
  const { id } = req.params;
  const { name, lastName, age } = req.body; // destructuring the body of the request

  const user = users.find((user) => user.id === id); // finding the user with the id that was passed in the url

  if (name) user.name = name; // if the name is passed in the body of the request, we update the name of the user
  if (lastName) user.lastName = lastName; // if the lastName is passed in the body of the request, we update the lastName of the user
  if (age) user.age = age; // if the age is passed in the body of the request, we update the age of the user

  res.send(users); // sending the array with the updated user object in the body of the request
};
