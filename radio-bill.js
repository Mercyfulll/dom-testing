function radioBill(){
    var theTotal2 = 0
    var callCost2 = 0
    var smsCost2 = 0
     
    function makeCall2(){
        callCost2 += 2.75
    }
    function sendSms2(){
         smsCost2 += 0.75
    }
    function totalCost2(){
         theTotal2 = smsCost2 + callCost2
         return theTotal2
    }
    function totalCallCost2(){
        return callCost2
    }
    function totalSmsCost2(){
        return smsCost2
    }
    function totalClassName2(){
        if(totalCost2() >= 50){
            return "critical"
        }
        if (totalCost2() >= 30){
            return "warning"
        }
    }
    return{
        makeCall2,
        sendSms2,
        totalCallCost2,
        totalSmsCost2,
        totalCost2,
        totalClassName2
        
    }
}