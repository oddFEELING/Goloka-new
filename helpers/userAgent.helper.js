// ======= Helper function to check user agent -->

export const userAgentChecker = (userAgent) => {
  if (userAgent.includes('Mobile')) return true;
  if (userAgent.includes('Phone')) return true;
  if (userAgent.includes('Android')) return true;

  return false;
};
