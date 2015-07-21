  var fs = require("fs");
  
  
  var findProducts = function (fileName) {
      var productNames= []; //create a place to store productNames
      var productMap = {};
      
      // body...
      var fileContent = fs.readFileSync(fileName, "utf8");// reading the csv using asyn method
      var products = fileContent.split("\n");//split with new line the file content that we just read
    
      products.forEach( function (product) { //how you looping through each of the products
           // body...
          var hold = product.split(",");// spliting columns with comas
          var productName = hold[1]; //telling you  to hold the second column
          //var quantitySold = hold[2]; //telling you  to hold the the third column
          
         if (productMap[productName] === undefined && productName != undefined) {//this is map method that used to check if u hv seen the product previous
            productNames.push(productName);//it its a new product it gets pushed to the array
            productMap[productName] = 0;//initial value of product is zero
          };
      });
      console.log(productNames);
      
      return productNames;
  }

  var findProductsSold = function (fileName) {
      var productNames= [];
      var productsMap = {};
      var quantitySold = [];
      // body...

      var fileContent = fs.readFileSync(fileName, "utf8");
      var products = fileContent.split("\n");
      
      products.forEach( function (product) {
          
          var productColumns = product.split(",");
          var productName = productColumns[1];
          var quantity = Number(productColumns[2]);

          if (productsMap[productName] === undefined) {
              quantitySold.push(productName);
              productsMap[productName] = 0;   
          }

          productsMap[productName] = productsMap[productName] + quantity;

      });
      
      //console.log(productMap);
      console.log(productsMap);
      return productsMap;
  };


 module.exports = function(fileName){

   this.productNames = function(callback){
        var files = findProducts(fileName)
        callback(null, files);
    };

    this.productsSold = function(callback){
        var files = findProductsSold(fileName)
        callback(null, files);
    };

};

