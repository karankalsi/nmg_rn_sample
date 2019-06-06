
export function isValidName(value): Validity {
    let valid = value.length >= 2 && value.length <= 15;
    return {
        valid,
        message:  !valid ? 'Enter Valid Name\n' : ''
    }
}
export function isValidEmail(value): Validity {
    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valid =emailRegex.test(value);
    return {
        valid,
        message:  !valid ? 'Enter Valid Email\n': ''
    }
}
export function isValidMobile(value): Validity {
    let valid = value.length == 10;
    return {
        valid,
        message:  !valid ? 'Enter Valid Mobile\n' : ''
    }
}
export function isValidAddress(value): Validity {
    let valid =value.length > 0;
    return {
        valid,
        message: !valid ? 'Enter Valid Address\n' : ''
    }
}

export type Validity = {
    valid: boolean,
    message: String
}