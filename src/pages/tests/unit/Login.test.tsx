/* eslint-disable import/first */
jest.unmock("../../Login");
const mockedPost = jest.fn();
jest.mock("axios", () => {
  return {
    create: () => {
      return {
        post: mockedPost
      }
    },
  };
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { ionFireEvent as fireEvent } from "@ionic/react-test-utils";
import Login from "../../Login";

describe("GIVEN a login screen", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test("page should have a title of Comfort", async () => {
    render(<Login />);
    await screen.findByText("Comfort");
  });

  test("page should have login and register buttons", async () => {
    render(<Login />);
    expect(screen.getByTitle("loginButton")).toBeInTheDocument();
    expect(screen.getByTitle("registerButton")).toBeInTheDocument();
  });

  test("page should have username and password inputs", async () => {
    render(<Login />);
    expect(screen.getByTitle("usernameInput")).toBeInTheDocument();
    expect(screen.getByTitle("passwordInput")).toBeInTheDocument();
  });

  test("when clicking the login Button, a request is made", async () => {
    render(<Login />);
    const addButton = await screen.findByTitle("loginButton");
    const usernameLabel = await screen.findByTitle("usernameInput");
    const passwordLabel = await screen.findByTitle("passwordInput");

    //const resp = {data: [{"username":"test", "admin":"0","id":"99999"}]};
    //const resp = { username: "xxx@xxx.com", password: "xxxxx", then: (callback) => {callback()} };
    const resp = { username: "xxx@xxx.com", password: "xxxxx", then: () => {} };
    mockedPost.mockReturnValue(resp);

    fireEvent.ionChange(usernameLabel, "Test");
    fireEvent.ionChange(passwordLabel, "pass");
    fireEvent.click(addButton);

    expect(mockedPost).toBeCalled();
  });
});
