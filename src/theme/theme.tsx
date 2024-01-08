export const theme = Object.freeze({
  fonts: {
    main: `'Montserrat', sans-serif`,
    second: `'Open Sans', sans-serif`,
    accent: `'Sail', cursive`,
  },
  fontSizes: {
    mainFontSize: "14x",
    btnFontSize: "18px",
    titleSize: "50px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  colors: {
    // My styles
    textColor: "#444251",
    witeTextColor: "#FFFFFF",
  },
  media: {
    sm: "(min-width: 360px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1420px)",
    smToMd: "(min-width: 320px) and (max-width: 767.99px)",
    mdToLg: "(min-width: 768px) and (max-width: 1419.99px)",
    toMd: "(max-width: 767.99px)",
    smToLg: "(min-width: 320px) and (max-width: 1419.99px)",
  },
});
