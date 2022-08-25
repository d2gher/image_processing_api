# image_processing_api

This is an API that has two functionality

## Placeholder

You send a get request to (http://localhost:3000/placeholder?width="wanted_width"&height="wanted_height")
And it sends you a placeholder image with the width and height you entered in the query.
Note: the width and height query params are required and should be nubmbers

## Resize

You send a get request to (http://localhost:3000/resize?name="imagename"&width="wanted_width"&height="wanted_height")
And if it found an image with the name entered in the query it will resize it and send it back to you. If the resized version already exists, it will just send it and skips processing it again.
Note: The name query parm is required, the width and height however are optional, and the app will default to 300 if they aren't provided.

### Guide for the files:

#### Folder structure

    ├── dist                    # Comnplied code
    ├── public                  # Public folder for static images and files
    │   └── images              # Images folder
    │       ├── input
    │       └── output
    ├── spec                    # For Jasmine config
    └── src                     # Source code in typescrpit
       ├── Controllers          # Routes folder
       ├── tests                # Specs folder for Jasmine
       └── uitls                # Uitlistes folder
