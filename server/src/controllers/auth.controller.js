import client from '../config/db.js';
import ApiError from '../utils/error.js';
// const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//         throw new ApiError("Invalid email format. Please enter a valid email address.", 400);
//     }
    
//     const allowedDomains = ['stu.rumeli.edu.tr'];
//     const domain = email.split('@')[1];
//     if (!allowedDomains.includes(domain)) {
//         throw new ApiError("Only Rumeli University email addresses (@stu.rumeli.edu.tr) are allowed to register.", 400);
//     }
// };

// const validatePassword = (password) => {
//     if (password.length < 8) {
//         throw new ApiError("Password must be at least 8 characters long.", 400);
//     }
    
//     if (!/[A-Z]/.test(password)) {
//         throw new ApiError("Password must contain at least one uppercase letter.", 400);
//     }
    
//     if (!/[a-z]/.test(password)) {
//         throw new ApiError("Password must contain at least one lowercase letter.", 400);
//     }
    
//     if (!/[0-9]/.test(password)) {
//         throw new ApiError("Password must contain at least one number.", 400);
//     }
    
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//         throw new ApiError("Password must contain at least one special character (!@#$%^&*(),.?\":{}|<>).", 400);
//     }
// };

export const signUp = async (req, res) => {
    try {
        const {email, username, fullname, password} = req.body;
        if (!username || !fullname || !email || !password)
            throw new ApiError("username, fullname, email and password are required.", 400);
        
        if (fullname.length < 2)
            throw new ApiError("fullname must be at least 2 characters long.", 400);
        
        if (username.length < 2)
            throw new ApiError("username must be at least 2 characters long.", 400);

        if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(fullname) || !/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(last_name))
            throw new ApiError("fullname can only contain letters.", 400);

        // validateEmail(email);
        // validatePassword(password);
        

        res.status(200).json({
            message: 'Sign-up successful' 
        });
    } catch (error) {
        res.status(500).json({ 
            error: 'Sign-up failed' 
        });
    }
};

export const signIn = async (req, res) => {
    try {
        // Logic for signing in a user
        res.status(200).json({
            message: 'Sign-in successful' 
        });
    } catch (error) {
        res.status(500).json({ 
            error: 'Sign-in failed' 
        });
    }
};

