## Functional Testing for 'Let's Shop'
### Overview
This repository contains functional tests to ensure the application features work as expected. Functional tests simulate real user interactions with the application and validate that the UI across various scenarios.

### Table of Contents
#### Introduction
#### Test Environment
#### CI/CD Integration
#### Test Reporting
#### Conclusion

UI Interactions: Navigation between pages, button clicks, and link redirects.
Search Validation: navigation to 'Let's Shop' by Google search
Login Validation: negative testing: empty filed and incorrect email & password validation
Data Handling: Ensure the data displayed on the UI is correctly fetched and updated.

### Test Environment
Playwright
TypeScript

### CI/CD Integration
The functional tests are integrated into GitHub Actions for Continuous Integration (CI). The tests are automatically triggered on pull requests and commits to specific branches.

### Test Reporting
Test reports are automatically generated after each test run. These reports help in identifying which tests passed or failed, making it easier to debug issues.

### Conclusion
This README provides an overview of how functional tests are run and maintained in this GitHub repository. By following this guide, you can run tests locally, contribute new tests, and understand how the CI/CD pipeline automates test execution.
