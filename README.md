# Nisien Tea Round Picker

A tool to allow a team to fairly choose who will make tea for others who want to participate.

### Features

- Add team members.
- Add drink orders to team members.
- Start a new tea run. Select participants and their drink orders, then the person who will make the drinks run will be selected.
- View a history of previous drink runs.

## Installation and Setup

To view the project locally, clone the repository then run the following in the project root folder:

```
npm install
npm run dev
```

> [!NOTE]
> The backend API must be running on port 8794

I have documented some of the reusable components using [Storybook](https://storybook.js.org/). You can view the Storybook locally by running:

```
npm run storybook
```

## Approach

- Having received the brief, I first imported the provided collection into [Postman](https://www.postman.com/) to inspect each endpoint and better understand the API structure.
- While considering the API structure and the Activity Diagram provided, I planned the basic functionality of the application. I noted three key required features:

        1. Creating team members
        2. Adding drink orders to team members
        3. Create a new drink run

- I then implemented these features one at a time, building components as needed while prioritizing code reusability to minimize repetition. I focused on creating a fully responsive solution while adhering to best practices for component design and state management, enabling quick adjustments and scaling as the project developed.
- Having completed a first development iteration, I asked a friend to use the application to complete the steps above, to simulate user testing. Based on their feedback, I made a few adjustments to the application to enhance usability.
- Lastly, I documented each component using Storybook to ensure clarity and maintainability.

## Challenges

- When first attempting to query the backend API from the frontend project I was faced with CORS issues. I overcame this by setting up a proxy in the Vite config file.
- The 'body' documentation for the `DrinkRun` `POST` endpoint was incomplete. This endpoint expects an `orderId` as well as a `userId` for each `participant`. I was able to debug this using the browser developer tools.
- I was unsure how to save the `drinkMaker` for each drink run. I would have liked to spend more time experimenting with this, to be able to include the drink maker in the drink run history.

## Future Improvements

Some additional improvements that may be beneficial to the project:

- Allow team members to log in and manage their own drink orders.
- The ability to edit or delete users, drink orders and drink runs.
- The ability to include team members in the drink runner selection who don't want a drink but are happy to be involved in the selection.
- The ability to exclude team members from the drink runner selection who would like a drink but aren't currently available to do the run (e.g. they are in a meeting).
- Improve the choosing algorithm. Currently the drink runner is randomly selected. We could improve this by considering factors such as who was most recently chosen, or who hasn't been chosen for a while.
- Improvements to the loading screens.
- More descriptive error messages when API requests fail.
- Better organisation for components. We could consider a methodology such as [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/).

## Architecture Decision Record

I have documented some key decisions taken during development of the project:

### 1. Title: Decision to use React for the Frontend Project

**Context**

I needed to choose a suitable frontend framework for development of the project that requires high performance, scalability and maintainability. The application must support reusable components, handle dynamic content, and integrate well with backend APIs.

**Decision**

I chose React for its component-based architecture, virtual DOM for performance, and extensive ecosystem. React’s popularity ensures good community support, scalability, and ease of integration with various tools and APIs.

**Consequences**

Positive:

- Faster development with reusable components.
- High performance and scalability.

Negative:

- React may introduce some unnecessary overhead compared to simpler solutions like Vanilla Javascript or a smaller framework like Vue.js.

### 2. Title: Decision to use Tailwind CSS for Styling

**Context**

The project required rapid development of a frontend with consistent and customizable styling. Given tight timelines, I needed a framework that allowed fast iteration without sacrificing flexibility.

**Decision**

I chose Tailwind CSS for its utility-first design, which enables fast styling and prototyping. Tailwind’s excellent documentation makes it easy to implement styles quickly.

**Consequences**

Positive:

- Faster development with reusable utility classes.
- Quick learning curve due to Tailwind's comprehensive documentation.

Negative:

- HTML bloat from utility classes in markup.

### 3. Title: Decision to use React-Query for Data Fetching and State Management

**Context**

The application required a method for efficient data fetching.

**Decision**

I decided to use React-Query/Tanstack Query for data fetching and state management. React-Query simplifies data fetching, reduces boilerplate code and improves the user experience.

**Consequences**

Positive:

- React-Query’s hooks make it easy to implement and scale.
- Automatic caching and background refetching reduce network requests for improved performance.

Negative:

- Requires some time to learn, especially for advanced features.

### 4. Title: Decision to Implement Compound Design Pattern for Complex Components

**Context**

The project involves building semi-complex UI components with nested elements that require flexibility, maintainability, and clear separation of concerns. Traditional component-based approaches can result in prop-drilling and tight coupling, making the components harder to manage and scale.

**Decision**

I decided to implement the [Compound Design Pattern](https://www.smashingmagazine.com/2021/08/compound-components-react/) for more complex components such as Forms and Tables. This pattern allows for building flexible and reusable components by letting parent components manage the state and logic while child components focus on rendering, improving maintainability and readability.

**Consequences**

Positive:

- Increased flexibility and maintainability by avoiding prop-drilling.
- A clear separation of concerns between parent and child components making the codebase easier to maintain.
- Components are modular and can be easily reused across the application.

Negative:

- Attempting to use child components of compound components outside of the parent can cause errors in the application.
