function LonelyInteger(arr){
  let skipList = [];
  let uniqueList = -1;

  for(let i=0; i < arr.length;i++){
    if(skipList.indexOf(arr[i]) == -1){

      let isRepeat = false;
      for(let j=i+1; j < arr.length;j++){
        if((arr[j]^arr[i]) == 0){
          isRepeat = true;
        }
      }

      if(isRepeat){
        skipList.push(arr[i]);
      }else {
        uniqueList = arr[i];
        break;
      }
    }
  }

  return uniqueList;
}

module.exports = { LonelyInteger }
