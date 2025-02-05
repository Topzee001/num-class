# Number Classification API
This API provides functionalities to classify numbers by checking properties such as whether a number is prime, perfect, Armstrong, or its parity (odd/even). It also includes a fun fact about the given number fetched from the Numbers API.

## Features
- Check if a number is Prime.
- Determine if a number is Perfect.
- Check if a number is an Armstrong number.
- Calculate the Digit Sum of a number.
- Determine if a number is Odd or Even.
- Fetch a Fun Fact about the number.

## Technologies Used
- Node.js: Runtime environment.
- Express.js: Framework for building APIs.
- Axios: For making HTTP requests.
- Cors: For enabling cross-origin requests.

## Installation
clone the repository:
```bash
git clone https://github.com/Topzee001/num-class.git
```
Navigate to the project directory:
```bash
cd num-class
```
install dependencies:
```bash
npm install
```
start server:
```bash
npm start
```
the server will start to run on ``` http://localhost:8000``` by default.

## API Endpoint
Welcome Endpoint
- URL: /
- Method: GET
- Description: Displays a welcome message.
- Response:
```json
"Welcome to Topzee's Number Classification API!"
```
Number Classification
- URL: ```/api/classify-number```

- Method: ```GET```

- Query Parameter:
  - ```number``` (required): The number to classify.
Example Request:
```typescript
GET /api/classify-number?number=28
```
- Response:
  ```json
  {
    "number": 45,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "odd"
    ],
    "digit_sum": 9,
    "fun_fact": "45 is a triangular number, a hexagonal and 16-gonal number, a Kaprekar number, and a Harshad number."
  }
  ```
Error Response:
 ```json
  {
    "number": "book",
    "error": true
  }
  ```
## Helper Functions
### isPrime
Checks if a number is prime.

### isPerfect
Checks if a number is perfect (sum of divisors equals the number).

### checkArmstrong
Checks if a number is an Armstrong number.

### digitSum
Calculates the sum of digits in a number.

### fetchFunFact
Fetches a fun fact for the number from Numbers API.

## Testing the API
You can test the API using tools like:
  - Postman: Send requests and view responses easily.
    ```bash
    127.0.0.1:8000/api/classify-number?number=45
  - cURL: Test directly from the terminal.
Example cURL request:
```bash
curl "http://localhost:8000/api/classify-number?number=45"
```
## Deployment
The API has been deployed to a publicly accessible endpoint:

linl: 

## Contributing
Contributions are welcome! If you'd like to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## Author
Developed by Ibrahim (Topzee).
Feel free to reach out to me on topzee001@gmail.com for any questions or feedback.
