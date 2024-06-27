# Movie-watchList-Application

Introduction
The Movie Watchlist application is a web-based tool that allows users to manage a list of movies they want to watch. Users can add, edit, and delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. The application utilizes Redux for efficient and predictable state management.

Key Features
Add Movies: Users can add movies to their watchlist by providing details such as the movie title, description, release year, and genre.
Edit Movies: Users can edit the details of movies already in their watchlist.
Delete Movies: Users can delete movies from their watchlist.
Mark Movies as Watched/Unwatched: Users can toggle the status of a movie between watched and unwatched.
Rate and Review Movies: Users can rate movies on a scale of 1 to 5 stars and provide a text review for each movie.
State Management with Redux: All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) are managed using Redux.
Technology Stack
Frontend
React.js: For building the user interface.
Redux: For state management.
CSS/SCSS: For styling.
Backend
Node.js: For server-side scripting.
Express.js: For handling routes and middleware.
JSON Server: For initial mock API implementation.
MongoDB: For persistent storage in later stages.
Database
JSON File: For storing movie data in the initial phase.
MongoDB: For persistent storage

API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Authenticate a user and get a token.
Movies
GET /api/movies: Get all movies in the watchlist.
POST /api/movies: Add a new movie to the watchlist.
PUT /api/movies/
: Edit a movie's details.
DELETE /api/movies/
: Delete a movie from the watchlist.
PUT /api/movies/
/toggle: Toggle a movie's watched status.
PUT /api/movies/
/rate: Rate a movie.
PUT /api/movies/
/review: Review a movie.
Usage
Home Page: Displays the list of movies in the watchlist. Users can add a new movie, edit or delete existing movies, and mark movies as watched/unwatched.
Add/Edit Movie Page: Provides a form for adding or editing movie details. Fields include Title, Description, Release Year, and Genre.
Movie Details Page: Displays movie details including title, description, release year, genre, watch status, rating, and reviews. Options to edit or delete the movie, mark it as watched/unwatched, and add/edit a rating and review.