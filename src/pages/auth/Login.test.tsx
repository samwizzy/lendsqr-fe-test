import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import store from "../../store/testStore";

describe("Login", async () => {
  beforeEach(async () => {
    await render(<Login />, {
      wrapper(props) {
        return (
          <MemoryRouter>
            <Provider store={store}>{props.children}</Provider>
          </MemoryRouter>
        );
      },
    });
  });

  it("should have logo image", () => {
    let word = screen.getByRole("img", { name: /logo/i });
    expect(word).toBeTruthy();
  });

  it("input should have focus", async () => {
    const user = userEvent.setup();
    const emailEl = screen.getByRole("textbox", { name: /email/i });
    const pwdEl = screen.getByPlaceholderText(/password/i);

    await user.tab();
    await user.tab();

    expect(emailEl).toHaveFocus();

    await user.tab();

    expect(pwdEl).toHaveFocus();
  });

  it("submit button should be active after typing email & password", async () => {
    const emailEl = screen.getByRole("textbox", { name: /email/i });
    const pwdEl = screen.getByPlaceholderText(/password/i);
    const btnEl = screen.getByRole("button", { name: /log in/i });

    const user = userEvent.setup();
    await user.type(emailEl, "sam@gmail.com");
    await user.type(pwdEl, "1234");

    expect(btnEl).not.toBeDisabled();
  });

  it("submit button should be disabled if either email or password is absent", async () => {
    const emailEl = screen.getByRole("textbox", { name: /email/i });
    const btnEl = screen.getByRole("button", { name: /log in/i });

    const user = userEvent.setup();

    await user.type(emailEl, "sam@gmail.com");

    expect(btnEl).toBeDisabled();
  });
});
