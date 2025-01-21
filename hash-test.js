const bcryptjs = require('bcryptjs');

const enteredPassword = '1234'; // Password yang dikirimkan dari frontend
const storedPasswordHash = '$2a$10$xGxthKb8.FHxTa1UZM7ZauZnxQLKARpQmKEbUKTBGmMmAJENP/SHC'; // Hash yang ada di MongoDB

bcryptjs.compare(enteredPassword, storedPasswordHash, (err, result) => {
    if (err) {
        console.log('Error comparing password:', err);
    }
    console.log('Password match:', result);  // Harusnya true jika password cocok
});
