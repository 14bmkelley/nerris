module.exports = function(router, context) {
  
  router.get("/", function(request, response) {
    response.end("Hello world!");
  });
  
  return router;
  
};
