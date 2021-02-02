## Methodology

- Read the `readme` file - Understanding the assessment
- Install packages - yarn does not have a audit fix function so leaving dependencies as-is.
- Run test - No tests found.
- Look at public folder - Just boilerplate code
- Starting project before looking at the code.
- Ok so the app is a list of users, with pagination and search.
- Scope of feature:
  - Two characters starts a search
  - You can click on a user but nothing happens
  - If result are longer than 5, we show pagination
  - Changing pages show new content, but no deeplink or search param in url.
  - Clear search by clicking

## Other improvements

- Default props. Properly type safty with TS or Flow
- Context provider to source data. Offload heavy task with service worker.
- Introduce locales. I could see something was added. Locales would make sense to serve with a context provider at least.
- JSS instead of CSS. My own prefer choice.
- A linter - Eslint/TSlint or even standardJS
- DevOps are in general not included === no dev happiness and repetitive tasks
- Normalize data from api instead of ugly underscore names directly used without any checks or contexts.
- Proper test setup
- Improved folder structure
- Test for errors and resilience - Error handling in components
- Test the rest of the components and add UI testing with ex Cypress
