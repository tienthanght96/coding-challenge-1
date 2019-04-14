# coding-challenge-1

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

```
my-app
├── README.md
├── node_modules
├── package.json
├── .browserslistrc
├── babel.config.js
├── postcss.config.js
├── .gitignore
├── public
│     ── favicon.ico
│     ── index.html
│     ── _redirects (for custom redirect when deploy to netlify)
└── src
      ── assets (images)
      ── components (all components are used in views container)
      ── utils 
          ── image.js (generate imagebase64 from image )
          ── seedData.js (generate random data list albums, generate photos, tags, checkboxs )
      ── views (all views container of web app) 
      ── App.vue
      ── main.js
      ── router.js
      ── store.js
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
