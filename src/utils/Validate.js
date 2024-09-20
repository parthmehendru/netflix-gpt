export const checkValidData = (email, password, isSignInForm, name="") => {
    if(!isSignInForm && name===""){
        return "Name can't be empty.";
    }
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if(!isEmailValid){
        return "Email is not valid.";
    }

    const minLengthRegex = /^.{8,}$/;
    const lowercaseRegex = /(?=.*[a-z])/;
    const uppercaseRegex = /(?=.*[A-Z])/;
    const digitRegex = /(?=.*\d)/;
    const specialCharRegex = /(?=.*[@$!%*?&])/;

    if (!minLengthRegex.test(password)) {
        return "Password must be at least 8 characters long.";
    }

    if (!lowercaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    if (!uppercaseRegex.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!digitRegex.test(password)) {
        return "Password must contain at least one digit.";
    }

    if (!specialCharRegex.test(password)) {
        return "Password must contain at least one special character.";
    }
    return null;
}