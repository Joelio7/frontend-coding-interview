import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhotoCard } from "../PhotoCard";
import type { PexelsPhoto } from "@/types";

vi.mock("../StarButton", () => ({
  StarButton: ({ photoId }: { photoId: number }) => (
    <button data-testid={`star-button-${photoId}`}>Star</button>
  ),
}));

vi.mock("@/components/ui", () => ({
  LinkIcon: () => <svg data-testid="link-icon" />,
}));

const mockPhoto: PexelsPhoto = {
  id: 123,
  width: 1000,
  height: 1000,
  url: "https://example.com/photo",
  photographer: "John Doe",
  photographer_url: "https://example.com/photographer",
  photographer_id: 456,
  avg_color: "#FF5733",
  src: {
    original: "https://example.com/original.jpg",
    large2x: "https://example.com/large2x.jpg",
    large: "https://example.com/large.jpg",
    medium: "https://example.com/medium.jpg",
    small: "https://example.com/small.jpg",
    portrait: "https://example.com/portrait.jpg",
    landscape: "https://example.com/landscape.jpg",
    tiny: "https://example.com/tiny.jpg",
  },
  liked: false,
  alt: "A beautiful landscape photo",
};

describe("PhotoCard", () => {
  it("should render photo information correctly", () => {
    render(<PhotoCard photo={mockPhoto} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("A beautiful landscape photo")).toBeInTheDocument();
    expect(screen.getByText("#FF5733")).toBeInTheDocument();

    const portfolioLink = screen.getByRole("link", { name: /portfolio/i });
    expect(portfolioLink).toHaveAttribute(
      "href",
      "https://example.com/photographer",
    );
    expect(portfolioLink).toHaveAttribute("target", "_blank");

    expect(screen.getByTestId("star-button-123")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "A beautiful landscape photo");
  });

  it("should truncate long alt text and show tooltip", () => {
    const longAltPhoto = {
      ...mockPhoto,
      alt: "This is a very long description that exceeds thirty characters",
    };

    render(<PhotoCard photo={longAltPhoto} />);

    expect(
      screen.getByText("This is a very long descriptio..."),
    ).toBeInTheDocument();

    const tooltip = screen.getByText(
      "This is a very long description that exceeds thirty characters",
    );
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass("invisible");
  });

  it('should show "Untitled photo" when alt text is missing', () => {
    const noAltPhoto = {
      ...mockPhoto,
      alt: "",
    };

    render(<PhotoCard photo={noAltPhoto} />);
    expect(screen.getByText("Untitled photo")).toBeInTheDocument();
  });
});
