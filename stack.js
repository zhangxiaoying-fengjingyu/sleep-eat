

let str='(asd(asd(aaa(ssd)dsds)sdsd)asdasd';

function isMatch(str){
    let oldArr=str.split('');
    console.log(oldArr)
    let startL=oldArr.indexOf("(");
    let startR=oldArr.indexOf(")");
    console.log(startL,startR)
    if(startL<startR){
        let endL=oldArr.lastIndexOf("(");
        let endR=oldArr.lastIndexOf(")");
        console.log(endL,endR)
        if(endL<endR){
           let newArr=oldArr.slice(startL,endR);
           console.log(newArr.join(''),'-----------------截取后的')
           isMatch(newArr.join(''));
           return true
        }else{
            return false
        }
    }else {
        return false
    }
}

isMatch(str)
