import fs from 'fs';
import path from 'path';

export function getTestData(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    'test-data',
    fileName
  );

  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}