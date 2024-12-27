function mathPow(power){
    const listElements=document.getElementById("numberList").children;
    for(let i=0;i<listElements.length;i++){
        const value=parseInt(listElements[i].textContent);
        listElements[i].textContent=Math.pow(value,power);
    }
}