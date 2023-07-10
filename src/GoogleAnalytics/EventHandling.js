import ReactGA from "react-ga";

export const handleGoogleAnalysis = (category, action, label, value = "") => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};
