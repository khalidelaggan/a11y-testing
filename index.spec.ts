describe("Checkbox", () => {
  describe("a11y", () => {

    beforeEach(() => {
      cy.visit("/component/th-checkbox/example/5");
    });

    describe("aria-label", () => {
      describe("without an aria-label attribute specified", () => {
        it("has an aria-label attribute identical to the checkbox's with-label attribute", () => {
          cy.get("#axe-test #basic.th-checkbox").should("have.attr", "aria-label", "Basic Checkbox");
        });
      });
      describe("with an aria-label attribute specified", () => {
        it("has an aria-label attribute with the value provided", () => {
          cy.get("#axe-test #aria-label.th-checkbox").should("have.attr", "aria-label", "Aria-Label");
        });
      });
    });
  });
});
