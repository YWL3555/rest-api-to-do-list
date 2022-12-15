# rest-api-to-do-list

'npm start' to run the server

'npm test' to run the test

## Build docker image and run

1. Execute command below to build a Docker image
```console
docker build -t todolist .    
```

2. Execute command below to run the app in a Docker container
```console
docker run -it -p 8000:8000 --rm --name todolist-1 todolist   
```

You should now be able to access the app on `localhost:8000`.
