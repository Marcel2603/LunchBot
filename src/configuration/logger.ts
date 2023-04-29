import { createLogger, format, transports } from "winston";

export const loggingTimestampFormat = format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
});

export const logger = createLogger({
    level: "debug",
    format: format.combine(
        loggingTimestampFormat,
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [new transports.Console()],
});
