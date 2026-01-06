package com.fidelity.promptlab.models;

import java.util.Optional;
import java.util.function.Function;

/**
 * Generic result type for success/failure operations.
 * Similar to Either monad or Rust's Result type.
 *
 * @param <T> The success value type
 * @param <E> The error type
 */
public class Result<T, E> {
    private final T data;
    private final E error;
    private final boolean success;

    private Result(T data, E error, boolean success) {
        this.data = data;
        this.error = error;
        this.success = success;
    }

    public static <T, E> Result<T, E> success(T data) {
        return new Result<>(data, null, true);
    }

    public static <T, E> Result<T, E> failure(E error) {
        return new Result<>(null, error, false);
    }

    public boolean isSuccess() {
        return success;
    }

    public boolean isFailure() {
        return !success;
    }

    public Optional<T> getData() {
        return Optional.ofNullable(data);
    }

    public Optional<E> getError() {
        return Optional.ofNullable(error);
    }

    public <U> Result<U, E> map(Function<T, U> mapper) {
        if (success) {
            return Result.success(mapper.apply(data));
        }
        return Result.failure(error);
    }

    public T getOrElse(T defaultValue) {
        return success ? data : defaultValue;
    }

    public T getOrThrow() {
        if (success) {
            return data;
        }
        throw new IllegalStateException("Result is failure: " + error);
    }
}
