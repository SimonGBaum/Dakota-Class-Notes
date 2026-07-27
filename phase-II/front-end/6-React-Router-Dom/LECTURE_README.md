# Intro to React Router DOM

## Part I: Intro to the Router

- What is `react-router-dom`?
- Why/when do we need a "react-router"?
- Installing react-router:

```bash
npm install react-router-dom
```

- Project structure with `Pages`
- creating the router
- connecting the router to `main.jsx`
  - <RouterProvider router={router}/>
- connecting the children to `App.jsx`
  - <Outlet/>

## Part II: Router Pages and Url Patterns

- Pages vs Components
  - are they different
  - project organization
- adding pages
  - about page
  - Not found page
  - error page
- connecting them to the router url patterns:
  - "/" => Home Page
  - "about" => About Page
  - "*" => Not Found Page
  - errorElement => ErrorPage
- creating a NavBar with React BootStrap
  - Link vs a elements

