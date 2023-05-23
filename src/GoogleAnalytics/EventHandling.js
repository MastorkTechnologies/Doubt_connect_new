import ReactGA from 'react-ga';

export const handleButtonClick = (label) => {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: label,
    });
  };