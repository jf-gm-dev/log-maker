import { LogMessageInterface } from './interfaces';
declare function writeFile(dir: string, text: string): Promise<void>;
declare function logMessage(data: LogMessageInterface): void;
declare const _default: {
    logMessage: typeof logMessage;
    writeFile: typeof writeFile;
};
export default _default;
