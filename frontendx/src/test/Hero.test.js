import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";
// import { describe } from "node:test";

//Test suit

describe("Hero component", () => {

  test("render hero image", () => {
    render(<Hero />);
    const heroimage = screen.getByAltText("Hero Image");
    expect(heroimage).toBeInTheDocument();
    expect(heroimage).toHaveAttribute(
      "src",
      expect.stringContaining("homeHero")
    );
  });

  test("render signup button", () => {
    render(<Hero />);
    const signupbutton = screen.getByRole("Button",{name:"/signup now"});
    expect(signupbutton).toBeInTheDocument();
    expect(signupbutton).toHaveClass("btn-primary");
  });

});
