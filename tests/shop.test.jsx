// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from '../src/pages/Shop'

describe("App component", () => {
  it("renders correct heading", () => {
    render(<Shop />);
    expect(screen.getByRole("nav").textContent).toMatch(/Clarkey's/i);
  });
});
