const bcryptjs = require('bcryptjs');

const password = 'sasa'; // Password yang sudah Anda simpan di MongoDB
bcryptjs.hash(password, 10, (err, hash) => {
    if (err) {
        console.log('Error hashing password:', err);
    }
    console.log('Generated hash:', hash);  // Bandingkan dengan hash yang ada di database
});
