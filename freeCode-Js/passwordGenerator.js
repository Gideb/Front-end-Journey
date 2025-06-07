function generatePassword(passwordLength) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  return password;
}

const password = generatePassword(8);
console.log(`Generated Password: ${password}`);


