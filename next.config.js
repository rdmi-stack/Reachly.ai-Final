const { withSentryConfig } = require("@sentry/nextjs");

// Configuration for your Next.js application
const moduleExports = {
  reactStrictMode: true,
  // Other Next.js configurations can be added here if needed
};

// Sentry Webpack Plugin options
const sentryWebpackPluginOptions = {
  // Options...
  silent: true,
  org: "rdmi",
  project: "javascript-nextjs",
};

// Sentry Next.js specific options
const sentryNextJsOptions = {
  // Options...
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
};

// Export the configuration with Sentry integration
module.exports = withSentryConfig(
  moduleExports,
  sentryWebpackPluginOptions,
  sentryNextJsOptions,
);
