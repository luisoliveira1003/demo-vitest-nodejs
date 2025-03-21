export function validateShortURL(url) {
  const maxLength = 10;
  const urlPattern = /^[a-zA-Z0-9_-]+$/;

  return url.length <= maxLength && urlPattern.test(url);
}
