

var fs  = require("fs"); 

var findFiles = function (folder) {
  var files = fs.readdirSync(folder);
  
  var productList = []; 

  files.forEach(function (fileName) { 
    //console.log("file : " + fileName ); 
    //how do I see wha tis inside of a file? 
    var fileContent = fs.readFileSync(folder + "/" + fileName, 'utf8'); 
    var products = fileContent.split("\n"); 
     
    products.forEach(function(product){ 
      console.log(product); 
      productList.push(product); 
    }); 
    //console.log("--------------")  
  });
  return productList;

}

exports.linesInFiles = function(folderName){ 

   var productList = findFiles(folderName);

    return productList; 
};

exports.linesInFilesAsync = function(folderName, callback) {
       var productList = findFiles(folderName);

  callback(null, productList);
};
