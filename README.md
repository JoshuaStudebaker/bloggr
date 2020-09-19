# Blogger

![](https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)

You have been hired to complete the front-end of Bloggr, a blogging website built by The Blog Company! They have already hired out to have an API built and that has been deployed to https://cw-bloggr.herokuapp.com/ which also holds the documentation for using that API. Your job is to make a beautiful client that will function in a way they anticipate.

## Goals:

In this checkpoint students will create a client interface that utilizes a blog API. Students will demonstrate their knowledge of the VueJS framework, creating a multipage SPA application that utilizes Vue, Vuex, and Vue-Router. In addition they will work with Auth0 to manage client Authentication.

## The Setup

This project consists solely of the client side of the application. The back-end (server) will be handled for you. However, you must write your client to accommodate this functionality on the front-end. The `bcw-create > other > bloggr` should get all your authentication setup done for you as well as providing you the authentication navbar which allows login/logout and authentication persistence. From there the rest of the coding is up to you.

### Step 1

Review the API documentation provided in the link above you will find that there are several extended routes / functionality that you are not required to complete in this checkpoint, however these extentions can really bolster this project, so take a moment and familiarize yourself with what the API supports.

Your auth should be setup for you, so you DO NOT need to change anything to make login/logout/authenticate work.

You may wish to refresh your self on a few things available to you from the bcw auth setup. Within a vue component you have a few pieces of information regarding the users authentication.

> `this.$auth.isAuthenticated` returns a bool as to whether or not the user is logged in \
> `this.$auth.userInfo` if logged in this will provide you with the information that is made public from their login, this includes things like email, name and avatar

### Step 2

You will need to fulfill the following user stories:

- "As a user, I can see all the blogs on the `home page`, so that I do not have to log in to see all the blogs"
- "As a user, I can click on a blog to be taken to the `blog page`, so that I can read the contents of the blog and its comments"
- "As a user, I can login to see my `profile page`, so that I can see all of my blogs"
- "As a user, I can create, edit and delete blogs, so that I can easily create content to share with others"
- "As a user, I can create, edit and delete comments on the `blog page`, so that I can provide feedback to other writers on their blog"

These user stories can be implemented as a stretch goals

- "As a user, I can save a blog as a draft, so that I can save it without having it published right away"
- "As a user, I need to be able to search all blogs by a certain author, so that I can filter down the blogs to only what they have created"
- "As a user, my profile can also show a list of all my comments, with a link to the blog that I had commented on"
- "As a user, I can tag blogs, so that I can search for them via query parameters and filter down blogs"

### Step 3

Once you have the appropriate functionality, add a theme the site in whatever way you see fit. What types of blogs are on your page? Food-blogs, Gaming blogs, Fitness blogs, add some css and flair to increase the look of your page from a simple blog engine to something that reflects your interests.

## Requirements:

#### Visualization

- [ ] `Home page` displays all published blogs (response from a standard get request)
- [ ] Blogs on the `home page` are listed as title and author
- [ ] Clicking the link users are taken to a `blog page`
- [ ] Refreshing while on the `blog page` does not renavigate the user, and the blog still shows its contents
- [ ] The `blog page` shows all comments for that blog

#### Functionality

- [ ] Users Can Register, Login, and Logout (this should work out of the box, don't break it)
- [ ] Once logged in Users can Create Edit and Delete Blogs
- [ ] Once logged in Users can Create Edit and Delete Comments
- [ ] Users can only modify/delete data they created


### API Routes

#### Profile: _"api/profile"_

Schema:

```javascript
    subs: [{ type: String, unique: true }]
    email: { type: String, lowercase: true, unique: true }
    name: { type: String, required: true }
    picture: { type: String }
```

- GET: '/' returns users profile, creates one if it does not exist\*
- GET: '/blogs' returns logged in users Blogs\*\*
- GET: '/comments' returns logged in users Comments\*\*
- PUT: '/' Allows user to edit their own profile\*\*

#### Blog _"api/blogs"_

Schema:

```javascript
  title: { type: String, required: true }
  body: { type: String, required: true }
  published: { type: Boolean, default: true }
  creatorEmail: { type: String, required: true }
```

- GET: '/' Returns all pubished blogs \*\*\*
- GET: '/:id' Returns blog by Id
- GET: '/:id/comments" Returns comments for a blog
- POST: '/' Create new Blog \*
- PUT: '/:id' Edits Blog \*\*
- DELETE: '/:id' Deletes Blog \*\*

#### Comments _"api/comments"_

```javascript
  body: { type: String, required: true }
  blog: { type: ObjectId, ref: "Blog", required: true }
  creatorEmail: { type: String, required: true }
```

- POST: '/' Create new Comment \*
- PUT: '/:id' Edits Comment \*\*
- DELETE: '/:id' Deletes Comment \*\*

> \* _requires user login_ \
> \*\* _requires login and ownership of data_ \
> \*\*\* _accepts query parameter "creatorEmail" and filters for that creator_

deployed to: https://cw-bloggr.herokuapp.com/
