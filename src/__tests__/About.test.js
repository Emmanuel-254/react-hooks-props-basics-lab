// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import App from "../components/App";

const user = {
  name: "John Doe",
  city: "San Francisco",
  color: "firebrick",
  bio: "I am a web developer passionate about building innovative projects.",
  github: "https://github.com/johndoe",
  linkedin: "https://www.linkedin.com/in/johndoe"
};

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  render(<App />);
  const h1 = screen.queryByText(
    `${user.name} is a Web Developer from ${user.city}`
  );
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual(user.color);
});

test("passes 'bio' to <About> as a prop", () => {
  render(<App />);
  const p = screen.queryByText(user.bio);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toEqual("P");
});

test("passes 'github' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const a = screen.queryByText(user.github);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toEqual("A");
});

test("passes 'linkedin' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const a = screen.queryByText(user.linkedin);
  expect(a).toBeInTheDocument();
  expect(a.tagName).toEqual("A");
});
