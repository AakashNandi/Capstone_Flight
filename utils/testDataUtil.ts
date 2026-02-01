import fs from 'fs';
import path from 'path';

export function getTestData(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    'test-data',
    fileName
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Test data file not found: ${filePath}`);
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (error) {
    throw new Error(`Invalid JSON in test data file ${filePath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}