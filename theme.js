import theme from "mdx-deck/themes";

export default {
  ...theme,
  li: {
    "list-style": "none",
    margin: "40px 0"
  },
  font: "Josefin Slab",
  colors: {
    ...theme.colors,
    background: "#ddcdb5"
  },
  h1: {
    "font-family": "Pacifico",
    "font-size": "3.5em",
    "margin-bottom": "25px",
    "font-weight": "500"
  },
  css: { ...theme.css, em: { color: "#6e2f3b" } }
};
