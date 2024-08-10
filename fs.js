const fs = require("fs");
const path = require("path");

const users = [
  {
    id: 1,
    name: 'Ammoriddin',
    email: 'khamidullayevammoriddin@gmail.com',
    age: 14,
    password: '5f6Y9tf13FYG'
  }
];

const newUser = {
  id: 2,
  name: 'Isfandiyor',
  email: 'isfandiyor@gmail.com',
  age: 24,
  password: 'F6$%9FBA9Fasdf'
};

// Create the 'users' directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'users'))) {
  fs.mkdirSync(path.join(__dirname, 'users'));
}

// Write initial users to the 'user.json' file
fs.writeFileSync(path.join(__dirname, 'users', 'user.json'), JSON.stringify(users, null, 2));

fs.readFile(path.join(__dirname, 'users', 'user.json'), 'utf8', (err, data) => {
  if (err) throw err;

  let usersArray = JSON.parse(data);
  usersArray.push(newUser);
  console.log(usersArray);
  
  fs.writeFile(path.join(__dirname, 'users', 'user.json'), JSON.stringify(usersArray, null, 2), (err) => {
    if (err) throw err;
      
    console.log('New user successfully added');
  });
});