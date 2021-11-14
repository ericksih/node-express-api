# node-express-api

### Get All Users
Request:
- Method: GET
- Endpoint: `/users`
- Response : 
```json
[
    {
        "name": "Mandra",
        "lastName": "Doe",
        "age": 27,
        "id": "cee9999d-00d4-4ed7-b288-c490940785a0"
    },
    {
        "name": "Atun",
        "lastName": "Doe",
        "age": 25,
        "id": "6d54e658-9b14-4938-bc0a-17b45794c7bf"
    }
]
```

### Create User
Request:
- Method: POST
- Endpoint: `/users`

Body : 
``` json 
{
        "name": "Doel",
        "lastName": "Doe",
        "age": 25
}
```

Response: 
``` json 
[
    {
        "name": "Atun",
        "lastName": "Doe",
        "age": 25,
        "id": "6d54e658-9b14-4938-bc0a-17b45794c7bf"
    },
    {
        "name": "Mandra",
        "lastName": "Doe",
        "age": 25,
        "id": "6a4d16bb-258b-48b6-ba0a-de4ddf2e1dde"
    },
    {
        "name": "Doel",
        "lastName": "Doe",
        "age": 25,
        "id": "a3039b17-9119-4834-beb3-74344ee61dc0"
    }
]
```



### Get User By ID
Request: 
- Method: GET
- EndPoint: `/users/:id`
- response:
 ```json
 {
    "name": "Mandra",
    "lastName": "Doe",
    "age": 27,
    "id": "cee9999d-00d4-4ed7-b288-c490940785a0"
}
```

### Edit User By ID
Request: 
- Method: PATCH
- EndPoint: `/users/:id`
- Body 
``` json 
{
    "name": "doel"
}
```

- Response: 
```json 
[
    {
        "name": "doel",
        "lastName": "Doe",
        "age": 27,
        "id": "cee9999d-00d4-4ed7-b288-c490940785a0"
    },
    {
        "name": "Atun",
        "lastName": "Doe",
        "age": 25,
        "id": "6d54e658-9b14-4938-bc0a-17b45794c7bf"
    }
]
```

### Delete User By ID
Request: 
- Method: DELETE
- EndPoint : `/users/:id`

- Response: 
```
user with the id cee9999d-00d4-4ed7-b288-c490940785a0 succes deleted
```
