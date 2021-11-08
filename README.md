# Tender Web App

A restaurant recommendation web application, created with React.

## Installation Instructions

The app runs just like any other React app. Download (or git clone) the files into your local machine and cd into the directory. Run "npm install" to install all the dependencies of the app. Once done, run "npm start" to start the app. The app will be on [http://localhost:3000] given that port 3000 is not occupied.

## User Guide
* Main page
  * The main page of our web app is where you can see the "restaurant cards" (the picture in the middle). They contain information about the name and the address of the restaurant. You can click on the restaurant picture to see the details about it. Click anywhere outside of the popup window to go back.

  * To see the next "restaurant card", simply swipe away the current card (click on the picture, drag it quickly and release). You will see the next card presented to you.

  * The three buttons below are the buttons for you to perform certain actions onto the current restaurant card. You can dislike, add to favourite and like the restaurant(from left to right). If you click on to the dislike/like button you will see that the colour will change.

  * The top of the page is all about navigation. The left most icon is the logo for this web app. You can click it on any page to go back to the main page. The star icon next to it will link you to the favourite page. On the top right, you will see the icons for restaurant and user log in. Once clicked, you will be directed to the login page.

* Favourite page
  * The favourite page is where you can see a list of restaurants that you have set as favourites. Be aware that you will be prompted to log in if you haven't done so yet. In the favourite page, you will see the picture of the restaurant that you set to favourite, its name and address. You can click the garbage bin icon to remove the restaurant from favourite.

* Login
  * If you are not logged in, the top right hand side of the page will let you choose from user/restaurant log in. You will enter the usernames and passwords (provided below). Onced logged in, the top right becomes the check profile icon and log out icon.

* Profile
  * Once logged in restaurant users can edit there information by pressing the profile icon on the top right. You can then change the information and save it.

## Admin Guide
* The main page will be the same as normal users. Onced logged in, you will be able to edit all the restaurant information.

## Log in credentials

Since there are three types of users for our project, we have three preset accounts:

* username: user, password: user
* username: rest, password: rest
* username: admin, password: admin

They correspond to a normal end user, a restaurant user who wish to post their store, and admin user.

## Third-parties

* React
* react-tinder-card
* material-ui
