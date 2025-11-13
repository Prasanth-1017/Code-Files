import bcrypt from 'bcrypt';

const hash = (password) => {
    const salt = 10;
    return bcrypt.hashSync(password, bcrypt.genSaltSync(salt));
}

const password = "Hashing";
const confirmPassword = "Hash";
const hashedPassword = hash(password);

if (bcrypt.compareSync(confirmPassword, hashedPassword))
    console.log("Valid password");
else
    console.log("Invalid password");