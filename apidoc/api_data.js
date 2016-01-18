define({ "api": [
  {
    "type": "get",
    "url": "/bodyType/:id",
    "title": "Get BodyType by Id",
    "name": "GetBodyTypeById",
    "description": "<p>Gets a BodyType by its Id</p>",
    "group": "BodyType",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>BodyTypeId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>BodyTypeId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of BodyType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of BodyType</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/BodyTypeController.js",
    "groupTitle": "BodyType"
  },
  {
    "type": "get",
    "url": "/bodyType",
    "title": "Get all BodyTypes",
    "name": "GetBodyTypes",
    "description": "<p>Lists all available BodyTypes</p>",
    "group": "BodyType",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of BodyTypes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>BodyTypeId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of BodyType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of BodyType</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/BodyTypeController.js",
    "groupTitle": "BodyType"
  },
  {
    "type": "get",
    "url": "/country",
    "title": "Get all Countries",
    "name": "GetCountries",
    "description": "<p>Lists all Countries</p>",
    "group": "Country",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of Countries</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>CountryId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.nativeName",
            "description": "<p>Name of Country in native language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.isocode31661",
            "description": "<p>ISO Code 31661</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/CountryController.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/country/:id",
    "title": "Get Country by Id",
    "name": "GetCountryById",
    "description": "<p>Gets a Country by its Id</p>",
    "group": "Country",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>CountryId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>CountryId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of Country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.nativeName",
            "description": "<p>Name of Country in native language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.isocode31661",
            "description": "<p>ISO Code 31661</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/CountryController.js",
    "groupTitle": "Country"
  },
  {
    "type": "get",
    "url": "/fashionStyle/:id",
    "title": "Get FashionStyle by Id",
    "name": "GetFashionStyleById",
    "description": "<p>Gets a FashionStyle by its Id</p>",
    "group": "FashionStyle",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>FashionStyleId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>FashionStyleId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of FashionStyle</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of FashionStyle</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/FashionStyleController.js",
    "groupTitle": "FashionStyle"
  },
  {
    "type": "get",
    "url": "/fashionStyle",
    "title": "Get all FashionStyles",
    "name": "GetFashionStyles",
    "description": "<p>Lists all FashionStyles</p>",
    "group": "FashionStyle",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of FashionStyles</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>FashionStyleId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of FashionStyle</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of FashionStyle</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/FashionStyleController.js",
    "groupTitle": "FashionStyle"
  },
  {
    "type": "post",
    "url": "/image",
    "title": "Create a new Image",
    "name": "CreateImage",
    "description": "<p>Creates a new Image, storing all its metadata.<br/> You need to create ImageData before calling this method, or have an already ImageData ID available.</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Original filename of the Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Image, if any</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "imageData",
            "description": "<p>ImageDataId containing data contents for this Image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "imageType",
            "description": "<p>ImageTypeId of this Image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The newly ImageId created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageController.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/imageData",
    "title": "Create a new ImageData",
    "name": "CreateImageData",
    "description": "<p>Creates a new ImageData, storing only binary data.s</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>ImageData as file, in <code>&lt;input type=&quot;file&quot;/&gt;</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ImageDataId created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageDataController.js",
    "groupTitle": "Image"
  },
  {
    "type": "delete",
    "url": "/image/:id",
    "title": "Delete an Image",
    "name": "DeleteImage",
    "description": "<p>Deletes an existing Image</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>ImageId of the Image to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ImageId deleted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageController.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/image/:id",
    "title": "Get Image by Id",
    "name": "GetImageById",
    "description": "<p>Gets Image and its metadata by its Id</p>",
    "group": "Image",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ImageId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>ImageId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.filename",
            "description": "<p>Image's Filename</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Image's Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.imageData",
            "description": "<p>ImageDataId for this Image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.imageType",
            "description": "<p>ImageTypeId for this Image</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageController.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/imageData/:imageDataId",
    "title": "Get ImageData Binary data",
    "name": "GetImageData",
    "description": "<p>Gets ImageData as binary stream</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "imageDataId",
            "description": "<p>The ImageDataId to get</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Byte",
            "optional": false,
            "field": "data",
            "description": "<p>The binary data for this ImageData</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageDataController.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/image/show/:id",
    "title": "Show an Image",
    "name": "ShowImage",
    "description": "<p>Get ImageData of the Image as Binary data.<br/> Useful for <code>&lt;img src=&quot;/api/image/show/1234&quot;/&gt;</code> in HTML.</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>ImageId of the Image to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ImageId deleted</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageController.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/imageType/:id",
    "title": "Get ImageType by Id",
    "name": "GetImageTypeById",
    "description": "<p>Gets a ImageType by its Id</p>",
    "group": "ImageType",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ImageTypeId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>ImageTypeId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array.extensions",
            "description": "<p>Extensions available for ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array.mimetypes",
            "description": "<p>MimeTypes available for ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageTypeController.js",
    "groupTitle": "ImageType"
  },
  {
    "type": "get",
    "url": "/imageType",
    "title": "Get all ImageTypes",
    "name": "GetImageTypes",
    "description": "<p>Lists all available ImageTypes</p>",
    "group": "ImageType",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of ImageTypes</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>ImageTypeId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array.extensions",
            "description": "<p>Extensions available for ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "array.mimetypes",
            "description": "<p>MimeTypes available for ImageType</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageTypeController.js",
    "groupTitle": "ImageType"
  },
  {
    "type": "put",
    "url": "/image/:id",
    "title": "Update an Image",
    "name": "UpdateImage",
    "description": "<p>Updates an Image, changing some or all of its metadata.</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": ":id",
            "description": "<p>ImageId of the Image to update</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Original filename of the Image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Image, if any</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "imageData",
            "description": "<p>ImageDataId containing data contents for this Image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "imageType",
            "description": "<p>ImageTypeId of this Image</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The newly ImageId created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageController.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/image",
    "title": "Upload a new Image",
    "name": "UploadImage",
    "description": "<p>Uploads a new Image using only binary data.<br/> It automatically finds the ImageType and filename, but isn't capable to store description.<br/> The typical use is in a <code>&lt;form&gt;</code>, using a <code>&lt;input type=&quot;file&quot;/&gt;</code>.</p>",
    "group": "Image",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>ImageData as file, in <code>&lt;input type=&quot;file&quot;/&gt;</code></p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ImageId created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/ImageController.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/language/:id",
    "title": "Get Language by Id",
    "name": "GetLanguageById",
    "description": "<p>Gets a Language by its Id</p>",
    "group": "Language",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>LanguageId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>LanguageId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.nativeName",
            "description": "<p>Native name of Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.isocode6391",
            "description": "<p>ISO Code 6391 for Language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/LanguageController.js",
    "groupTitle": "Language"
  },
  {
    "type": "get",
    "url": "/language",
    "title": "Get all Languages",
    "name": "GetLanguages",
    "description": "<p>Lists all available Languages</p>",
    "group": "Language",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of Languages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>LanguageId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.nativeName",
            "description": "<p>Native name of Language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.isocode6391",
            "description": "<p>ISO Code 6391 for Language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/LanguageController.js",
    "groupTitle": "Language"
  },
  {
    "type": "post",
    "url": "/message",
    "title": "Create a new message",
    "name": "CreateMessage",
    "description": "<p>Creates a new message, from an authenticated user to another. If the user emitter is not blacklisted by the recipient, then the message is transmitted to the recipient. <br/> <b>NOT IMPLEMENTED YET</b></p>",
    "group": "Message",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recipient",
            "description": "<p>The recipient of the message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/message/:id",
    "title": "Get Message by Id",
    "name": "GetMessageById",
    "description": "<p>Gets a Message by its Id</p>",
    "group": "Message",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>MessageId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>MessageId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.message",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.creator",
            "description": "<p>Creator of this Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.recipient",
            "description": "<p>Recipient of this Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/MessageController.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/message/:id",
    "title": "Get Message by Id",
    "name": "GetMessageById",
    "description": "<p>Gets a Message by its Id</p>",
    "group": "Message",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>MessageId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>MessageId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.message",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.creator",
            "description": "<p>Creator of this Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.recipient",
            "description": "<p>Recipient of this Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostCommentController.js",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/postComment",
    "title": "Create a PostComment",
    "name": "CreatePostComment",
    "description": "<p>Creates a new Comment on a Post</p>",
    "group": "PostComment",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>PostComment content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post",
            "description": "<p>PostId on which the comment is about.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "postId",
            "description": "<p>the Id for the newly created PostComment</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostCommentController.js",
    "groupTitle": "PostComment"
  },
  {
    "type": "post",
    "url": "/postComment",
    "title": "Create a PostCommentVote",
    "name": "CreatePostComment",
    "description": "<p>Create a new PostCommentVote on an existing PostComment</p>",
    "group": "PostComment",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postComment",
            "description": "<p>The PostCommentId on which the user is submitting a new PostCommentVote</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "vote",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>PostCommentVoteId</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostCommentVoteController.js",
    "groupTitle": "PostComment"
  },
  {
    "type": "post",
    "url": "/post",
    "title": "Creating a new Post",
    "name": "CreatePost",
    "description": "<p>Creates a new Post using parameters submitted</p>",
    "group": "Post",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the Post</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "creator",
            "description": "<p>Identifier of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post unique Identifier</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "put",
    "url": "/post",
    "title": "Updates a Post",
    "name": "CreatePost",
    "description": "<p>Creates a new Post using parameters submitted</p>",
    "group": "Post",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Post</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the Post</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "creator",
            "description": "<p>Identifier of the creator</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post unique Identifier</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/dressing",
    "title": "Get top 10 'dressing' Posts",
    "name": "GetDressingPosts",
    "group": "Post",
    "description": "<p>Gets top 10 'dressing' Posts informations.</p>",
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/dressing/:limit",
    "title": "Get top [limit] 'help' Posts",
    "name": "GetDressingPostsWithLimit",
    "group": "Post",
    "description": "<p>Get top [limit] 'dressing' Posts informations.<br/> limit min value is 1.<br/> limit max value is 100.</p>",
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/help",
    "title": "Get top 10 'help' Posts",
    "name": "GetHelpPosts",
    "group": "Post",
    "description": "<p>Gets top 10 'help' Posts informations.</p>",
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "get",
    "url": "/post/help/:limit",
    "title": "Get top [limit] 'help' Posts",
    "name": "GetHelpPostsWithLimit",
    "group": "Post",
    "description": "<p>Get top [limit] 'help' Posts informations.<br/> limit min value is 1.<br/> limit max value is 100.</p>",
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/post/:postId/addToImages/:imageId",
    "title": "Add an Image to an Post",
    "name": "PostAddToImages",
    "description": "<p>Adds an existing Image to an existing Post</p>",
    "group": "Post",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "postId",
            "description": "<p>PostId on which to add an existing Image</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "imageId",
            "description": "<p>ImageId of the Image to add</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostController.js",
    "groupTitle": "Post"
  },
  {
    "type": "post",
    "url": "/postVote",
    "title": "Creates a PostVote",
    "name": "CreatePostVote",
    "description": "<p>Creates a new PostVote on an existing Post</p>",
    "group": "PostVote",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "array.post",
            "description": "<p>The PostId on which the User wants to submit a vote</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "array.vote",
            "description": "<p>The value of the vote, true means positive vote, false is for negative vote</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "array.comment",
            "description": "<p>Text comment written by voter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "array.creator",
            "description": "<p>UserId that submitted this vote</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "array.voteReason",
            "description": "<p>The reason explaining why the vote is negative (when vote is negative only)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>PostVoteId newly created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostVoteController.js",
    "groupTitle": "PostVote"
  },
  {
    "type": "get",
    "url": "/postVote/:id",
    "title": "Get PostVote by Id",
    "name": "GetPostVoteById",
    "description": "<p>Gets a PostVote by its Id</p>",
    "group": "PostVote",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>PostVoteId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>PostVoteId</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "array.vote",
            "description": "<p>The value of the vote, true means positive vote, false is for negative vote</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.comment",
            "description": "<p>Text comment written by voter</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.creator",
            "description": "<p>UserId that submitted this vote</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.voteReason",
            "description": "<p>The reason explaining why the vote is negative (when vote is negative only)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostVoteController.js",
    "groupTitle": "PostVote"
  },
  {
    "type": "get",
    "url": "/postVote/:id",
    "title": "Get PostVote by Id",
    "name": "GetPostVoteById",
    "description": "<p>Gets a PostVote by its Id</p>",
    "group": "PostVote",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>PostVoteId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>PostVoteId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.message",
            "description": "<p>Message content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.creator",
            "description": "<p>Creator of this Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.recipient",
            "description": "<p>Recipient of this Message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/PostCommentVoteController.js",
    "groupTitle": "PostVote"
  },
  {
    "type": "get",
    "url": "/state/:id",
    "title": "Get State by Id",
    "name": "GetStateById",
    "description": "<p>Gets a State by its Id</p>",
    "group": "State",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>StateId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>StateId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of State</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of State</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/StateController.js",
    "groupTitle": "State"
  },
  {
    "type": "get",
    "url": "/state",
    "title": "Get all States",
    "name": "GetStates",
    "description": "<p>Lists all available States</p>",
    "group": "State",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of States</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>StateId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of State</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of State</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/StateController.js",
    "groupTitle": "State"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User by Id",
    "name": "GetUserById",
    "description": "<p>Gets a User by its Id</p>",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>UserId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "name",
            "description": "<p>User's display name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "description",
            "description": "<p>User self description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastLoggedIn",
            "description": "<p>Date when the user last logged in</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Male ('M') or Female ('F')</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>Height in cm</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>Weight in kilograms</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "image",
            "description": "<p>User's image Id (avatar)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "language",
            "description": "<p>User's LanguageId</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>User's CountryId</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "bodyType",
            "description": "<p>User's BodyTypeId</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fashionStyles",
            "description": "<p>List of fashionStyles for this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "followedUsers",
            "description": "<p>Users that this User follows</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "followedByUsers",
            "description": "<p>Users that follows this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "blacklistedUsers",
            "description": "<p>Users that are blacklisted by this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "blacklistedByUsers",
            "description": "<p>Users that blacklisted this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "incomingMessages",
            "description": "<p>List of incoming Messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "outgoingMessages",
            "description": "<p>List of outgoing Messages</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "posts",
            "description": "<p>List of Posts created by this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favoritePosts",
            "description": "<p>List of Posts favorited by this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "postVotes",
            "description": "<p>List of PostVotes created by this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "postComments",
            "description": "<p>List of PostComments created by this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "postCommentVotes",
            "description": "<p>List of PostCommentVotes created by this User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>ImageId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.filename",
            "description": "<p>Image's Filename</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Image's Description</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.imageData",
            "description": "<p>ImageDataId for this Image</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.imageType",
            "description": "<p>ImageTypeId for this Image</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "Logs out a User",
    "name": "LogOutUser",
    "description": "<p>Logs out a connected User</p>",
    "group": "User",
    "permission": [
      {
        "name": "User"
      }
    ],
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Signups a new User",
    "name": "SignupUser",
    "description": "<p>Creates a new User</p>",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User's display name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the newly created User</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Updates a User",
    "name": "UpdateUser",
    "description": "<p>Updates User metadata, User must be logged in</p>",
    "group": "User",
    "permission": [
      {
        "name": "USER"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The UserId updated</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/login",
    "title": "Login",
    "name": "UserLogin",
    "description": "<p>Logs a user in</p>",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The user's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user's password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/UserController.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/visibility/:id",
    "title": "Get Visibility by Id",
    "name": "GetVisibilityById",
    "description": "<p>Gets a Visibility by its Id</p>",
    "group": "Visibility",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>VisibilityId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>VisibilityId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Visibility</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of Visibility</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/VisibilityController.js",
    "groupTitle": "Visibility"
  },
  {
    "type": "get",
    "url": "/visibility",
    "title": "Get all Visibilities",
    "name": "GetVisibilitys",
    "description": "<p>Lists all available Visibilities</p>",
    "group": "Visibility",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of Visibilities</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>VisibilityId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of Visibility</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of Visibility</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/VisibilityController.js",
    "groupTitle": "Visibility"
  },
  {
    "type": "get",
    "url": "/voteReason/:id",
    "title": "Get VoteReason by Id",
    "name": "GetVoteReasonById",
    "description": "<p>Gets a VoteReason by its Id</p>",
    "group": "VoteReason",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>VoteReasonId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>VoteReasonId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of VoteReason</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of VoteReason</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/VoteReasonController.js",
    "groupTitle": "VoteReason"
  },
  {
    "type": "get",
    "url": "/voteReason",
    "title": "Get all VoteReasons",
    "name": "GetVoteReasons",
    "description": "<p>Lists all available VoteReasons</p>",
    "group": "VoteReason",
    "permission": [
      {
        "name": "none"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "array",
            "description": "<p>Array of VoteReasons</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "array.id",
            "description": "<p>VoteReasonId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.name",
            "description": "<p>Name of VoteReason</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "array.description",
            "description": "<p>Description of VoteReason</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.createdAt",
            "description": "<p>Creation date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "array.updatedAt",
            "description": "<p>Last update date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/controllers/VoteReasonController.js",
    "groupTitle": "VoteReason"
  }
] });
