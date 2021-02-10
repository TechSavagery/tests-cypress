describe("All Pages Load", () => {
  it("Load Home Page", () => {
    cy.visit("http://techsavagery.net");
  });
  it("Load Services Page", () => {
    cy.visit("http://techsavagery.net/services");
  });
  it("Load About Page", () => {
    cy.visit("http://techsavagery.net/about");
  });
  it("Load Blog Page", () => {
    cy.visit("http://techsavagery.net/blog");
  });
  it("Load Contact Page", () => {
    cy.visit("http://techsavagery.net/contact");
  });
});
