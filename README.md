# Employee Classification

> Overview

- [x] Requirements
- [x] DB Engines, Programming Languages and Frameworks
- [ ] Entity breakdown & Design Database
- [ ] Applications
- [ ] Coding
- [ ] Write tests
- [ ] Deployment
- [ ] Retrospect

## Requirements

- [Refs](https://www.quora.com/What-can-you-expect-from-a-junior-developer/answer/Mason-White-11?ch=99&share=444736d7&srid=XStf1)
- [User stories](https://docs.google.com/document/d/1JvPrjX-tXjJHf2AroBsvQFoYOzBW2hEvwTNke4OqYEQ/edit?usp=sharing)

### Main User Stories

- As an employeer, I want to create a classification of level for my employee.
- As an employee, I want to know which level I am

### Some specific user stories

- As a software developer, I want to know which skills I need for each levels
- As an owner of an IT company or a TL who always have to interview the new candidates, I need to have a list of criteria to classify the candidate after the interview or prepare my interview questions

### Some obvious user stories

- As a user of the software, I want my data to be private, only me can see my data
- As a user, I wanna be able to find related things fast
- As a user, I wanna be log in with my google account or facebook account
- As a traditional user, I wanna be log in with username and password
- As a traditional user, sometimes i foget my password, I wanna reset it
- As a traditional user, I want to change my password

### Some user stories

- As a developer, I wanna be able to debug when something is went wrong
- As a modern user, I wanna use this site offline

## DB Engines, Programming Languages and Frameworks

### DB Engine

> The data flow in this system is supposed to be read many times. Almost them are raw data. Also there is no transaction in this system.
> The main user stories are related to search and find information

So the best choice to store data for this system is **MongoDB**. Also, can use **Redis** for sessions, caching. To allow full text search, **Elastic Search** is a good choice.

### Programming Languages & Frameworks

> The system conclude 4 applications: website(SSR), app(SPA), admin(SPA), API(REST API)

> WebSite (SSR) + API: should be a popular language and framework to make a SSR website, which support data manipulate with MongoDB, easy to make clean and stunning UI & UX. Also support to build a rapid API with fully documents

> App (SPA) && Admin (SPA): should be a popular language and framework which be able to create both client app and admin fast and reliable.

**Summary**

> Language : NodeJS Typescript
> Framework : SailsJS

## References:

1. REST API Design Rulebook
