# integer_service
REST endpoint that returns the next available integer.

problem statement: https://gist.github.com/ankitwww/a519ebfd040bc171554ea2e9c0cfbe3e


## Requirements
0. An operating System(Linux/Macos/Windows)
1. NodeJS Installed
2. Curl/Postman Installed
3. Any mordern browser


## Installation
 0. Install [NodeJS](https://nodejs.org/en/) 
 1. run `npm init` to install packages
 2. run `npm start` to start server, default port is `3000`
 3. Instal CURL


## USAGE

#### 1. signup

`curl --location --request POST 'hostname:3000/user/signup/' --header 'Content-Type: application/json' --data-raw '{
   "email":"mail@domain.com",
   "password":"something"
}'`

#### 2. Login

`
curl --location --request POST 'hostname:3000/user/login' --header 'Content-Type: application/json' --data-raw '{
   "email":"mail@domain.com",
   "password":"something"
}'`

will return :
`{
   "message": "Auth Successful!!",
   "token": "XXXXXX"
}`
 
 use this token to send in header to  get current/next integer and reset integer.
 
#### 3. Get Current Integer(by default '0' for all users)
 
 `curl  'hostname:3000/v1/current --header 'Authorization: Bearer XXXXX'`

#### 4. Get Next Integer(logged-in-user specific increment)

`curl  'hostname:3000/v1/next' --header 'Authorization: Bearer XXXXX'`
 
#### 5. Reset integer to desired value(two ways)

With content type: Content-Type: application/x-www-form-urlencoded. (here 10 is the desired value)

`curl --location --request PUT 'localhost:3000/v1/current' --header 'Authorization: Bearer XXXXX' --data 'current=10'`

Or by passing it as a parameter. (here 10 is the desired value)

`curl  'hostname:3000/v1/reset/10' --header 'Authorization: Bearer XXXXX'`



