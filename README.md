
//--------------------------------------------------
GIT:

git init
git remote add origin https://github.com/gutierr3z/reactpractice4.git
git remote -v

create README.md

git add .
git commit -m 'initial commit'

// push the current branch and set the remote as upstream
git push -u origin master

create .gitigmore

    node_modules
    www/bundle.js

//--------------------------------------------------
NPM:

npm init -y

//--------------------------------------------------
BABEL:

npm install --save babel-core
npm install --save babel-preset-latest
npm install --save babel-preset-react

create .babelrc

    {
        "presets": [
            ["latest", { "modules": false }],
            "react"
        ]
    }

//--------------------------------------------------
WEBPACK:

npm install --save webpack babel-loader

create src/app.js
create webpack.config.js


//--------------------------------------------------
EXPRESS:

npm install --save express webpack-dev-middleware

create server.js
create www/index.html

//--------------------------------------------------
REACT:

npm install --save react react-dom

//--------------------------------------------------