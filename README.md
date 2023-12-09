# Basic_API_with_Scalability_Considerations


To run the project follow below steps:

1 : clone the Project
2 : run command node app.js


### Request methods

The request method is the way we distinguish what kind of action our endpoint is being "asked" to perform. For example, `GET` pretty much gives itself. But we also have a few other methods that we use quite often.

| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve student details. |
| `POST`   | Used to add a new student. |
| `PUT`    | Used to update student information. |
| `DELETE` | Used to delete a student.       


### Examples

| Method   | URL                                      | Description                               |
| -------- | ---------------------------------------- | ----------------------------------------  |
| `GET`    | `/students/{id}`                         | Retrieve details for a specific student.  |
| `GET`    | `/students`                              | List students with cursor-based pagination. |
| `POST`   | `/students`                              | Add a new student to the system.          |
| `PUT`    | `/students/{id}`                         | Update information for a specific student.|
| `DELETE` | `/students/{id}`                         | Remove a specific student from the system.|

