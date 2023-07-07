# playwrightAutomationFramework

## Goal 
    Create a complete test automation framework in Playwright with Regression, API tests with  CI/CD to run test on cloud. 


How to Run Tests:

  `npx playwright test`
    Runs the end-to-end tests.

  `npx playwright test --ui`
    Starts the interactive UI mode.

 `npx playwright test --project=chromium`
    Runs the tests only on Desktop Chrome.

  `npx playwright test example`
    Runs the tests in a specific file.

  `npx playwright test --debug`
    Runs the tests in debug mode.

  `npx playwright codegen`
    Auto generate tests with Codegen.

check out the following files:
    - `./tests/example.spec.js` - Example end-to-end test
    - `./playwright.config.js` - Playwright Test configuration
