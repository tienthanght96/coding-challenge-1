# coding-challenge-1

Live Demo: https://coding-challenge-1.netlify.com/

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

In my project I have used: <br >
  ─ Buefy Lightweight UI components for Vue.js based on Bulma <br >
  ─ Vuex a state management pattern + library for Vue.js applications.
    ─ I use it for management list albums, update album, update photo info of album <br>
  ─ faker.js to generate radom fake data <br >
  ─ Vue Router. It is the official router for Vue.js <br >
  ─ Vue-multiselect library for select tags of photo <br >

I split the UI into many independent components to reuse easily. <br>
Example: <br>
 ─ home page includes: album card, create add album card, popup to create new album, list album card. <br>
 ─ album detail page includes: photo card, create add photo card, header of album detail, list photo card, popup add new photo and popup lightbox of photo to view some info of photo and user can edit them. <br>

So I can use my components anywhere when i need them.  <br>

Thanks for reading ! <br>

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
