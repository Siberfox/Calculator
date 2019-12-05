module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    },
    "extends": ["airbnb", "prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "classes": true,
            "defaultParams": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "no-plusplus": "off",
        "no-alert": "off",
        "no-unused-vars": "warn",
        "no-console": "off",
        "prettier/prettier": ["error"],
        "prefer-const": "warn"
    }
};