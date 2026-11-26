import type { ErrorRequestHandler } from 'express';
import { UnauthorizedError } from 'express-jwt';
import { Error as MongooseError, mongo } from 'mongoose';
import { STATUS_CODES } from 'node:http';

export class HttpError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}

export const handleApiError: ErrorRequestHandler = (error: unknown, _req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  let status = 500;
  let message = 'Internal server error.';
  if (error instanceof HttpError) {
    ({ status, message } = error);
  } else if (error instanceof UnauthorizedError) {
    status = 401;
    message = 'Authentication required or invalid token.';
  } else if (error instanceof MongooseError.CastError) {
    status = 400;
    message = 'Invalid field value.';
  } else if (error instanceof MongooseError.ValidationError) {
    status = 422;
    message = 'Validation failed.';
  } else if (error instanceof mongo.MongoServerError && error.code === 11000) {
    status = 409;
    message = 'A record with these values already exists.';
  } else if (error instanceof Error && 'status' in error && typeof error.status === 'number' && error.status >= 400 && error.status < 500) {
    status = error.status;
    message = STATUS_CODES[status] ?? 'Invalid request.';
  } else {
    console.error('API request failed:', error);
  }

  res.status(status).json({ success: false, errors: [{ message }] });
};
