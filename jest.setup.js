import '@testing-library/jest-dom';

// Suppress specific warnings in Jest tests
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0] && args[0].includes("React does not recognize the `fetchPriority` prop")) {
    return; // Ignore this warning
  }
  originalConsoleError(...args);
};
