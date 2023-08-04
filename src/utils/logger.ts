class Logger {
  log(message: string) {
    console.log(`action run successfully ${message}`);
  }

  error(message: string) {
    console.error(`[ERROR] ${message}`);
  }
}

const logger = new Logger();
export default logger;
