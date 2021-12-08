# Tender Web App

Find your favourite restaurant with Tender Web App

# Installation

npm run build then run on localhost:5000

# Deployed URL
csc309-tender.herokuapp.com

# Instruction
## User Guide
* Main page
  * The main page of our web app is where you can see the "restaurant cards" (the picture in the middle). They contain information about the name and the address of the restaurant. You can click on the restaurant picture to see the details about it.

  * To see the next "restaurant card", simply swipe away the current card (click on the picture, drag it quickly and release). You will see the next card presented to you.

  * The three buttons below are the buttons for you to perform certain actions onto the current restaurant card. You can dislike, add to favourite and like the restaurant(from left to right). If you click on to the dislike/like button you will see that the colour will change.

  * The top of the page is all about navigation. The left most icon is the logo for this web app. You can click it on any page to go back to the main page. The star icon next to it will link you to the favourite page. On the top right, you will see the icons for restaurant and user log in. Once clicked, you will be directed to the login page.

* Restaurant Detail page
  * A page that contains all the restaurant information in detail
  * You can like/dislike/favourite the restaurant, and see the like count and dislike count
  * There is also a comment section, where you can add your own comments or look at comments from other users

* My favourites page
  * The favourite page is where you can see a list of restaurants that you have set as favourites. Be aware that you will be prompted to log in if you haven't done so yet. In the favourite page, you will see the picture of the restaurant that you set to favourite, its name and address. You can click the garbage bin icon to remove the restaurant from favourite.

* Login
  * If you are not logged in, the top right hand side of the page will let you choose from user/restaurant log in. You will enter the usernames and passwords (provided below). Onced logged in, the top right becomes the check profile icon and log out icon.

* Signup
  * inside the login page, if you dont already have an account, click sign up, then choose the sign up as a user

## Restaurant Owner Guide

* Signup
  * inside the login page, if you dont already have an account, click sign up, then choose the sign up as a restaurant

* Restaurant Profile Page
  * Once logged in restaurant users can edit there information by pressing the store icon on the top right. You can then change the information and save it.

## Admin Guide
* Admin can do everything the user and restaurant owners do, plus admin have access to a Admin page that can manage all the restaurants

# API Routes
## /Auth
* POST /auth/signup

```
  request body: {
    "username": "user10",
    "password": "user10",
    "userType": "USER"
  }
```
  userType can be USER or RESTAURANT, we disabled user self signup as admin

* POST /auth/login
```
  request body: {
    "username": "user",
    "password": "user"
  }
```
* GET /auth/logout

* GET /auth/check-session

## /api/user
* GET /api/user/favourites/:id

  get all the like/dislike/favorites of :id user

* POST /api/user/favourites/:id
```
  request body: {
    "favourite":"61ad5650a85522e9527e3e81"
  }
```  
  &nbsp;&nbsp;&nbsp;&nbsp;:id user adds 61ad5650a85522e9527e3e81 restaurant to favorite
  
```
  request body: {
    "like":"61ad5650a85522e9527e3e81"
  }
```
  &nbsp;&nbsp;&nbsp;&nbsp;:id user liked 61ad5650a85522e9527e3e81 restaurant
```
  request body: {
    "dislike":"61ad5650a85522e9527e3e81"
  }
```  
  &nbsp;&nbsp;&nbsp;&nbsp;:id user disliked 61ad5650a85522e9527e3e81 restaurant
  
  changes will be reflected in both user collection and restaurant collection

* DELETE /api/user/favourites/:id
```
  request body: {
    "favourite":"61ad5650a85522e9527e3e81"
  }
```  
   &nbsp;&nbsp;&nbsp;&nbsp;:id user remove 61ad5650a85522e9527e3e81 restaurant from favorite
  
```
  request body: {
    "like":"61ad5650a85522e9527e3e81"
  }
```  
   &nbsp;&nbsp;&nbsp;&nbsp;:id user undo like 61ad5650a85522e9527e3e81 restaurant
```
  request body: {
    "dislike":"61ad5650a85522e9527e3e81"
  }
```  
   &nbsp;&nbsp;&nbsp;&nbsp;:id user undo dislike 61ad5650a85522e9527e3e81 restaurant

  changes will be reflected in both user collection and restaurant collection

## /api/restaurant
* GET /api/restaurant

  get data of all the restaurants
* GET /api/restaurant/:id

  get data of :id restaurant
* PUT /api/restaurant/:id
```
  request body: {
    "name": "Popeyes",
    "address": "553 Bloor St W, Toronto, ON M5S 1Y6",
    "phoneNumber": "+1(416)351-3643",
    "image": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F06%2F09%2Fpopeyes.jpg&q=85",
    "description": "Popeyes Louisiana Kitchen, Inc., also known as Popeyes and formerly named Popeyes Chicken & Biscuits and Popeyes Famous Fried Chicken & Biscuits."
  }
```
  update profile of :id restaurant

* POST /api/restaurant/favorites/:id
```
  request body: {
    "userId": "61ad5a86e450f25fd6f5ac12",
    "username": "user",
    "message": "i love big mac!"
  }
```  
  add the comment in request body to :id restuarant

* DELETE /api/restaurant/comments/:id
```
  request body: {
    "commentId": "61aff8e0e51dae026f2cdad1"
  }
```
  delete the commentId comment from :id restuarant

# Log in credentials

Since there are three types of users for our project, we have three preset accounts:

* username: user, password: user
* username: rest, password: rest
* username: admin, password: admin

They correspond to a normal end user, a restaurant user who wish to post their store, and admin user.

# Third-parties

* React
* react-tinder-card
* material-ui
