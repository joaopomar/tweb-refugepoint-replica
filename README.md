# Web Technologies Project: NGO Website Replica (2023/2024)

## 1. Project Context

This repository holds the practical assignment for the Web Technologies (TWEB) course at the Coimbra Institute of Engineering (ISEC) for the 2023/2024 academic year.

The project was divided into two main parts:

*   **Visual Replication:** Recreate the layout of an NGO website (RefugePoint, version from the time of the project) using only HTML and CSS.
*   **Dynamic Functionality:** Implement a complex, interactive donation system using only pure JavaScript.

## 2. Component 1: Visual Replication (HTML/CSS)

The primary layout challenge was to build a static replica of the NGO's website from screenshots, adhering to modern web standards.

*   **Semantic Structure:** The site was built using semantic HTML5 tags to ensure a logical and accessible document structure.
*   **Custom Styling:** All styling was written from scratch in CSS3 to match the provided design.
*   **Modern Layouts:** The layout heavily relies on CSS Flexbox and CSS Grid, as required by the project.
*   **Responsive Design:** Media queries were used to ensure the layout is fully responsive and adapts correctly to desktop, tablet, and mobile screen sizes.

## 3. Component 2: Dynamic Donation System (JavaScript)

This component involved building a multi-step donation form with complex client-side logic, all handled by pure JavaScript without any external libraries.

### Key Features Implemented:

*   **Dynamic Form Handling:** Manages form state based on user selections, such as:
    *   **Donation Type:** Single vs. Recurring (Monthly).
    *   **Donor Type:** Individual vs. Company.

*   **Conditional Fields:** The form dynamically shows or hides fields based on user input. For example:
    *   An **Address** field appears for recurring donations.
    *   An **IBAN** field appears only if "Direct Debit" is selected as the payment method.

*   **Real-Time Impact Calculation:** The system instantly calculates and displays the real-world impact of the donation amount (e.g., number of meals provided, people fed per day, or days of support).

*   **Payment Method Simulation:** Client-side logic handles the availability of different payment options (Credit Card, PayPal, Multibanco, MBWay) based on whether the donation is single or recurring.

*   **Pure DOM Manipulation:** All visual updates, text changes, and form interactions are handled by directly manipulating the DOM with JavaScript.

## 4. Technologies & Constraints

*   **Languages:** HTML5, CSS3, JavaScript.
*   **Tools:** VS Code

### Project Constraints:

*   **No Frameworks:** Use of CSS frameworks (like Bootstrap) or JS libraries (like jQuery) was strictly forbidden.
*   **SASS (Not Used):** While SASS was an option for the project, this implementation uses pure CSS.

## Authors
* Diogo Silva
* João Pomar
