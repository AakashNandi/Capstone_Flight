// utils/dataProvider.ts
import { readFileSync } from 'fs';
import * as path from 'path';

export function getTestData(fileName: string) {
  // Load the data from the testData.json file
  const dataPath = path.resolve(__dirname, '../config', `${fileName}.json`);
  const data = readFileSync(dataPath, 'utf-8');
  const parsedData = JSON.parse(data); // Parse the data from the JSON file

  // Return the moviePricing array if it exists
  return parsedData.moviePricing || [];
}
