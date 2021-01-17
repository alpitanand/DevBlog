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

Demo Response = 
 ````
 "article": {
        "tags": [
            "Dummmy"
        ],
        "_id": "6003feeb851171207c82fd40",
        "title": "My uii",
        "text": "Lorem Ipsum is simply dummy text of the printing",
        "userInfo": {
            "_id": "5ffb43000d7c5003a02edae9",
            "email": "alpit@gmail.com",
            "name": "Alpit"
        },
        "textPreview": "Lorem Ipsum is simply dummy te",
        "author": "Alpit",
        "createdAt": "2021-01-17T09:10:03.957Z",
        "lastUpdatedAt": "2021-01-17T09:10:03.957Z",
        "__v": 0
    }
}
````

Save Article => POST = > https://devblogf.herokuapp.com/api/feed/createArticle (Authenticated route)

 Demo Payload = 
  ```` 
{
	"title":"My article",
	"text": "Dummy text",
	"tags":["Dummmy"]
  } 
  ````
 