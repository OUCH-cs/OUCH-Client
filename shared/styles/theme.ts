type ThemeType = {
  colors: {
    primary: string;
    background: string;
    secondary: string;
    tertiary: string;
    white: string;
    white_f8: string;
    white_f1: string;
    white_f5: string;
    white_e5: string;
    gray_de: string;
    gray_d1: string;
    gray_7: string;
    gray_4: string;
    black: string;
  };
};

const Theme: ThemeType = {
  colors: {
    primary: "#0097A7",
    background: "#F5F9FC",
    secondary: "#B9D6D9",
    tertiary: "#E3F5F6",

    white: "#FFFFFF",
    white_f8: "#F8F8F8",
    white_f1: "#F1F1F5",
    white_f5: "#F5F5F5",
    white_e5: "#E5E5EC",

    gray_de: "#DEDEDE",
    gray_d1: "#D1D1D1",
    gray_7: "#767676",
    gray_4: "#434343",
    black: "#000000",
  },
};

export default Theme;
