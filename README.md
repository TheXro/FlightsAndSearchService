# Welcome to Flight Service

## Project Setup
- clone the project
- run `npm install` in the root directory
- create a `.env` file in the root directory and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
    ```json
    {

        "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database":"Flight_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
        },
    }f

    ```

- once you've done the above steps, go the `src` folder from your terminal and execute `npx sequelize-cli db:create`