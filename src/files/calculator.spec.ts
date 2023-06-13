import calculator from "../files/calculator";

describe("calculadora", () => {
  it("Add 1 to 2 should return 3", () => {
    //Arrange
    const number1 = 1;
    const number2 = 2;
    const result = 3;

    // Act
    const expected = calculator.add(number1, number2);

    // Assert
    expect(result).toBe(expected);
  });

  it("Subtract 2 from 10 should return 8", () => {
    //Arrange
    const number1 = 10;
    const number2 = 2;
    const result = 8;

    // Act
    const expected = calculator.subtract(number1, number2);

    // Assert
    expect(result).toBe(expected);
  });

  it("Multiply  2 with 8 should return 16", () => {
    //Arrange
    const number1 = 2;
    const number2 = 8;
    const result = 16;

    // Act
    const expected = calculator.multiply(number1, number2);

    // Assert
    expect(result).toBe(expected);
  });

  it("Multiply should be idempotent", () => {
    //Arrange
    const number1 = 2;
    const number2 = 0;
    const result = 0;

    // Act
    const expected = calculator.multiply(number1, number2);

    // Assert
    expect(result).toBe(expected);
  });

  it("Divide 8 with 2 should return 4", () => {
    //Arrange
    const number1 = 8;
    const number2 = 2;
    const result = 4;

    // Act
    const expected = calculator.divide(number1, number2);

    // Assert
    expect(result).toBe(expected);
  });
});
