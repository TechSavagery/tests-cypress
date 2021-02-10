describe("All Pages Load", () => {
  it("Load Home Page", () => {
    cy.visit("https://matthewsvineyard.com/");
  });
  it("Load Our Story Page", () => {
    cy.visit("https://matthewsvineyard.com/#our-story");
  });
  it("Load Our Team Page", () => {
    cy.visit("https://matthewsvineyard.com/#our-team");
  });
  it("Load Our Wines Page", () => {
    cy.visit("https://matthewsvineyard.com/#our-wines");
  });
  it("Load Our Vineyard Page", () => {
    cy.visit("https://matthewsvineyard.com/#our-vineyard");
  });
  it("Load Donations Page", () => {
    cy.visit("https://matthewsvineyard.com/#our-vineyard");
  });
  it("Load Contact Page", () => {
    cy.visit("https://matthewsvineyard.com/#contact");
  });
});
