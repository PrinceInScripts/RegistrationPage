# Registration Page Frontend

### Setup Instruction

1. Clone the project

```
  git clone https://github.com/PrinceInScripts/RegistrationPage/tree/main/client
```

2. Move into the directory

```
  cd client
```

3. Install dependencies

```
 npm i 
```

4. Run the server

```
  npm run dev
```

### How to setup in your project [Link]
[https://tailwindcss.com/docs/guides/vite]

1. Install tailwind and other dependencies
```
  npm install -D tailwindcss postcss autoprefixer
```

2. Create the `tailwind.config.js` file
```
  npx tailwindcss init -p
```

3. Add the files and extensions to tailwind config in the content property
```
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the talwind directives on the top of index.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Then run the server,tailwind should be integrated.....

### Adding plugins and dependencies

```
npm i @reduxjs/toolkit react-redux react-router-dom react-icons daisyui axios react-hot-toast 
```

