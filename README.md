# InteliStylee Test

The solution:
The website should load garments from a MongoDB database. You can load data into your
database from the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
# the used Tech stack.
ReactJs Node.js, Express, MongoDB, Mongoose, Bootstrap Html, Sass and Puppeteer & jest for testing.

attempt to use the following technologies:
Redis for caching

---

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node

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
    6.14.11

If you need to update `npm`, you can make it using `npm`! After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Clon the repository

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITL
    then `cd PROJECT_TITLE`
##  connect to mongo_atlas the database
visit https://cloud.mongodb.com/ and create a new database


## Install the dependencies and run the App.

open the project in your editor and run the following command.

`cd clinet`
`npm install`
once the installation is done, you should be able to run the following command.

`$ npm run start`
React will be running on port 3000.
localhost:3000/
open a new terminal tab then navigate back to the project root folderr and run the following command.

`cd server`
`npm install`
`cp .env.example .env`
add your mongo_atlas credentials in the .env file
once the installation is done and you finished configuring .env file, you should be able to run the following command.
`$ npm run serve`
Node App will be running on port 5000.
localhost:5000/

## Run the tests
this test using puppeteer and Jest. for automated headless testing.
for the automated tests, you can run the following command.(make react and node app are running & you are in the server folder)
`$ npm run test `

## Simple build for production

    $ yarn build
Database Deployments new cluster on atlas mongo DB 1-3 minutes

challenges:

- had a problem with mongo command line so I had ro srearch and download some excutable files (light size) to help me connect to my atlas DB in the cloud via CLI  
  refrence: https://stackoverflow.com/questions/31055637/getting-mongoimport-is-not-recognized-as-an-internal-or-external-command-ope

run the server
npm run serve
React
run client
npm run start

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

usefull command
rm -rf .git ## delete git from the folder e.g client

Task:
Your task is to build a (single page) website that I can search for a garment (e.g. black hat) and
it should display the garments that match the search criteria.

## I studied the data I have

## what is the match criteria?

## the records are duplocated as the id of the item did,'t work as a unique keys

## challengers, react router dome upgrad and downgrade

## while trying to powerup the component

#

## in this project I used the following technologies:

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

## jest & puppeteer

The solution:
The website should load garments from a MongoDB database. You can load data into your
database from this file:
https://stylr-ai-engine-srv-data.s3.eu-west-1.amazonaws.com//srv/data/new_scrapes/shopstyle-168
9-men-18-03-2019/garment_items.jl
You have the freedom to use any build toolchain or helper libraries necessary, but you must
stick to our core technologies of ReactJS for the frontend and NodeJS or Python for the
backend.
As part of the deliverable, there should be automated tests for all the possible use cases of the
task.
Success Criteria:

- Application architecture and framework best practices for the framework in use are
  followed and understood.
- Code is formatted well and easy to follow. Variable and function names make sense
- Application gracefully handles database error cases and is resistant to unexpected
  messages.
- Database queries are optimised for performance
- You will be evaluated on the use of design patterns.
- Test coverage of the web page is sufficient and thought has been put into
  what areas of the application should and shouldn’t be tested.
  Bonus Points (optional):
- Design an infrastructure architecture diagram that can be used to scale the website to
  thousands of searches per second

Submission Requirements:

- Send an email to your recruiter with a link to a public git repository (in
  GitHub/BitBucket/GitLab, etc) with the name [firstname]-[submission date].
- Provide a link to a hosted version of the project
- You will be asked to screen share and walk through this app & code in your next
  interview, please have it ready to be run prior to the interview.
