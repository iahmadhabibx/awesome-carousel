module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        loose: true,
        targets: { node: "14", browsers: ">0.5%, not dead" },
      },
    ],
    "@babel/preset-react",
  ],
};
