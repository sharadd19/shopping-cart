# Shopping Cart 

_Date: Jun 2024_

You can find the deployed website [here](https://shopping-cart-4erk3xumq-sharadd19s-projects.vercel.app/)

## Description 
This project was part of one of the projects to complete in [_The Odin Project_](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart) course for full-stack web development. 

The goal of this application was to build a simple web application to allow users to buy products and add them to their bag. 

## Built with
- React 

## Key concepts and learnings
- **Routing** in **React** to allow navigation between the home page, store page and bag page
- **State management** in React to keep track of items in the bag as well as products
- **useMemo** hook to store the results of the price of our bag so that we don't calculate it every time we open the bag, but instead every time we add an item to the bag
- Storing the results of an **API** call in a **loader function** so that it can be accessed throughout a component
- **Outlet context** and passing data between components
- **Lifting the state** by putting states in `app.jsx`
- **Searching** for products using query parameters
- **Testing** using the React Testing Library

## Challenges
- Managing state between components by using Outlet Context to pass state values between parent and children
- Increasing performance by storing bag price in useMemo hook
- Getting the results of the API into the loader function so that it can be used in the Store component
- Handling click events between components 
- React testing



## Project Structure 
```
shoppping-cart
├── public
│   ├── images
├── src
│   ├── assets
│   ├── components
│   ├── tests
│   ├── App.jsx
│   ├── main.jsx
│   ├── Router.jsx
│   ├── ErrorPage.jsx
│   ├── ...
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
├── ...

```

## How to run the project
1. Clone this repo on your local machine

2. Navigate to the project
```bash
cd shopping-cart
```

3. Install dependencies using node package manager:
```bash
npm install
```

4. After this you can run the project in development:
```bash
npm run dev
```