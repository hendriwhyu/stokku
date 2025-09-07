import { writeFile, mkdir, unlink, stat } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

/**
 * Configuration for file storage operations
 */
export interface FileStorageConfig {
  uploadDir: string;
  allowedExtensions?: string[];
  maxFileSize?: number; // in bytes
}

/**
 * Result of file storage operation
 */
export interface FileStorageResult {
  success: boolean;
  filePath?: string;
  fileName?: string;
  error?: string;
}

/**
 * File storage utility class for handling file operations
 */
export class FileStorage {
  private config: FileStorageConfig;

  constructor(config: FileStorageConfig) {
    this.config = config;
  }

  /**
   * Upload a file to the specified directory
   * @param file - The file to upload
   * @param subPath - Optional sub-path within upload directory
   * @returns FileStorageResult with uploaded file details
   */
  async uploadFile(file: File, subPath?: string): Promise<FileStorageResult> {
    try {
      // Validate file extension
      if (this.config.allowedExtensions) {
        const fileExtension = file.name.split('.').pop()?.toLowerCase();
        if (!fileExtension || !this.config.allowedExtensions.includes(fileExtension)) {
          return {
            success: false,
            error: `File extension .${fileExtension} is not allowed`,
          };
        }
      }

      // Validate file size
      if (this.config.maxFileSize && file.size > this.config.maxFileSize) {
        return {
          success: false,
          error: `File size exceeds maximum allowed size of ${this.config.maxFileSize} bytes`,
        };
      }

      // Create upload directory if it doesn't exist
      const uploadPath = subPath 
        ? join(process.cwd(), 'public', this.config.uploadDir, subPath)
        : join(process.cwd(), 'public', this.config.uploadDir);
      
      await mkdir(uploadPath, { recursive: true });

      // Generate unique filename
      const fileExtension = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = join(uploadPath, fileName);

      // Write file to disk
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      await writeFile(filePath, fileBuffer);

      // Return relative path for database storage
      const relativePath = subPath 
        ? `/${this.config.uploadDir}/${subPath}/${fileName}`
        : `/${this.config.uploadDir}/${fileName}`;

      return {
        success: true,
        filePath: relativePath,
        fileName,
      };
    } catch (error) {
      console.error('Error uploading file:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Update an existing file by replacing it with a new one
   * @param oldFilePath - The current file path to be replaced
   * @param newFile - The new file to upload
   * @param subPath - Optional sub-path within upload directory
   * @returns FileStorageResult with updated file details
   */
  async updateFile(
    oldFilePath: string,
    newFile: File,
    subPath?: string
  ): Promise<FileStorageResult> {
    try {
      // Upload new file first
      const uploadResult = await this.uploadFile(newFile, subPath);
      if (!uploadResult.success) {
        return uploadResult;
      }

      // Delete old file if it exists
      await this.deleteFile(oldFilePath);

      return uploadResult;
    } catch (error) {
      console.error('Error updating file:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Delete a file from storage
   * @param filePath - The file path to delete (relative to public folder)
   * @returns FileStorageResult indicating success/failure
   */
  async deleteFile(filePath: string): Promise<FileStorageResult> {
    try {
      if (!filePath) {
        return { success: true }; // Nothing to delete
      }

      const fullPath = join(process.cwd(), 'public', filePath);
      
      // Check if file exists before attempting to delete
      try {
        await stat(fullPath);
      } catch {
        return { success: true }; // File doesn't exist, consider it deleted
      }

      await unlink(fullPath);
      return { success: true };
    } catch (error) {
      console.error('Error deleting file:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Check if a file exists
   * @param filePath - The file path to check (relative to public folder)
   * @returns boolean indicating if file exists
   */
  async fileExists(filePath: string): Promise<boolean> {
    try {
      const fullPath = join(process.cwd(), 'public', filePath);
      await stat(fullPath);
      return true;
    } catch {
      return false;
    }
  }
}

// Pre-configured instances for common use cases
export const productFileStorage = new FileStorage({
  uploadDir: 'uploads/products',
  allowedExtensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
  maxFileSize: 5 * 1024 * 1024, // 5MB
});

// Default file storage instance
export const defaultFileStorage = new FileStorage({
  uploadDir: 'uploads',
});