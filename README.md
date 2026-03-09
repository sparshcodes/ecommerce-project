## Setup Instructions

To run the project locally, follow the steps below.

First clone the repository and move into the project folder.

git clone <repository-url>  
cd <project-folder>

Next install the required dependencies.

npm install

After installing dependencies, start the development server.

npm run dev

Once the development server starts, open the application in the browser using the following URL.

http://localhost:5173

---

## Assumptions Made

While building this application, a few assumptions were considered.

The DummyJSON API is assumed to be available and stable. The application expects the API to return product fields such as title, price, rating, category, brand, description, and images.

All products are fetched initially when the application loads. Since the dataset size from the API is relatively small, filtering and pagination are handled on the client side.

Some products may not contain brand information. In such cases a fallback label can be displayed to prevent empty values from appearing in the UI.

Pagination is applied after filters are applied, so that the filtered dataset is divided across pages.

---

## Architectural Decisions

The project structure follows a simple component based architecture.

The UI is divided into smaller reusable components such as ProductCard, Filters, and Pagination. This approach helps keep the code organized and easier to maintain.

Two main pages are used in the application:

- Product Listing Page – Displays all products with filters and pagination.
- Product Detail Page – Displays detailed information about the selected product.

React Router is used to handle navigation between these pages. The route `/product/:id` is used to display the product detail page.

API requests are placed inside a service file instead of directly inside components. This keeps components focused on UI logic and keeps network related code centralized.

React hooks such as `useState` and `useEffect` are used to manage application state and handle data fetching. For a project of this size, introducing a global state management library was not necessary.

---

## Improvements if Given More Time

If additional time was available, several improvements could be made to enhance the application.

Server side pagination could be implemented using API parameters such as limit and skip so that the application only loads the required products instead of fetching the entire dataset.

A search feature could be added to allow users to search for products by name.

Filter persistence could be implemented using URL query parameters so that filter selections remain when navigating between pages.

Loading indicators or skeleton loaders could be added to improve the user experience while data is being fetched.

Better error handling could be implemented to manage API failures or network errors.

Unit tests could also be added for filtering logic and UI components to improve reliability.