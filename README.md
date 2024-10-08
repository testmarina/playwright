## Functional Testing for 'Let's Shop'
### Overview
This repository contains functional tests to ensure the application features work as expected. Functional tests simulate real user interactions with the application and validate that the UI across various scenarios.

### Table of Contents
- Introduction
- Test Environment
- CI/CD Integration
- Test Reporting
- Conclusion

### Introduction
The functional tests in this repository are created using the Page Object Model (POM) and Fixture design patterns for better maintainability and reusability. Below are some of the key areas tested:
- Search Validation: Verifies that users can navigate to 'Let's Shop' via a Google search.
- Login Validation: Includes negative test cases for handling empty fields, as well as incorrect email and password combinations.
- UI Interactions: Tests navigation between pages, button clicks, and link redirects to ensure smooth user experience.

### Test Environment
- Playwright
- TypeScript

### CI/CD Integration
The functional tests are integrated into GitHub Actions for Continuous Integration (CI). The tests are automatically triggered on pull requests and commits to specific branches.

### Test Reporting
Test reports are automatically generated after each test run. These reports help in identifying which tests passed or failed, making it easier to debug issues.

### Conclusion
This README provides an overview of how functional tests are run and maintained in this GitHub repository. By following this guide, you can run tests locally, contribute new tests, and understand how the CI/CD pipeline automates test execution.
