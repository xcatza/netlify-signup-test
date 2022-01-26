exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;

  const responseBody = {
    app_metadata: {
      roles: ["basic-user"]
    },
    user_metadata: {
      ...user.user_metadata, // append current user metadata
    }
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};