class ApiError extends Error {
    constructor(
        statusCode,
        success = false,
        message = "Something went wrong",
        error = "",
        stack = ""
    ) {
        super(message);

        this.statusCode = statusCode;
        this.success = success;
        this.message = message;
        this.error = error;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError