import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("Render todo done is true", () => {
  const todo = {
    text: "Hello Test",
    done: true,
  };

  const mockHandler = jest.fn();

  render(
    <Todo
      todo={todo}
      onClickDelete={mockHandler}
      onClickComplete={mockHandler}
    />
  );

  const element = screen.getByText("Hello Test");
  const button = screen.getByText("Delete");
  expect(element).toBeDefined();
  expect(button).toBeDefined();
});

test("Render todo done is false", () => {
  const todo = {
    text: "Hello Docker",
    done: false,
  };

  const mockHandler = jest.fn();

  render(
    <Todo
      todo={todo}
      onClickDelete={mockHandler}
      onClickComplete={mockHandler}
    />
  );

  const element = screen.getByText("Hello Docker");
  const button = screen.getByText("Delete");
  const button2 = screen.getByText("Set as done");
  expect(element).toBeDefined();
  expect(button).toBeDefined();
  expect(button2).toBeDefined();
});
