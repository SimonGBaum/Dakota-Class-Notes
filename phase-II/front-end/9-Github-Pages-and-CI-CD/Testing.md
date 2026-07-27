# Why Do We Test?

## Debugging is Expensive

Writing tests now saves time later by helping catch bugs before they become difficult to track down.

- Less debugging
- Safer code changes
- More confidence when adding features

---

## Bugs in Production Cost Money

Once an application is deployed, bugs can lead to:

- Lost customers
- Lost revenue
- Emergency bug fixes

Tests help protect your deployed application.

---

# Types of Tests

## Unit Tests

Tests one small piece of code (usually a function).

- Isolated from the rest of the application
- Fast to run
- External services (APIs, databases, files) are mocked

**Example:** Testing a `calculateTax()` function.

---

## Integration Tests

Tests that multiple parts of your application work together.

- Multiple functions/components
- May use APIs or databases
- Slower than unit tests

**Example:** Testing that a login form successfully authenticates a user.

---

## End-to-End (E2E) Tests

Tests your application like a real user would.

- Runs against the entire application
- Clicks buttons, fills forms, navigates pages
- Tests complete user workflows
- Slowest, but gives the most confidence

**Example:** Search for a Pokémon → View Details page.

---

# Tools We'll Use

- **Jest** → Unit Tests
- **Cypress** → End-to-End (E2E) Tests

---

## Rule of Thumb

- **Unit Tests:** "Does this function work?"
- **Integration Tests:** "Do these parts work together?"
- **E2E Tests:** "Can the user actually use the feature?"
