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
 1. run `npm install` to install packages
 2. run `npm start` to start server, default port is `3000`
 3. Install CURL


## End Points

   1. /user/signup/
   2. /user/login
   3. /v1/current
   4. /v1/next
   5. /v1/reset/

## USAGE

**Replace hostname with  http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com for demo(port 80)**

**Replace http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com  with http://localhost:3000 for development**

#### 1. SignUp

`curl --location --request POST 'http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com/user/signup/' --header 'Content-Type: application/json' --data-raw '{
   "email":"mail@domain.com",
   "password":"something"
}'`

#### 2. Login

`
curl --location --request POST 'http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com/user/login' --header 'Content-Type: application/json' --data-raw '{
   "email":"mail@domain.com",
   "password":"something"
}'`

will return :
`{
   "message": "Auth Successful!!",
   "token": "XXXXXX"
}`
 
 use this token to send in header to  get current/next integer and reset integer.
 
#### 3. Get current Integer(by default '0' for all users)
 
 `curl  'http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com/v1/current --header 'Authorization: Bearer XXXXX'`

#### 4. Get next Integer(logged-in-user specific increment)

`curl  'http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com/v1/next' --header 'Authorization: Bearer XXXXX'`
 
#### 5. Reset integer to desired value(two ways)

With content type: Content-Type: application/x-www-form-urlencoded. (here 10 is the desired value)

`curl --location --request PUT 'http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com/v1/current' --header 'Authorization: Bearer XXXXX' --data 'current=10'`

Or by passing it as a parameter. (here 10 is the desired value)

`curl  'http://ec2-13-234-59-145.ap-south-1.compute.amazonaws.com/v1/reset/10' --header 'Authorization: Bearer XXXXX'`



