function checkTemp(temperatuur){
    if (temperatuur <= 20){
        console.log("liiga kulm")}
    if (temperatuur >= 21 && arv1 <= 40){
        console.log("paras temperatuur")}
    if (temperatuur >60){
        console.log("liiga kuum")}
}

function checkTemp(temperatuur){
    if (temperatuur <= 20){
        console.log("liiga kulm")
        return (-1)}
    if (temperatuur >= 21 && arv1 <= 40){
        console.log("paras temperatuur")
        return(0)}
    if (temperatuur >60){
        console.log("liiga kuum")
        return(1)}
}
