import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("should render posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id: "1", title: "some post"}]
    });
    render(<Async />);

    const listItemElement = await screen.findAllByRole("listitem");
    expect(listItemElement).not.toHaveLength(0);
  });
});
