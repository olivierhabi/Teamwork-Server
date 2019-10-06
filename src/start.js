// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
import app from './app';
import '@babel/register';
({
  presets: ['@babel/preset-env']
});

// Import the rest of our application.
export default app;
