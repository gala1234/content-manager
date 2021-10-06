module.exports = {
  load: {
    before: ['gzip'],
  },
  settings: {
    gzip: {
      enabled: true,
    },
  },
};