# Responsive Holy Grail Layout with Fluid Areas using CSS Grid

This project demonstrates a responsive implementation of the Holy Grail layout pattern using CSS Grid. The layout features a header, a navigation on the left, a flexible main content area in the middle, a sidebar on the right, and a footer. It changes the layout to adapt to any screen size while maintaining clear separation between sections.

This project serves as a solid foundation for building custom and more complex layouts.

## How it works

- The grid container element uses CSS Grid to enable a grid layout.
- The main layout, defined by grid areas, consists of empty sections (`Header`, `Navigation`, `Main`, `Aside` and `Footer`) that require components from the `components` directory to be filled with actual content.
- Grid tracks are defined with fixed and flexible units. The layout allows the content area to occupy more space as the screen widens.
- Strategic breakpoints, determined by media queries, trigger layout adjustments for different screen sizes and orientations (landscape and portrait).

## Features

- **Holy Grail Pattern:** Classic layout structure.
- **Responsive:** Fluid content sections that expand from 240px and adapt to any screen size.
- **CSS Grid:** Modern and efficient layout approach that provides a clear separation of content sections using named grid areas.
- **Starting Point:** Build upon this base for more complex layouts.

## Inspiration

This layout is based on the example provided by Mozilla Developer Network [Realizing_common_layouts_using_grids](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids).

## Screenshots

![large-screen](https://github.com/user-attachments/assets/cae5904e-3e20-40be-834d-7d12922d669e)

![medium-screen](https://github.com/user-attachments/assets/0f896b3e-cbc2-4a88-9bcb-90226236f46c)

![small-screen](https://github.com/user-attachments/assets/04e17f08-c7d5-47a8-a439-1d2b03b34f52)
