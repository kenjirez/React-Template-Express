# Customized React Template with Express Backend

This project is a customized React template built with Vite, enhanced by [kenjirez](https://github.com/kenjirez), and integrated with an Express backend for serving the React files. It also utilizes React Router for frontend routing.

## Features

- Customized React setup with Vite for fast development.
- Integrated Express backend for serving static React files and API endpoints.
- Frontend routing using React Router for smooth navigation.

## Getting Started

1. **Clone the repository:**

   ```
   sh
   git clone https://github.com/kenjirez/custom-react-express-template.git
   cd react-template-express
   ```
2. **Install Dependencies:**
	Navigate to the frontend directory and install frontend dependencies:
	```
	cd frontend 
	npm install && npm install --save-dev
	```
	Navigate to the backend directory and install backend dependencies:
	```
	cd ../backend 
	npm install && npm install --save-dev
	```
3. **Build the Frontend:**
	In the frontend directory, build the React app:
	```
	npm run build
	```
4. **Run the Express Server:**
	In the backend directory, start the Express server:
	```
	npm run server
	```
	The Express server will serve the React files and API endpoints at [http://localhost:1111](http://localhost:3000/).
5. **Explore the App:**
	Open your browser and navigate to [http://localhost:3000](http://localhost:1111/) to see the app in action.
6. **Develop the React Frontend:**
	In the frontend directory, run the following command:
	```
	npm run dev
	```
## Project Structure
```
.
├── backend
│   ├── package.json
│   ├── src
│   │   ├── classes
│   │   ├── database
│   │   ├── handler
│   │   ├── index.ts
│   │   └── routes
│   └── tsconfig.json
└── frontend
    ├── index.html
    ├── package.json
    ├── src
    │   ├── components
    │   ├── fonts
    │   ├── imgs
    │   ├── main.css
    │   ├── main.tsx
    │   ├── styles
    │   │   └── Index.css
    │   ├── views
    │   │   └── Index.tsx
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```
## Contributing
Contributions are welcome! Feel free to submit issues and pull requests to improve this template.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/):
```
Copyright (c) 2023 Marco

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
