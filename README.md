I have created this project to learn:
- Vue
- Vuex
- Vue router
- How to customise a Webpack config
I deliberately did not use [https://cli.vuejs.org/](Vue CLI), as I wanted to gain a better understanding of how Webpack works

I am using [https://vuetifyjs.com](Vuetify) for the UI

I will write a proper readme at some point.
Out of the box, this will only work with the [CraftQL Craft CMS Plugin](https://github.com/markhuot/craftql) as it accepts & outputs GraphQL in a specific format.

That being said, it wouldn't take a lot to change the query & handling of the response.




## Running the app
Copy `.env.example` to `.env` and add the API URL & Bearer token

```
npm install
```

Serve locally
```
npm start
```

Build files into the `dist` directory
```
npm run build
```

## Example site
[https://lukehmu-craftql.netlify.com/](https://lukehmu-craftql.netlify.com/)

## Deployed to Netlify
[![Netlify Status](https://api.netlify.com/api/v1/badges/8e36033e-f1b4-4746-89ca-85818e417959/deploy-status)](https://app.netlify.com/sites/lukehmu-craftql/deploys)
