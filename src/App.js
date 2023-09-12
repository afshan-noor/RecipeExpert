import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import AboutUs from "./pages/Choose";
import RecipeInfo from './components/RecipeInfo'
import RandomRecipe from "./components/RandomRecipe";
import ErrorPage from "./components/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'randomRecipe', element: <RandomRecipe /> },
      { index: true, element: <Home /> },
      { path: 'restaurant/:MealId', element: <RecipeInfo /> }, 
      { path: 'aboutUs', element: <AboutUs /> },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
