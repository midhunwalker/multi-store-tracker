# SupplyCo Shop Interaction Platform

***This React-based platform connects clients and SupplyCo shops, enabling users to check stock availability and shop owners to manage products efficiently.***

## Features

- **User Login/Signup**: Secure authentication system with separate flows for users and shop owners.
- **Search Shops by Location**: Users can search for shops based on location.
- **Product Management**: Shop owners can add, update, and manage their product inventory.
- **User Dashboard**: Users can browse shops, view products, add items to their cart, and place orders.
- **Shop Owner Dashboard**: Manage product listings, view orders, and manage shop information.
- **Dark/Light Mode Toggle**: Users can switch between dark and light modes.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/supplyco-shop-platform.git
    cd supplyco-shop-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the app in your browser:
    ```
    http://localhost:3000
    ```

### Folder Structure

```plaintext
multi-store-tracker/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   └── ShopOwner/
│   │       ├── AddProduct.jsx
│   │       ├── ManageInventory.jsx
│   ├── pages/
│   │   ├── UserDashboard.jsx
│   │   ├── ShopOwnerDashboard.jsx
│   │   └── SearchStores.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── styles/
│       └── main.css
