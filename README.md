# LavaBox

## What is LavaBox?
With our Dropbox accounts running out of space, [Jon Ander Romero](http://twitter.com/jonanone "Jon Ander Romero") and I decided to build a personal file management website to store files on Amazon S3.

## The goals
The first one: obviously, we want a cheap virtual hard drive, and we like Amazon S3. We know there are several options to manage S3 accounts, but we thought it was a great opportunity to build our own product and mix our development skills. Ehm, that was the second goal.

## The desired stack
* Decoupled frontend and backend (Typical SPA webapp)
* Frontend: BackboneJS
* Backend: REST API with Django and Tastypie
* Mobile apps for Android and iOS (maybe)

## The temporal stack
* Default Bootstrap (not very original... but it's fast)
* Parse.com powered backend. Since we are starting to build the frontend, we are using [Parse.com](http://parse.com "Parse.com") as temporal backend.

## Roadmap
1. Build the frontend app using Parse as temporal backend, without user management. From simplest (just BackboneJS) to more complicated (adding JST support, RequireJS modules...).

2. Build our own backend using Django and Tastypie.
3. Refactor the frontend to use our new brilliant Django API.
4. Add authentication and user session management.
5. Build the mobile apps.

### The dates
As fast as possible, while working on real commercial projects.

## The name
It's a bad joke in Spanish. Sorry for that.