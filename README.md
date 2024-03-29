# BookLendApp-React
## Description
It's a frontend application built in React in JavaScript. The application allows for book borrowing, user and book creation.

## Application Demo

Here's the demo of my application, including backend integration. You can see how the user interface visually operates and what features are available.

👉 [Click here to see the demo  Wait a few seconds, it's free!](https://booklenddemo.azurewebsites.net/?fbclid=IwAR2DkTmPaGp6Lg68SZ9CPX32AszbBQi2uesWfgtS_ynUgAGsDc46w9J-xBY)


## Running

### 1. Using Docker
#### Pulling Docker Images
1. Make sure you have Docker installed on your machine.
2. Pull the Docker images:
    ```bash
    docker pull saiq123/booklend
    docker pull saiq123/booklendreact
    ```
3. Run the Docker images:
    ```bash
    docker run -p 8080:8080 saiq123/booklend
    docker run -p 5173:5173 saiq123/booklendreact
    ```
4. Your application will be available at `http://localhost:5173`.

### 2. Locally (by cloning the repository)
#### Clone the Repository
```bash
git clone https://github.com/TomaszHamerla/BookLendApp-React
```
1. Navigate to the project directory:
```bash
cd BookLendApp-React
```
2. Install the required dependencies using npm:
 ```bash
npm install
```
3. Start the frontend application:
 ```bash
 npm run dev
 ```
4. Your application will be available at `http://localhost:5173`.





