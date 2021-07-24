export interface loginModel {
    login: string;
    password: string;
}

let userSignIn = false;

export const login = (value: loginModel) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (value.login === 'user' && value.password === '123') {
                userSignIn = true;
                resolve(true);
            } else {
                userSignIn = false;
                resolve(false);
            }
        }, 2000);
    })
}

export const getUserProfile = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (userSignIn) {
                resolve({
                    id: 1,
                    firstName: "John",
                    lastName: "Doe"
                });
            }
            throw new Error("Not authorized");
        }, 2000);
    })
}