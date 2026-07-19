# Accounts and Contact Management System

A Salesforce CRM application built using **Lightning Web Components (LWC)** and **Apex** to manage **Accounts** and their related **Contacts**. The application provides an intuitive interface to search for accounts, view account information, display related contacts, create new contacts, and edit existing contacts.

## Features

-  Search Accounts by name
-  View Account details
-  Display Contacts related to the selected Account
-  Add new Contacts
-  Edit existing Contacts
-  Responsive user interface built with Lightning Web Components (LWC)
-  Apex controllers for server-side processing
-  Real-time data retrieval using SOQL

---

## Technologies Used

- Salesforce Platform
- Lightning Web Components (LWC)
- Apex
- SOQL
- Salesforce Lightning Design System (SLDS)
- Lightning Message Service (LMS)
- Jest (LWC Unit Testing)

---

## Project Structure

```text
project-root/
├── .gitignore
├── README.md
├── package.json
├── jest.config.js
├── eslint.config.js
├── sfdx-project.json
├── config/
│   └── project-scratch-def.json
├── force-app/
│   └── main/
│       └── default/
│           ├── applications/
│           ├── aura/
│           ├── classes/
│           │   ├── AccountClass.cls
│           │   └── AccountClass.cls-meta.xml
│           ├── contentassets/
│           ├── flexipages/
│           ├── layouts/
│           ├── lwc/
│           │   ├── jsconfig.json
│           │   ├── accountParent/
│           │   ├── accountChild1/
│           │   ├── accountChild2/
│           │   ├── contactModel/
│           │   ├── editContactModel/
│           │   ├── showAccountContacts/
│           │   └── shared/
│           ├── messageChannels/
│           │   └── ContactInfo.messageChannel-meta.xml
│           ├── objects/
│           ├── permissionsets/
│           ├── staticresources/
│           ├── tabs/
│           └── triggers/
├── scripts/
│   ├── apex/
│   └── soql/
├── docs/
├── tools/
└── ci/
```

---

## Component Architecture

### `accountParent`
- Main container component
- Coordinates communication between child components
- Manages the overall application state

### `accountChild1`
- Provides Account search functionality
- Displays matching Account records

### `accountChild2`
- Displays selected Account details
- Publishes Account information to other components

### `showAccountContacts`
- Retrieves and displays Contacts related to the selected Account

### `contactModel`
- Modal component used to create a new Contact

### `editContactModel`
- Modal component used to edit existing Contact information

### `AccountClass`
- Apex controller
- Performs SOQL queries and DML operations
- Handles Account and Contact data retrieval and updates

---

## Application Workflow

1. Search for an Account.
2. Select an Account from the search results.
3. View the Account details.
4. Display all Contacts associated with the selected Account.
5. Add a new Contact.
6. Edit an existing Contact.
7. Save changes to Salesforce.

---

## Lightning Message Service

The application uses **Lightning Message Service (LMS)** through the `ContactInfo` message channel to enable communication between Lightning Web Components without requiring a direct parent-child relationship.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Open the project:

```bash
cd <repository-name>
code .
```

Authorize your Salesforce Org:

```bash
sf org login web
```

Deploy the metadata:

```bash
sf project deploy start
```

---

## Testing

Run LWC Jest tests:

```bash
npm install
npm test
```

Run Apex tests:

```bash
sf apex run test
```

---

## Future Enhancements

- Delete Contacts
- Create and edit Accounts
- Pagination
- Advanced filtering
- Contact sorting
- Improved error handling
- Enhanced UI/UX
- Higher Apex test coverage

---

## Learning Outcomes

This project demonstrates practical experience with:

- Lightning Web Components (LWC)
- Apex Programming
- SOQL
- CRUD Operations
- Parent–Child Component Communication
- Lightning Message Service (LMS)
- Salesforce Metadata
- Salesforce DX (SFDX)
- Jest Testing
- Salesforce Lightning Design System (SLDS)

---

## Author

**Gimsara Kulathunga**

- Salesforce Certified Administrator
- Software Engineer
- Salesforce Developer

---

If you found this project helpful, consider giving it a ⭐ on GitHub.
