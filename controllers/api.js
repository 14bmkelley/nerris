module.exports = function(router, context) {
  
  router.post("/", function(request, response) {
    // Add new user or something
    response.end("Hello world!");
  });
  
  return router;
  
};
