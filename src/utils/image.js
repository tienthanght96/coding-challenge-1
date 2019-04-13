
export function convertToBase64(file, callback){
  const reader = new FileReader();
  reader.onloadend = function (e) {
      callback(e.target.result, e.target.error);
  };   
  reader.readAsDataURL(file);
};
