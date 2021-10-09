function checkTemp(temperatuur){
    if (temperatuur <= 20){
        console.log("liiga kulm")}
    if (temperatuur >= 21 && temperatuur <= 40){
        console.log("paras temperatuur")}
    if (temperatuur >= 41){
        console.log("liiga kuum")}
}

function checkTemp(temperatuur){
    if (temperatuur <= 20){
        console.log("liiga kulm")
        return (-1)}
    if (temperatuur >= 21 && temperatuur <= 40){
        console.log("paras temperatuur")
        return(0)}
    if (temperatuur > 41){
        console.log("liiga kuum")
        return(1)}
}
