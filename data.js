const users = [
    {
        "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id":"1",
        "externalId":"bjensen",
        "meta":{
          "resourceType":"User",
          "created":"2021-08-01T18:29:49.793Z",
          "lastModified":"2023-08-01T18:29:49.793Z",
          "location":
      "http://localhost:3000/api/v2/users/1"
        },
        "name":{
          "formatted":"Ms. Barbara J Jensen III",
          "familyName":"Jensen",
          "givenName":"Barbara"
        },
        "userName":"bjensen",
        "phoneNumbers":[
          {
            "value":"555-555-8377",
            "type":"work"
          }
        ],
        "emails":[
          {
            "value":"bjensen@example.com",
            "type":"work"
          }
        ]
      },
      {
        "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id":"2",
        "externalId":"ajo",
        "meta":{
          "resourceType":"User",
          "created":"2021-08-01T18:29:49.793Z",
          "lastModified":"2023-08-01T18:29:49.793Z",
          "location":
      "http://localhost:3000/api/v2/users/2"
        },
        "name":{
          "formatted":"Ms. Anne J Jonhson",
          "familyName":"Anne",
          "givenName":"Anna"
        },
        "userName":"ajonhson",
        "phoneNumbers":[
          {
            "value":"555-444-8377",
            "type":"work"
          }
        ],
        "emails":[
          {
            "value":"ajonhson@example.com",
            "type":"work"
          }
        ]
      },
      {
        "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id":"3",
        "externalId":"cph",
        "meta":{
          "resourceType":"User",
          "created":"2021-08-01T18:29:49.793Z",
          "lastModified":"2023-08-01T18:29:49.793Z",
          "location":
      "http://localhost:3000/api/v2/users/3"
        },
        "name":{
          "formatted":"Ms. Carol J Philip",
          "familyName":"Carol",
          "givenName":"Carol"
        },
        "userName":"cphilip",
        "phoneNumbers":[
          {
            "value":"555-333-8377",
            "type":"work"
          }
        ],
        "emails":[
          {
            "value":"cphilip@example.com",
            "type":"work"
          }
        ]
      },
      {
        "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id":"4",
        "externalId":"dtr",
        "meta":{
          "resourceType":"User",
          "created":"2021-08-01T18:29:49.793Z",
          "lastModified":"2023-08-01T18:29:49.793Z",
          "location":
      "http://localhost:3000/api/v2/users/4"
        },
        "name":{
          "formatted":"Ms. Dona Trump",
          "familyName":"Dona",
          "givenName":"Dona"
        },
        "userName":"dtrump",
        "phoneNumbers":[
          {
            "value":"555-222-8377",
            "type":"work"
          }
        ],
        "emails":[
          {
            "value":"dtrump@example.com",
            "type":"work"
          }
        ]
      },
      {
        "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id":"5",
        "externalId":"esm",
        "meta":{
          "resourceType":"User",
          "created":"2021-08-01T18:29:49.793Z",
          "lastModified":"2023-08-01T18:29:49.793Z",
          "location":
      "http://localhost:3000/api/v2/users/4"
        },
        "name":{
          "formatted":"Ms. Elenor Smith",
          "familyName":"Elenor",
          "givenName":"Elenor"
        },
        "userName":"esmith",
        "phoneNumbers":[
          {
            "value":"555-111-8377",
            "type":"work"
          }
        ],
        "emails":[
          {
            "value":"esmith@example.com",
            "type":"work"
          }
        ]
      },
      {
        "schemas":["urn:ietf:params:scim:schemas:core:2.0:User"],
        "id":"6",
        "externalId":"fpq",
        "meta":{
          "resourceType":"User",
          "created":"2021-08-01T18:29:49.793Z",
          "lastModified":"2023-08-01T18:29:49.793Z",
          "location":
      "http://localhost:3000/api/v2/users/5"
        },
        "name":{
          "formatted":"Ms. Flora Paquain",
          "familyName":"Flora",
          "givenName":"Flora"
        },
        "userName":"fpaquain",
        "phoneNumbers":[
          {
            "value":"555-000-8377",
            "type":"work"
          }
        ],
        "emails":[
          {
            "value":"fpaquain@example.com",
            "type":"work"
          }
        ]
      },
];

const groups=[
  {
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
    "id": "1",
    "displayName": "TestScmGrp",
    "members": [
      {
        "value" : "1",
        "$ref":"http://localhost:3000/api/v2/users/1",
        "type":"User",
        "display": "bjensen",
      },
      
    ],
    "meta": {
        "resourceType": "Group"
    }
  },
    {
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
      "id": "2",
      "displayName": "SecondGroup",
      "members": [
        {
          "value" : "2",
          "$ref":"http://localhost:3000/api/v2/users/2",
          "type":"User",
          "display": "ajonhson",    //username in Okta for users. Group name in case of group
        },
      ],
      "meta": {
          "resourceType": "Group"
      }
  },
  {
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
    "id": "3",
    "displayName": "thirdGroup",
    "members": [
      {
        "value" : "2",
        "$ref":"http://localhost:3000/api/v2/groups/2",
        "type":"Group",
        "display": "SecondGroup",
      },
    ],
    "meta": {
        "resourceType": "Group"
    }
  },
  {
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
    "id": "4",
    "displayName": "fourthGroup",
    "members": [],
    "meta": {
        "resourceType": "Group"
    }
  },
  {
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
    "id": "5",
    "displayName": "fifthGroup",
    "members": [],
    "meta": {
        "resourceType": "Group"
    }
  },

];

const usermeta ={
    "resourceType": "User",
    "created": "2021-08-01T18:29:49.793Z",
    "lastModified": "2023-08-01T18:29:49.793Z",
    }

const groupmeta={
  "resourceType": "Group",
}
const userNotFound = {
    "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
    "detail": "User not found",
    "status": 404
}

const groupNotFound = {
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:Error"],
  "detail": "Group not found",
  "status": 404
}

module.exports={users, groups, usermeta, groupmeta, userNotFound, groupNotFound};