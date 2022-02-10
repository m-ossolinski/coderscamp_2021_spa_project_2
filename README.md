# CODERSCAMP 2021 SPA PROJECT: REACT BUDGET APP

## Table of contents

- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
- [Overview](#overview)
  - [The project](#the-project)
  - [Video](#video)
  - [Links](#links)
- [Our process](#our-process)
  - [Built with](#built-with)
  - [What We learned](#what-we-learned)
  - [Project structure](#project-structure)
  - [How to run the project](#how-to-run-the-project)

## Authors

To code this project our team collaborated as part of CodersCamp Bootcamp. The Budget App was coded by students with help of our amazing Mentors and delivered on 10.02.2022 for demo presentation. Please feel free to check all collaborator's Github profiles to get to find out more about them and to see their projects.

Students:

- [Hanna Kozak](https://github.com/hannakozak)
- [Krzysztof Kos](https://github.com/Kosik33i6)
- [Agnieszka Urbanowicz](https://github.com/axseinga)
- [Jakub Zakrzewski](https://github.com/zakrzaq)
- [Sylwia Prusak](https://github.com/sylcym)

## Acknowledgments

Big shoutouts to our Mentors: [Mateusz Ossoliński](https://github.com/m-ossolinski) and [Radek Bajor](https://github.com/radekwojpl) for providing us guidance, help, and code reviews during our work.

## Overview

### The Project

Our goal was to create MVP for a client who was interested in Budget App for desktop. We decided that the most important and basic features are:

- User can add a new transaction to the app via a form
- User can see a list of all past transactions
- User can edit or delete transaction
- User can create, edit or delete categories for transactions
- User can see summaries in form of charts

### Video

[ short video of app ]

### Links

- [Check live site]()

## Our process

### Built with

- React
- React Hooks
- React Router
- React chartjs-2
- React chart.js
- PropTypes
- json server
- concurrently lib
- axios lib
- Styled Components
- React icons
- yup lib
- uuid lib

The environment was prepared and configured with the use of:

- npm
- babel
- eslint
- prettier

### What we learned

1. We learned about React Router and using routes.

We split the view of the app for a sidebar and four pages (Homepage, Transactions, Stats, and Categories). This way we were able to group user activities logically.

```
  <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/transactions" element={<TransactionsPage />} />
      <Route exact path="/stats" element={<StatsView />} />
      <Route exact path="/categories" element={<CategoriesPage />} />
    </Routes>
```

2. We learned about Modals in React and how to create Portals to make use of them.

3. And we deepened our knowledge of forms and form validations and used the state to control inputs.

We decided to wrap our transaction and categories forms in modals so it gives the app more space for other features in the future and improves UX. Having in mind our future users we created forms with smooth validation that fires instantly when there is an error in the form field so it gives User the chance to correct all fields before submitting the form. For form validation, we used the yup library.

[here goes video with form validation]

3. We learned a modular approach to creating applications.

During our work, we tried to make usage of the modular approach and create as much as possible reusable components and pieces of code. Great examples of this are `<Button/>`, `<Modal>`, `<Loader/>` and form inputs components. You can find them in this directory:

```
src/
├── components/
│   ├── Button
│   ├── form
│   ├── Loader
│   Modal.js
```

### Project structure

The src folder contains all of the project components and logic.

```
src/
├── assets/
├── components/
├── pages/
├── routes/
├── services/
│   ├── api
│   ├── context
│   ├── helpers
│   ├── hooks
│   ├── utils
└── styles/
└── App.js
└── App.styled.js
└── index.html
└── index.js
└── styles.css
├── test/
├── .env
├── .eslint.json
├── .gitignore
├── .prettierrc.json
├── db.json
├── package-lock.json
├── package.json
├── README.md
```

### How to run the project

npm run dev - development live server
npm run prod - build production distribution

To run the app follow steps below on your local machine:

1. Clone git repository and open file on your local device in Code editor.
2. Run `npm install` command to initialise the project.
3. Run `npm run dev` to open live development server and to run json-server with database.

The app will run on port [http://localhost:1234](http://localhost:1234) and json resources on [http://localhost:8000/transactions](http://localhost:8000/transactions) and [http://localhost:8000/categories](http://localhost:8000/categories)
