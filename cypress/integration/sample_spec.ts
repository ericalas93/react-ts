type Url = string;
it("loads examples", () => {
    const url: Url = "/";
    cy.visit(url);
    cy.contains("Count:");
});
