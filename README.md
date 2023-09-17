# Coding Assignment

## About
Coding Assignment is a test to assess the code expertise of a developer. In this assignment, following stack was used
  - **React:** For a simple yet powerful library because of Virtual DOM, in built one directional state management and its Reconciliation and Diffing algorithm to achieve good screen rendering performance 
  - **TypeScript:** To add static typing support to Javascript
  - **Webpack:** To bundle JS and Web Assets
  - **CSS:** The basic CSS styles injected using `style` tag for few Flex, Margin, Padding, Typography utilities
  - **CSS Modules:** A nice way to organize CSS files at component or page level
  - **Jest:** For a complete unit test cases framework
  - **React Testing Library:** For JS DOM and interactions

## Directory Structure (Code Configuration)

The following division is used to show project configuration and scalability on how code can be divided:

  1. **Modules** e.g. appusage, module1, module2 directories.
  2. **Pages of a particular module:** e.g.components and pages within the appusage directory -- contains most of the code of this assignment
  3. **Common Components:** e.g. components directory
  4. **Common Apis:** e.g. api directory
  5. **Common Typescript Interfaces and Enums:** e.g. interfaces directory and
  6. **Common Utility Functions** e.g. helpers directory

> There might be few empty directories like **api, module1, module2** and those are created on purpose to create placeholders for the future code.


## Steps to run the project on local machine
  - Ensure that you've node v18.17.1 installed on your local machine. You may use [nvm](https://github.com/nvm-sh/nvm) to easily switch between different node versions.
  - Project is hosted at https://github.com/riteshjagga/coding-assignment
  - Execute `mkdir coding-assignment` to create a directory on your local machine
  - Execute `cd coding-assignment` to go inside this created directory
  - Execute `git clone https://github.com/riteshjagga/coding-assignment.git` to clone the repository
  - Execute `npm install` to install dependencies
  - Execute `npm run start` to start the webpack development server which will launch the **dist/index.html** file to view the output
  - Execute `npm run test` to run the unit test cases

## Enhancements & More...

The following tasks can be further worked upon by investing more effort and time


  1. **Linting**: Static code analysis of JS and CSS code using [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) packages and extending them using their plugins for greater code consistency and styling.

  1. **Typescript in Unit Test Cases**: Typescript is added in the source code and *need to check if it is being checked in unit test cases*.

  
  1. UI and UX improvements
     - Use Normalize CSS for consistent CSS defaults on a number of browsers
     - Create a CSS Flex, Margin, Padding, Typography utilities for frequently used styles and configure them using Webpack's CSS loader. This is in addition to the CSS Modules which are working in the project. 
     
        > It has been found that a mix of CSS Utilities and CSS Modules is a good pair to organize the CSS styling needs.

     - Create more reusable components e.g. **Input**, **Button** components
     - Enhance **Spinner** component experience which sounds bit flashy when paginating

  
  1. Docker for containerization of the project for easy deployment on dev machines for development and server to launch
  
  1. CI/CD, for example, Jenkins to test and build the code as and when code is pushed to the main/master branch

  ---
  That's all!
  