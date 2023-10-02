# Reward API Spec

## Get Reward API

Endpoint : GET /api/users/:id/rewards

Headers :

- Authorization : token

Query Params :

- at : Rewards with availableAt from 2020-03-15T00:00:00Z through to 2020-03-21T00:00:00Z. Notice that rewards are always at midnight! Rewards also need an expiredAt date, which is exactly 24 hours after their availableAt date. optional

Request Body Success :

```json
{
  "data": {
    "availableAt": "2020-03-18T00:00:00Z",
    "redeemedAt": "... current time ...",
    "expiresAt": "2020-03-19T00:00:00Z"
  }
}
```

Request Body Error :

```json
{
  "errors": "This reward is already expired"
}
```
