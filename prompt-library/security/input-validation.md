# Pattern: Input Validation

**Category:** Security
**Language:** TypeScript
**Success Rate:** 88%
**Last Verified:** December 2025

## Prompt Template

```
Create an input validation function for [input-type]:

Input structure:
[paste interface or describe input]

Validation rules:
1. [field-1]: [validation-rules]
2. [field-2]: [validation-rules]
3. [field-3]: [validation-rules]

Security considerations:
- [security-concern-1]
- [security-concern-2]

Return format:
- Success: { valid: true, data: [sanitized-input] }
- Failure: { valid: false, errors: [array-of-error-messages] }

Constraints:
- Must sanitize all string inputs
- Must not throw exceptions
- Must provide specific error messages per field
- Must be synchronous
```

## Example Usage

```
Create an input validation function for LoginRequest:

Input structure:
interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

Validation rules:
1. email: Required, valid email format, max 254 chars, lowercase
2. password: Required, min 8 chars, max 128 chars, no leading/trailing whitespace
3. rememberMe: Optional, must be boolean if provided

Security considerations:
- Prevent email enumeration (generic error messages)
- No password content in error messages
- Sanitize email to prevent injection
- Rate limiting hint in response

Return format:
- Success: { valid: true, data: { sanitized LoginRequest } }
- Failure: { valid: false, errors: ["Email is required", "Invalid email format"] }

Constraints:
- Must sanitize all string inputs
- Must not throw exceptions
- Must provide specific error messages per field
- Must be synchronous
```

## Expected Output Quality: 9/10
