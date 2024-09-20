import React from 'react';
import Login from './Login';
import Browse from './Browse';
import Error from './Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GptError from './GptError';
import MovieTrailer from './MovieTrailer';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/error",
            element: <Error />
        },
        {
            path: "/gpterror",
            element: <GptError />
        },
        {
            path: "/movie/:youtubeKey", // dynamic movie ID parameter in the URL
            element: <MovieTrailer />
        }
    ]);

    

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
