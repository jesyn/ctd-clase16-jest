import dummy from "../files/dummy";

describe("dummy", () => {
  const callBack = jest.fn();
  describe("when shouldTrigger is false", () => {
    it("should not call callback", () => {
      // Arrange
      const shouldTrigger = false;

      // Act
      dummy(shouldTrigger, callBack);

      // Assert
      expect(callBack).not.toBeCalled();
    });
  });
  describe("when shouldTrigger is true", () => {
    it("should call callback", () => {
      // Arrange
      const shouldTrigger = true;

      // Act
      dummy(shouldTrigger, callBack);

      // Assert
      expect(callBack).toBeCalled();
    });
  });
});
