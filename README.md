# Problem 1 Task Filtering

## Features

1. **Task Management:** Allows users to add tasks with a name and status.
2. **Filtering:** Provides the ability to filter tasks by "All," "Active," and "Completed."
3. **Sorting:** Sorts tasks with active tasks first, followed by completed tasks, and then others.
4. **User-Friendly Input:** Input fields are forgiving, considering spaces and case-insensitivity.
5. **Responsive Design:** Ensures a pleasant user experience on various devices.

## Problem Description

### Issue 1: Sorting Completed Tasks

- **Problem:** Completed tasks are not being sorted correctly.
- **Solution:** Updated the custom sorting logic in the `customSort` function to prioritize completed tasks after active tasks.

### Issue 2: Input Forgiveness

- **Problem:** Input fields are not forgiving for spaces or case differences.
- **Solution:** Implemented trimming and case-insensitivity in the input handling to improve user experience.

### Issue 3: Additional Feature Request

- **Problem:** Users want additional features like task prioritization and user authentication.
- **Solution:** Discuss and plan the implementation of these features based on user feedback.

# React Bootstrap Modal Challenge Problem 2

This is a React application that demonstrates the implementation of modal dialogs using React Bootstrap. The application fetches contact data from an API and presents it in different modals based on user interactions.

## Features

### Modal A - All Contacts

- Button: "All Contacts"
- Background Color: `#46139f`
- Displays all contacts from the API.
- Checkbox to filter only contacts with even IDs.
- Search box to filter contacts by phone number.
- Pagination for loading more contacts on scrolling to the bottom.

### Modal B - US Contacts

- Button: "US Contacts"
- Background Color: `#ff7f50`
- Displays contacts filtered for the United States.
- Checkbox to filter only contacts with even IDs.
- Search box to filter contacts by phone number.
- Pagination for loading more contacts on scrolling to the bottom.

### Modal C - Contact Details

- Displays details of a selected contact.
- Button: "Close" to close the modal.
