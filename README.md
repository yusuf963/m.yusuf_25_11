# InteliStylee Test

The solution:
The website should load garments from a MongoDB database. You can load data into your
database from the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
and see the Redis section in this file for more information.

# the used Tech stack.

ReactJs Node.js, Express, MongoDB, Mongoose, Bootstrap Html, Sass and Puppeteer & jest for testing.

attempt to use the following technologies:
Redis for caching
 - [Redis](https://redis.io/) and see the Redis section in this file for more information.

---

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.
node -v >= 14.6.0 && npm -v >= 8.1.4

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.16.0

    $ npm --version
    8.1.4

If you need to update `npm`, you can make it using `npm`! After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Clon the repository

    $ git clone https://github.com/yusuf963/m.yusuf_25_11.git
    then `m.yusuf_25_11`

## connect to mongo_atlas the database

visit https://cloud.mongodb.com/ and create a new database

## Install the dependencies and run the App.

open the project in your editor and run the following command.
in the root of the project folder, run the following command.
`cp .env.example .env`
`$ npm install`
add yout MONOG DB connection string to the .env file
the cd to cline and run the following command.
`$ npm install`

## Run the App
you can run the two apps in one command concurently
in your root folder run the following command.
`npm run dev`

## Or run individually
open the project in your editor and run the following command.
`cd clinet`
`$ npm run start`
React will be running on port 3000.
localhost:3000/

open a new terminal tab then navigate back to the project root folderr and run the following command.
`$ npm run serve`
Server will be running on port 5000.
localhost:5000/

## Run the tests
## jest & puppeteer

this test using puppeteer and Jest. for automated headless testing.
for the automated tests, you can run the following command.(make sure react and node app are running & you are in the server folder)
`$ npm run test `

## challenges & usefusll commands:
usefull command
`rm -rf .git ## delete git from the folder e.g client`



## install Redis on Mac

-Using Homebrew it is quite easy to install
1.brew update
2.brew install redis
-To check the version of Redis you can use the command:
redis-cli ping
//if you are getting PONG Then you are good to go

## install redis on windows

1.Go to the releases page of the Redis for Windows repo: https://github.com/MicrosoftArchive/redis/releases
2.Download the 'Redis-x64-xxx.zip' file. You can use any version. Make sure you do not download the 'source code' zip.
3.Unzip the file
4.In the newly created folder, run redis-server.exe
5.You should see a window appear that says redis is running on port 6379.

## install mongo on windows

1.Go to the releases page of the MongoDB repo: https://www.mongodb.com/download-center/community
2.Download the 'MongoDB Community Edition-x86_64-xxx.zip' file. You can use any version. Make sure you do not download the 'source code' zip.
3.Unzip the file
4.In the newly created folder, run mongod.exe
5.You should see a window appear that says mongod is running on port 27017.

## install mongo on mac

1.Go to the releases page of the MongoDB repo: https://www.mongodb.com/download-center/community
2.Download the 'MongoDB Community Edition-x86_64-xxx.zip' file. You can use any version. Make sure you do not download the 'source code' zip.
3.Unzip the file
4.In the newly created folder, run mongod.exe
5.You should see a window appear that says mongod is running on port 27017.

## install mongo on linux

1.Go to the releases page of the MongoDB repo: https://www.mongodb.com/download-center/community
2.Download the 'MongoDB Community Edition-x86_64-xxx.zip' file. You can use any version. Make sure you do not download the 'source code' zip.
3.Unzip the file
4.In the newly created folder, run mongod.exe
5.You should see a window appear that says mongod is running on port 27017.
