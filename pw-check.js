const bcryptjs = require('bcryptjs');

const password = 'sasa';
bcryptjs.hash(password, 10, (err, hash) => {
    if (err) console.log(err);
    console.log('Hash:', hash);
    
    bcryptjs.compare(password, hash, (err, result) => {
        if (err) console.log(err);
        console.log('Password match result:', result);  // Harusnya true
    });
});
