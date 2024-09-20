# Netflix GPT

 - Create React App
 - Configured TailwindCSS
 - Header
 - Routing of App
 - Login Form
 - Sign up Form
 - Form Validation
 - useRef
 - Firebase Setup
 - Deploying our app to production
 - Create SignUp User Account
 - Implement Sign In user Api
 - Created Redux Store with userSlice
 - Implemented Sign out
 - Update Profile
 - BugFix: Sign up user displayName update
 - BugFix: if the user is not logged in, redirect /browse to login page and vice versa
 - Unsubscribed to the onAuthStateChanged callback
 - Register TMDB API and create an app and get access token
 - Get Data from TMDB now playing movies list API 
 - Custom Hook for Now Playing Movies
 - create movieSlice
 - Update Store with movies Data
 - Planning for Main Container and secondary container
 - Fetch Data for trailer Video
 - Update Store with Trailer Video Data
 - Embedded the Youtube video and make it autoplay and mute
 - Tailwind Classes to make Main Container look awesome
 - Build Secondary Component
 - Build Movie List
 - Build Movie Card
 - TMDB Image CDN URL
 - Made the Browse page amazing with Tailwind CSS
 - usePopularMovies Custom Hook
 - GPT Search Feature
 - GPT Search Bar
 - Multi-language feature
 - Get google generative AI Api key
 - Gpt search Api call
 - fetched gptMoviesSuggestions from TMDB
 - Reused Movie list component to make movie suggestion container
 - Memoization
 - Added .env file
 - Responsiveness

 # Features
 - Login/Signup 
   - Sign In / Sign up Form
   - redirect  to Browse Page
 - Browse Page ( after authentication)
   - Header
   - Main Movie
      - Trailer in Background
      - movie title and desc
    - Movie suggestions
      - Movie lists * N
  - NetflixGPT
    - Searh Bar
    - Movie Suggestions

  # Steps for Deployment
  0. Install firebase CLI - `npm install -g firebase-tools`
  1. Firebase Login - `firebase login`
  2. Initialize Firebase - `firebase init`, then select Hosting
  3. Deploy command - `firebase deploy`