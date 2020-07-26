# Development Notes

1. Can i use sailsjs with typescript?

> Yes, check this link https://sailsjs.com/documentation/tutorials/using-type-script

2. Getting start

- [] Define routes and controllers

```bash
sails generate api example
```

## REST API DESIGN RULES

> A REST API is composed of four distinct resource archetypes: **document**, **collection**, **store**, and **controller**.

> Getting start with CRUD

1. URI Rules

> URI = scheme "://" authority "/" path ["?" query]["#" fragment]

- Forward slash seperator (/) must be used to indicated a hierarchical relationship
- A trailing forward slash (/) should not be included in URIs
- Hyphens (-) should be used to improve the readability of URIs
- Underscores (\_) should not be used in URIs
- Lowercase letters should be preferred in URI paths
- File extensions should not be included in URIs

2. Main Terms

> URI Authority Design

> Resource Modeling

> Resource Archetypes : types. Like design patterns, the resource archetypes help us consistently communicate the structures and behaviors that are commonly found in REST API designs.

> Document : A document resource is a singular concept that is akin to an object instance or database record. A document’s state representation typically includes both fields with values and links to other related resources.
