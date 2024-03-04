# Infinite scroll and search for products

This project is to show the implementation of infinite scroll and search for products using react-query with ViteJS.

## Quick Start

Clone the repo:

```bash
git clone https://github.com/DucLM1809/infinite-scroll-products.git
cd infinite-scroll-products
```

Install the dependencies:

```bash
yarn install
```

## Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Project Structure](#project-structure)
- [Testing](#testing)
  
## Features

- **Infinite scroll**: Each time the user scrolls to the end of the list, fetch the next 20 products
- **Search for products by name**: using [this api]([http://www.passportjs.org](https://dummyjson.com/docs/products)https://dummyjson.com/docs/products/search)

## Commands

Running locally:

```bash
yarn dev
```

## Project Structure

```
src\
 |--assets\         # Contains all images, css files, font files, etc. for project
 |--components\     # Contain every single component in your entire application
 |--constants\      # Contains all contants used globally within project
 |--hooks\          # Contains every single custom hook in your entire project
 |--lib\            # Contains facades for the various different libraries used in project
```

## Testing
1. Trigger Infinite Scroll:
- Scroll to the bottom of the product list to trigger the infinite scroll functionality.
- While scrolling, observe the loading state indicator to confirm that it appears when reaching the bottom of the list.
- If the is no more products to load, no indicator appear.

2. Searching Products Functionality:
- Access the Search Feature: Locate the search input field within the application's user interface. Click on or focus on the search input field to activate it.
- Enter Search Query: Type a search query into the search input field. This can be a product name, category, brand, or any relevant keyword.
- After initiating the search (300 milliseconds after stop typing), verify that the search results are displayed on the screen. Ensure that the displayed results match the search query entered. Check if the search results include relevant products based on the entered query.
- Test Pagination: Trigger infinite scroll functionality
- Refine Search Query: Modify the search query by entering a different product name. Initiate the search again and verify that the updated search results are displayed accurately.
- Test Empty Search: Clear the search input field or enter a non-existent query. Initiate the search and verify that appropriate feedback (e.g., "No results found") is displayed when no matching products are found.

