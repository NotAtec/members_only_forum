# Members Only (Rails Forum)

A forum built on Rails 7.0, HTML/CSS and JS.

The forum works on a principle that posts can be seen by everyone, but the author of a post can only be seen when you are logged in.

To post a story, you have to be logged in on an account.

[Live Preview](https://afternoon-tor-77778.herokuapp.com/) <--

## Features

- Recommended Posts (Selects 5 random posts on a sidebar)
- Railsy webpage building, so footer & headers are generic and created in `application.html.erb`
- Partials for forms, feed, and profile.
- A simple profile when logged in, with a count of created posts.
- Clickable posts on the main page, which link to the full post.
- A generated feed, with recent posts at the top.
- UI created with Bulma.io CSS library
- User authentication by email & password, handled by the Devise gem

## Built With

- Frontend: HTML5 / CSS3 / JS
- Backend: Rails 7.0
  - Bulma.io for Rails
  - Simple Form
  - Devise
  - Better Errors
  - Guard & Guard Livereload
