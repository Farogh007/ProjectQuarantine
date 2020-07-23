const okta = require("@okta/okta-sdk-nodejs");

const client = new okta.Client({
  orgUrl: "https://dev-338894.okta.com",
  token: "00QB-InSvK8rU3DqPIcD5K_isuV4ad_9tpB0uI-9h-",
});

module.exports = client;
