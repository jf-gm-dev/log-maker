export interface LogMessageInterface {
  title?: string;
  message: string;
  directory?: string;
  filename?: string;
  withId?: boolean;
  withDate?: boolean;
  withSeparator?: boolean;
  customSeparator?: string;
}