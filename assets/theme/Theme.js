const Theme = {
  colors: {
    pri: '#3056D3',
    sec: '#4064AC',
    sec_2: '#1C9CEA',
    lt_1: '#f3f4ff',
    lt_2: '#F4F7FF',
    lt_3: '#afb2b5',
    dk_1: '#141711',
    dk_2: '#1e1e1e',
    error: '#D64937',
    success: '#13C296',
  },
  fonts: {
    pri: `'Inter', sans-serif`,
    sec: `'Roboto', sans-serif`,
    size: (level) => {
      if (level === 'xs') return 'clamp(.6rem,.75vw, .8rem )';
      if (level === 'sm') return 'clamp(.8rem, .85vw, 1rem)';
      if (level === 'md') return 'clamp(.8rem, 1vw, 1.5rem)';
      if (level === 'lg') return 'clamp(1.3rem, 1.4vw, 2rem)';
      if (level === 'xl') return 'clamp(1.5rem, 2.4vw, 5rem)';
      if (level === 'xxl') return 'clamp(2.5rem, 3vw, 10rem)';
      return '1rem';
    },
    fixed: (level) => {
      if (level === 'xs') return '.5rem';
      if (level === 'sm') return '1rem';
      if (level === 'md') return '1.4rem';
      if (level === 'lg') return '1.8rem';
      if (level === 'xl') return '3rem';
      if (level === 'xxl') return '5rem';
      return '1rem';
    },
  },
  alpha: {
    pri: (level) => `rgba(48, 86, 211, ${level})`,
    sec: (level) => `rgba(84, 100, 174, ${level})`,
    sec_2: (level) => `rgba(29, 156, 234, ${level})`,
    lt_1: (level) => `rgba(243, 244, 255, ${level})`,
    lt_2: (level) => `rgba(244, 247, 255, ${level})`,
    lt_3: (level) => `rgba(175, 178, 181, ${level})`,
    dk_1: (level) => `rgba(20, 23, 17, ${level})`,
    dk_2: (level) => `rgba(30, 30, 30, ${level})`,
    error: (level) => `rgba(214, 73, 55, ${level})`,
    success: (level) => `rgba(19, 194, 150, ${level})`,
  },
  transitions: {
    smooth: '300ms all ease-in-out',
    mid: '500ms all ease-in-out',
    slow: '800ms all ease-in-out',
    extended: '1200ms all ease-in-out',
  },
};

export default Theme;
