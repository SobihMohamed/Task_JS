function addup(num){
    let sum=0;
    while(num>0)
    {
        sum+=num;
        num--;
    }    
    return sum;
}

let num=+prompt("Enter the number : ");
alert(`the sum from 1 to ${num} is ${addup(num)}`);

function f (){
    let numf= +prompt("Enter the first number : ");
    return numf;
}

function g (){
    let numg = +prompt("Enter the second number : ");
    return numg;
}

function whichIsGreater(numf,numg){
    if(numf>numg)
        return `${numf} is greater`;
    else if(numf<numg)
        return `${numg} is greater`;
    else 
    return `Neither`;
} 

alert(`${whichIsGreater(f(),g())}`);