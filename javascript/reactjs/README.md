```2024-05-28```
## Websites

## Project init
```javascript
npx create-react-app frontend-reacjs

cd frontend-reactjs

npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import --save-dev

npx eslint --init

```

```javascript
//.eslintrs.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // Add custom rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
```
```javascript
//.eslintrs.mjs
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // Add custom rules here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

```
```javascript
//.eslintrc.json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "airbnb"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    // Add custom rules here
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

```
npm run lint
npm run lint:fix

```



