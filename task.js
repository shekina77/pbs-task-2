
// 1
num="1432"
evensum=0
oddsum=0
for(i=0;i<num.length;i++){
    if(+num[i]%2==0){
        evensum+=+num[i]
    }
    else{
        oddsum+=+num[i]
    }
}
if(evensum>oddsum){
    console.log("Even sum is greater than Odd sum")
}else{
    console.log("Odd sum is greater than Even sum")
}

// 2
num1='5567'
evencount=0
oddcount=0
for(i=0;i<num1.length;i++){
    if(+num1[i]%2==0){
        evencount++
    }else{
        oddcount++
    }
}
if(evencount>oddcount){
    console.log("Even count is more")
}else if(oddcount>evencount){
    console.log("Odd count is more")
}else{
    console.log("Both are equal")
}
