describe("Test E2E de AuthPage", () => {

  beforeEach(() => {
    cy.clearCookiesAll()
  })

  it("Login Form lleva a Home", () => {
    Cypress.env("dev", true);
    const isDev = Cypress.env().dev;
    const url = isDev
      ? "http://localhost:5173/login"
      : "https://grow-react-beta.vercel.app/login";

    const email = Cypress.env().email;
    const password = Cypress.env().password;
    cy.visit(url);

    cy.get(':nth-child(1) > input[type="email"]').type(email);
    cy.get(':nth-child(2) > input[type="password"]').type(password);
    cy.get('[data-cy="submit"]').click();

    cy.url().should("include", "/home");
  });
});
