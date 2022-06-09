const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '4a83dbfa-7fe3-47e8-a9f9-7d9ef8a621eb',
  env: {
    testUrl: "https://www.fashionphile.com/",
    devUrl: "https://esa.ens.sch.ae:8443/",
    prodUrl: "https://esa.ens.sch.ae:8443/",

  }
})