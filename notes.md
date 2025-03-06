# Roadmap

## Backend

### User Authentication System

_Topics Covered: Backend language & framework, database, authentication & authorization (session-based or JWT), API security basics._

Implement user registration and login functionality for a simple application.
Features should include:

- User registration (username, password, email).
- User login and logout.
- Password hashing and secure storage.
- Protecting API endpoints that require authentication (e.g., notes API project).
- Consider using JWT (JSON Web Tokens) for token-based authentication.

### Simple URL Shortener Service

_Topics Covered: Backend language & framework, database, API design, URL redirection, data modeling._

Create a service that takes a long URL and generates a shorter, unique URL.
Features should include:

- API endpoint to submit a long URL and receive a short URL.
- Database to store mappings between short and long URLs.
- Redirection logic: when a short URL is accessed, redirect to the original long URL.
- Consider adding analytics (click counts) as a bonus.

## Cloud

### Containerized Web Application Deployment

_Topics Covered: Docker, containerization, cloud compute (containers - AWS ECS/EKS, Google Kubernetes Engine, Azure Kubernetes Service), basic cloud deployment._

Take one of your backend projects (e.g., the To-Do List API).

- Dockerize the application (create a Dockerfile and build a Docker image).
- Deploy the Docker image to a cloud container service (e.g., AWS ECS Fargate for simpler setup, or explore Kubernetes for more advanced orchestration).
- Set up basic monitoring for your containerized application.

## System Design

### Implement Caching in a Backend API:

_Topics Covered: Caching strategies (in-memory caching, distributed caching with Redis or Memcached), performance optimization, backend development._

Take one of your backend API projects (e.g., To-Do List API).

- Implement caching for frequently accessed data (e.g., task lists, blog post details).
- Use an in-memory cache initially (like a dictionary/map in your backend language).
- Optionally, integrate a distributed cache like Redis for more scalability.
- Measure the performance improvement with and without caching.

### Add Logging and Monitoring to a Web Application:

_Topics Covered: Logging best practices, monitoring tools (CloudWatch, Stackdriver, Prometheus/Grafana, ELK stack), application observability, DevOps practices._

Enhance one of your backend projects with robust logging and basic monitoring.
Implement structured logging in your backend code to log important events (requests, errors, performance metrics).

- Integrate with a logging service (e.g., CloudWatch Logs, Google Cloud Logging).
- Set up basic monitoring dashboards to track application health and performance metrics (e.g., request latency, error rates).
