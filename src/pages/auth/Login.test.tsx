import { vi, expect, it } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render as renderer, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import store from "../../store/testStore";

const render = (component: JSX.Element) =>
  renderer(
    <MemoryRouter>
      <Provider store={store}>{component}</Provider>
    </MemoryRouter>
  );

describe("Login", async () => {
  let onSubmit = vi.fn();

  beforeEach(async () => {
    await render(<Login />);
    onSubmit.mockClear();
  });

  it("checking test is available", () => {
    let word = screen.queryByAltText(/logo/i);
    expect(word).toBeTruthy();
  });

  it("should enter email & password", async () => {
    const emailEl = screen.getByLabelText(/email/i);
    const pwdEl = screen.getByLabelText(/password/i);
    const btnEl = screen.getByRole("button", { name: /log in/i });

    const user = userEvent.setup();
    user.type(emailEl, "sam@gmail.com");
    user.type(pwdEl, "1234");
    user.click(btnEl);

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
