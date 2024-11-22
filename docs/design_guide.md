# Design Guide

## Color Scheme
- **Light Mode**:
  - Background: Light Gray (#F5F5F5)
  - Accent: Teal (#008080)
  - Text: Dark Gray (#333333)
- **Dark Mode**:
  - Background: Black (#000000)
  - Accent: Teal (#008080)
  - Text: Light Gray (#FFFFFF)

## Typography
- **Primary Font**: Sans-serif (e.g., Roboto or Open Sans)
- **Font Sizes**:
  - Headings: 24px (H1), 20px (H2), 16px (H3)
  - Body Text: 14px

## UI Components
### Buttons
- **Primary Buttons**:
  - Background: Teal
  - Text: White
  - Hover: Darker Teal
- **Secondary Buttons**:
  - Border: Teal
  - Text: Teal
  - Hover: Light Teal Background

### Cards
- Background: White (Light Mode) / Dark Gray (Dark Mode)
- Shadow: Subtle drop shadow for elevation.

## Iconography
- Use simple, line-based icons for clarity and scalability.
- Maintain consistent sizes across platforms.

## Layout and Spacing
- **Grid System**: 12-column grid for the web, flexible layouts for mobile.
- **Padding**: 16px standard padding for containers.
- **Margins**: 8px between elements.

## Example of Layout (Mermaid Diagram)
\\\mermaid
graph LR
  Header --> Dashboard --> ContentPlanner --> Analytics
  Dashboard --> Feeds
  Feeds --> PostDetails
\\\

## Accessibility
- Ensure color contrast meets WCAG 2.1 standards.
- Support screen readers and keyboard navigation.
- Include haptic feedback for mobile interactions.
