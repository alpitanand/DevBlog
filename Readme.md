# Welcome to DevBlog!
**Base Url** = https://devblogf.herokuapp.com/

Note-> For all authenticated routes pass token in the header with the key "token"

Login url => POST => https://devblogf.herokuapp.com/api/users/login

  Demo Payload = 
  ```` 
  { 
	  "email": "alpit@gmail.com",
	  "name": "Alpit",
	  "password": "TestPass" 
  } 
  ````

Register url => POST => https://devblogf.herokuapp.com/api/users/register

  Demo Payload = 
  ```` 
  { 
		"email":"alpit@gmail.com",
		"name": "Alpit",
		"password":"TestPass"
  } 
  ````

NewsFeed url => GET =>  https://devblogf.herokuapp.com/api/feed/newsFeed

Get specific article => GET => https://devblogf.herokuapp.com/api/feed/newsFeed/:id

Save Article => POST = > https://devblogf.herokuapp.com/api/feed/createArticle (Authenticated route)

 Demo Payload = 
  ```` 
{
	"title":"My article",
	"text": "Dummy text",
	"tags":["Dummmy"]
  } 
  ````
 