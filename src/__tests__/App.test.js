import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Header tests", () => {
  // makes sure applictation always has this specific text as the heading
  test("it should find the text of the header", () => {
    // what file we are testing
    render(<App />);
    //query methods we are using
    const headerElement = screen.getByText(/My Calculator/i);
    //assertions
    expect(headerElement).toBeInTheDocument();
  });

  it("should find the element of header", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", {
      name: "My Calculator",
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("should have a h1 tag as the main header element", () => {
    render(<App />);
    const headingElementTag = screen.getByText(/My Calculator/i);
    expect(headingElementTag).toContainHTML("h1");
  });
});

it("should display 4 when the user enter 2+2", () => {
  render(<App />);
  const twoButton = screen.getByText("2");
  const plusButton = screen.getByText("+");
  const equalsButton = screen.getByText("=");

  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("4");
});

//should display 3 when a user enters 6/2
it("should display 3 when user enters 6/2", () => {
  render(<App />);
  const sixButton = screen.getByText("6");
  const twoButton = screen.getByText("2");
  const divideButton = screen.getByText("/");
  const equalsButton = screen.getByText("=");

  fireEvent.click(sixButton);
  fireEvent.click(divideButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("3");
});

//should display 6 when a user enters 3*2
it("should display 6 when a user enters 3*2", () => {
  render(<App />);
  const threeButton = screen.getByText("3");
  const twoButton = screen.getByText("2");
  const multiplyButton = screen.getByText("*");
  const equalsButton = screen.getByText("=");

  fireEvent.click(threeButton);
  fireEvent.click(multiplyButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);

  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("6");
});
