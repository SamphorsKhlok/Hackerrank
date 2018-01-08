function isBalance(input){
  let ar = input.split("");
  if(ar.length %2) return 'NO';

  let len  = ar.length;
  let temp = [];

  for(let i = 0; i < len;i++){
    if(isLeft(ar[i])){
      temp.push(ar[i]);
    }else{
      //console.log(ar[i] + ' <-> '+ otherHalfOfMe(temp[temp.length-1]));
      if(ar[i] == otherHalfOfMe(temp[temp.length-1])){
        temp.pop();
      }else{
        return 'NO';
      }
    }
  }

  //console.log(temp);
  if(temp.length){
    return 'NO';
  }

  return 'YES';
}

function isLeft(i){
  if(i == '[' || i == '{' || i == '(') return true;
  return false;
}

function otherHalfOfMe(me){
  let r = null;
  switch(me){
    case "[":
      r = "]";
      break;
    case "{":
      r = "}";
      break;
    case '(':
      r = ")";
      break;
    default:
      r = "-";
      break;
  }
  return r;
}

module.exports = isBalance;
