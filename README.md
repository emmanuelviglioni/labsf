# ToDo List - Laboratório de Desenvolvimento de Software

This is a Java Spring Boot application developed by Ladesoft. The application provides a simple task management system.

## Description

This application allows users to create, edit, and list tasks. It uses Spring Boot for the backend, and it uses an H2 database for data storage.

## Pre Requisites

- Java 22
- Maven
- Spring Boot 3.2.5

## Installation

1. Clone the repository:
`git clone https://github.com/emmanuelviglioni/roteiro01.git`

2. Navigate to the project directory:
`cd roteiro01`

3. Install the dependencies:
`mvn clean install`

## Running the Application

1. To run the application, use the following command:
`mvn spring-boot:run`

2. The application will start running at `http://localhost:8080`.

## API Endpoints

- `GET /listAll` - List all tasks
- `POST /create` - Create a new task
- `PUT /setTaskAsComplete` - Set a task as complete
- `PUT /setTaskAsPending` - Set a task as pending

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
