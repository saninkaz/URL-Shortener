
### URL Shortener API

This project is a backend API service for shortening URLs. It is built with Express.js and connected to a MongoDB database and enables users to shorten large URLs, manage requests, redirect shortened links, and track analytics.










## Features

- #### URL Shortening
    
      - POST /api/url/shorten: Accepts a long URL in the request body and returns a shortened URL.

             -Example Request Body:

                  { "longUrl": "https://verylargeurl.com" }

            - Example Response Body:

                  { success: true, message: "URL Shortened successfully", shortenedUrl: http://localhost:2000/url001 }
                   

      - Ensures no duplication: If a long URL already exists, the API returns the existing short URL.
    
- #### URL Redirection

      - GET /api/url/redirect/:shortUrl: Redirects the user to the original long URL.

      - Returns 404 error if the short URL does not exist.

- Fetch All URLs

      - GET /api/url/fetch: Fetches all URLs in the database
    
- #### Monetization & Rate Limiting

      - Monetization: Every 10th request to the same short URL redirects to an advertisement page (Example: google.com).

      - Rate Limiting: Limits requests to 20 per day for a specific short URL.

- #### Analytics

      - GET /details/:url - Checks whether the URL is a short or long URL and returns the hit count

      - GET /top/:number - Returns the top N URLs ranked by hit count.

- #### Home Page 

      - Added a Frontend Home Page for easy access to routes





## Hosting on Render

This service is hosted on (https://url-shortener-lh8w.onrender.com) through Render providing a seamless and scalable environment for running backend applications.


## Technologies Used

- Node.js and Express.js: Backend framework.
- MongoDB Atlas: For Database
- Render: Deployment platform for backend services.
## Notes

 Make sure to use these input formats
    
    - For Long URL : verylargeurl1.com

    - For Short URL : url001
## Screenshots

Here are the screenshot of the service


![Screenshot 1](https://github.com/user-attachments/assets/6a823489-32ab-4e26-9d85-24c69d991314)
![Screenshot 3](https://github.com/user-attachments/assets/fc50f99b-a7ff-416b-baf4-747d63f2f89d)
![Screenshot 2](https://github.com/user-attachments/assets/cfc3d650-58b9-480e-aa5d-f0f9b49cd742)


## Error Handling

- The API handles various error cases, including:

      -Invalid inputs: Missing required fields or incorrect data types.

      -Non-existent resources: Attempting to fetch or redirect to a URL that doesn't exist will return a 404 Not Found error.
      
      -Server errors: Issues with the database or server will return a 500 Internal Server Error.
## Contact

If you have any questions or issues with the project, feel free to reach out at:

   - Email: guardbro85@gmail.com
   - GitHub: saninkaz
