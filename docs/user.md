# User API Spec

## Register User API

Endpoint : POST /api/register

Request Body :

```json
{
  "username": "test",
  "password": "password",
  "name": "test test"
}
```

Request Body Success :

```json
{
  "data": {
    "username": "test",
    "name": "test test"
  }
}
```

Request Body Error :

```json
{
  "errors": "username already used"
}
```

## Login User API

Endpoint : POST /api/login

Request Body :

```json
{
  "username": "test",
  "password": "password"
}
```

Request Body Success :

```json
{
  "data": {
    "username": "test",
    "name": "test test",
    "token": "test"
  }
}
```

Request Body Error :

```json
{
  "errors": "username or password invalid"
}
```

## Update User API

Endpoint : PATCH /api/profile

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "test update", //optional
  "password": "new password" //optional
}
```

Request Body Success :

```json
{
  "data": {
    "name": "test update"
  }
}
```

Request Body Error :

```json
{
  "errors": "username or password invalid"
}
```

## Get User API

Endpoint : GET /api/profile

Headers :

- Authorization : token

Request Body Success:

```json
{
  "data": {
    "name": "test test",
    "username": "test"
  }
}
```

Request Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Endpoint : GET /api/profile/logout

Headers :

- Authorization : token

Request Body Success :

```json
{
  "data": "You're logout"
}
```

Request Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## GET All Users API

Endpoint : GET /api/users

Request Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "name": "test test",
      "username": "test"
    },
    {
      "id": 2,
      "name": "test test",
      "username": "test2"
    }
  ]
}
```
