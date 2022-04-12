// ======= Helper function to check user agent -->

export const userAgentChecker = (userAgent) => {
  const Agents = ['Mobile', 'Phone', 'Android'];
  return Agents.some((element) => userAgent.includes(element));
};
