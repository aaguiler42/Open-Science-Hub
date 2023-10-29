# Open Science Hub

Welcome to the Open Science Hub GitHub repository! This project was developed during a weekend hackathon by a team of two dedicated individuals. We went from an initial idea to a functional marketplace for open science projects, where people can discover and apply for exciting research initiatives.

## Project Overview

The Open Science Hub project was conceived, designed, and built in just a single weekend. The challenge we faced was to create a platform that facilitates open science projects. We aimed to make it easy for both researchers to find projects and for project leaders to discover passionate individuals to join their teams.

One of the unique aspects of this project is our use of a graph database, Neo4j, to manage project data. Due to the time constraints of the hackathon (only 48 hours), we opted to create a mock database and hardcode the initial dataset. However, our system is designed to seamlessly transition to a real database when you decide to do so.

### Features

- Discover and browse open science projects.
- Apply to projects based on your research interests.
- Seamless authentication provided by Clerk.dev.
- Integration with a GPT-based AI to enhance project recommendations.
- A chat-based user interface that replaces traditional navigation.
- Personalized project recommendations based on your profile.

## Technology Stack

- React
- Typescript
- Vite
- Neo4j (for graph database, replaceable with any database)
- Clerk.dev (for authentication)
- GPT API (for AI integration)

## License

This project is licensed under the [MIT License](LICENSE).

