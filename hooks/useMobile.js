import React, { useReducer, useEffect } from 'react';
import { userAgentChecker } from '../helpers/userAgent.helper';

// ======= state reducer -->
const mobileReducer = (state, action) => {
  switch (action.type) {
    case 'MOBILE_AGENT':
      return (state = true);
    case 'SMALL_SCREEN':
      return (state = true);
    case 'NOT_MOBILE':
      return (state = false);

    default:
      return (state = false);
  }
};

const useMobile = () => {
  const [Mobile, dispatch] = useReducer(mobileReducer, false);

  useEffect(() => {
    const agent = window.navigator.userAgent;
    const watcher = () => {
      if (window.innerWidth <= 800) return dispatch({ type: 'SMALL_SCREEN' });
      if (window.innerWidth > 800) return dispatch({ type: 'NOT_MOBILE' });
      if (userAgentChecker(agent)) return dispatch({ type: 'MOBILE_AGENT' });
      return dispatch({ type: 'NOT_MOBILE' });
    };

    // ======= add listeners -->
    window.addEventListener('load', watcher);
    window.addEventListener('resize', watcher);
    window.addEventListener('focus', watcher);

    // ======= cleanup -->
    return () => {
      window.removeEventListener('load', watcher);
      window.removeEventListener('resize', watcher);
      window.removeEventListener('focus', watcher);
    };
  });

  return Mobile;
};

export default useMobile;
