import * as fs from 'fs';
import ApiConfigFileNotFoundError from '../../../errors/ConfigError/ApiConfigFileNotFoundError';

export default async () => {
  try {
    const apiConfig = fs.readFileSync('./config/api.config.json', 'utf8');
    return { API_CONFIG: JSON.parse(apiConfig) };
  } catch (error) {
    throw new ApiConfigFileNotFoundError('Failed to read API config');
  }
};
