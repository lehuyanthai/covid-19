export const checkEmptyString = (str = '') => str.trim().length === 0

export const validateEmail = (email: string) => {
    if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};
export const validatePassword = (pass: string) => {
    if (/^[A-Za-z1-9]\w{7,14}$/.test(pass)) {
        return true;
    }
    return false;
};

export const validateFormField = (name: string, value: string) => {
    switch (name) {
        case 'firstName':
        case 'lastName':
            return checkEmptyString(value)
        case 'email':
            return !validateEmail(value)
        case 'password':
            return !validatePassword(value)
        case 'confirmPassword':
            return false
        default:
            return false
    }
}

export const updateObject = (oldObject:Object, updatedProperties:Object)=>{
    return {
        ...oldObject,
        ...updatedProperties
    }
}