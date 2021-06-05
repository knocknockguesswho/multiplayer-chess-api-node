export function convertMinuteToMS(minute: number) {
  return 1000 * 60 * minute;
}

export function getOriginalToken(bearerToken: string) {
  return bearerToken.replace('Bearer ', '');
}
