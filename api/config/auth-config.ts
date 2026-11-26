export function getAuthSecret(): string {
  const secret = process.env.SECRET;
  if (!secret?.trim()) {
    throw new Error('SECRET must be set.');
  }
  return secret;
}
