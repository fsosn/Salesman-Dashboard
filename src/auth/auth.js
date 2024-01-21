const fakeAuthProvider = {
    isAuthenticated: false,
    signIn: (username, password, callback) => {
        if (username === 'tomcruise1962' && password === 'topgun') {
            fakeAuthProvider.isAuthenticated = true;
            setTimeout(() => callback(username), 100);
        } else {
            console.log('Invalid credentials');
        }
    },
    signOut: (callback) => {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export {fakeAuthProvider};
