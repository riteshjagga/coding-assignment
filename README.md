# Coding Assignment

## About
Coding Assignment is a test to assess the code expertise of a developer. In this assignment, following stack was used
  - React: For a simple yet powerful library because of Virtual DOM, in built one directional state management and its Reconciliation and Diffing algorithm to achieve good screen rendering performance 
  - TypeScript: To add static typing support to Javascript
  - Webpack: To bundle JS and Web Assets
  - CSS Modules: A nice way to organize CSS files at component or page level
  - Jest: For a complete unit test cases framework
  - React Testing Library: For DOM and interactions

## Code Configuration/Directory Structure

The following division is used to show project configuration and scalability on how code can be divided:

  - **Modules** e.g. appusage, module1, module2 directories.
  - **Pages of a particular module:** e.g.components and pages within the appusage directory (Contains most of the code of this assignment)
  - **Common Components:** e.g. components directory
  - **Common Apis:** e.g. api directory
  - **Common Typescript Interfaces and Enums:** e.g. interfaces directory and
  - **Common Utility Functions** e.g. helpers directory

> You may find few empty directories like **api, module1, module2** and those are created on purpose to create placeholders for the future code:


## Steps to run the project locally
  - Project is hosted at https://github.com/riteshjagga/coding-assignment
  - Execute `git clone https://github.com/riteshjagga/coding-assignment.git`
  - Execute `cd coding-assignment` to go to the directory where repository is cloned
  - Execute `npm install` to install dependencies
  - Execute `npm run start` to start the webpack development server which will launch the **dist/index.html** file to view the output
  - Execute `npm run test` to run the unit test cases

## Enhancements & More...

The following tasks can be further worked upon by investing more effort and time


  1. **Linting**: Static code analysis of JS and CSS code using ESLint and Stylelint packages and extending them using their plugins for greater code consistency and styling.

  1. **Typescript**: Typescript is added in the source code and *need to check if it is being checked in unit test cases*.

  
  1. UI and UX improvements
     - Use Normalize CSS for consistent CSS defaults on a number of browsers
     - Create a CSS Flex, Margin, Padding, Typography utilities for frequently used styles and configure them using Webpack's CSS loader. This is in additional to the CSS Modules which are working in the project. 
     
        > It has been found that a mix of CSS Utilities and CSS Modules is a good pair to organize the CSS styling needs.

     - Create more smaller reusable components e.g. Input, Button components
     - Enhance Loader experience which sounds little but flashy when paginating

  
  1. Docker for containerization for deployment on dev machines for development and server to deploy the app
  
  1. CI/CD, for example, Jenkins to test and build the code as and when code is pushed to the main/master branch

  ---
  That's all!
  