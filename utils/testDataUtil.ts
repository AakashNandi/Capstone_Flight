import fs from 'fs';  // Import file system module to interact with the filesystem
import path from 'path';  // Import path module to handle and transform file paths

// Function to get test data from a JSON file
export function getTestData(fileName: string) {
  
  const filePath = path.join(
    process.cwd(),  // Current working directory
    'test-data',    // 'test-data' folder
    fileName        // The specific test data file passed as an argument
  );

  // Check if the file exists, if not throw an error
  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }

  try {
    // Read the file, parse it as JSON and return the data
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    throw new Error(`Invalid JSON in test data file ${filePath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}
