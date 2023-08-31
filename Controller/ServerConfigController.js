const getServiceProvider=(req,res)=>{
  const config =
  {
    "schemas":
      ["urn:ietf:params:scim:schemas:core:2.0:ServiceProviderConfig"],
    "documentationUri": "http://localhost:3000/help/scim.html",
    "patch": {
      "supported":false
    },
    "bulk": {
      "supported":false,
    //  "maxOperations":1000,
    //  "maxPayloadSize":1048576
    },
    "filter": {
      "supported":true,
      "maxResults": 200
    },
    "changePassword": {
      "supported":true
    },
    "sort": {
      "supported":false
    },
    "etag": {
      "supported":false
    },
    "authenticationSchemes": [
      {
        "name": "OAuth Bearer Token",
        "description":
          "Authentication scheme using the OAuth Bearer Token Standard",
        "specUri": "http://www.rfc-editor.org/info/rfc6750",
        "documentationUri": "http://example.com/help/oauth.html",
        "type": "oauthbearertoken",
        "primary": true
      },

      {
        "name": "HTTP Basic",
        "description":
          "Authentication scheme using the HTTP Basic Standard",
        "specUri": "http://www.rfc-editor.org/info/rfc2617",
        "documentationUri": "http://example.com/help/httpBasic.html",
        "type": "httpbasic"
       }
    ],
    "meta": {
      "location": "https://localhost:3000/api/v2/ServiceProviderConfig",
      "resourceType": "ServiceProviderConfig",
      "created": "2010-01-23T04:56:22Z",
      "lastModified": "2011-05-13T04:42:34Z",
      "version": "W\/\"3694e05e9dff594\""
    }
  }
  return res.status(200).json(config)
}

const getResourceTypes=(req,res)=>{
  const config ={
    "totalResults":2,
    "itemsPerPage":10,
    "startIndex":1,
    "schemas":["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
    "Resources":[{
      "schemas": ["urn:ietf:params:scim:schemas:core:2.0:ResourceType"],
      "id":"User",
      "name":"User",
      "endpoint": "/Users",
      "description": "User Account",
      "schema": "urn:ietf:params:scim:schemas:core:2.0:User",
      "schemaExtensions": [{
        "schema":
          "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "required": false
      }],
      "meta": {
        "location":"https://localhost:3000/api/v2/ResourceTypes/User",
        "resourceType": "ResourceType"
      }
    },
   {
     "schemas": ["urn:ietf:params:scim:schemas:core:2.0:ResourceType"],
     "id":"Group",
     "name":"Group",
     "endpoint": "/Groups",
     "description": "Group",
     "schema": "urn:ietf:params:scim:schemas:core:2.0:Group",
     "meta": {
       "location":"https://example.com/api/v2/ResourceTypes/Group",
       "resourceType": "ResourceType"
     }
   }]
  }
  return res.status(200).json(config) 
}


module.exports={
  getServiceProvider,
  getResourceTypes,
}