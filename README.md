# Trailer Rental Platform

Welcome to the Trailer Rental Platform! This platform allows users to rent trailers for various purposes, providing a convenient and reliable way to find and book trailers for their needs.

## Features

- **Search and Browse**: Users can search for trailers based on location, availability, type, and other criteria. They can browse through a wide range of trailers listed on the platform.

- **Booking and Reservation**: Users can view trailer details, check availability, and book trailers for specific dates. The booking process is straightforward and secure.

- **User Profiles**: Users can create profiles, manage their bookings, and track their rental history. They can also leave reviews and ratings for trailers they have rented.

- **Trailer Listings**: Owners can list their trailers on the platform, providing details such as description, amenities, location, and pricing. They can manage their listings and respond to booking requests.

## GitHub Actions

This project utilizes GitHub Actions for continuous integration and deployment to Firebase Hosting. The workflow is configured to deploy the application to different environments (production and test) based on the branch and pull request events.

### Workflow Configuration

- **Pull Requests to Test Branch**: When a pull request is opened targeting the `test` branch, the application is built and deployed to the test environment. This allows for thorough testing before merging changes into the main branch.

- **Pull Requests to Main Branch**: When code is merged into the `main` branch, the application is automatically built and deployed to the production environment.

### Setup Instructions

1.  **Repository Secrets**: Ensure the necessary Firebase service account keys and GitHub tokens are set up as secrets in your GitHub repository settings.

- `FIREBASE_SERVICE_ACCOUNT_PROD_TRAILER_RENTAL`: Firebase service account key for production.

- `FIREBASE_SERVICE_ACCOUNT_TEST_TRAILER_RENTAL`: Firebase service account key for test.

- `GITHUB_TOKEN`: GitHub token with appropriate permissions.

2.  **Workflow File**: The `.github/workflows/firebase-deployment.yml` file contains the configuration for GitHub Actions.

## Technologies Used

- **Frontend**: React, Redux Toolkit, Material-UI

- **Backend**: Firebase (Authentication, Firestore, Cloud Functions)

- **Database**: Firestore (NoSQL database)

- **Other**: Node.js, Express.js (for backend API), Git (version control)

## Live Sites

- [Production Site](https://prod-trailer-rental.web.app/){:target="\_blank"}
- [Test Site](https://test-trailer-rental.web.app/){:target="\_blank"}

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact me at [cabbottdev@gmail.com](mailto:cabbottdev@gmail.com).
