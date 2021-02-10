describe("All Pages Load", () => {
  it("Load Home Page", () => {
    cy.visit("https://techsavagery.net");
  });
  it("Load Services Page", () => {
    cy.visit("https://techsavagery.net/services");
  });
  it("Load About Page", () => {
    cy.visit("https://techsavagery.net/about");
  });
  it("Load Blog Page", () => {
    cy.visit("https://techsavagery.net/blog");
  });
  it("Load Contact Page", () => {
    cy.visit("https://techsavagery.net/contact");
  });
});
