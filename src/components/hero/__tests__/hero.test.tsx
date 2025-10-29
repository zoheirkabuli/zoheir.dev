import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../hero";
import { HeroData } from "@/types/portfolio";

describe("Hero Component", () => {
  const mockData: HeroData = {
    greeting: "$ whoami",
    name: "Test User",
    title: "Test Title",
    tagline: "Test tagline",
    terminalCommand: "$ test",
    terminalComment: "Testing",
    ctaButtons: [{ text: "Test Button", href: "#test" }],
  };

  it("renders hero name", () => {
    render(<Hero data={mockData} />);
    expect(screen.getByText("Test User")).toBeInTheDocument();
  });

  it("renders hero title", () => {
    render(<Hero data={mockData} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<Hero data={mockData} />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
