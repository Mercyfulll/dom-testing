function textBill(){
    var theTotal1 = 0
    var callCost1 = 0
    var smsCost1 = 0
     
    function makeCall1(){
        callCost1 += 2.75
    }
    function sendSms1(){
         smsCost1 += 0.75
    }
    function totalCost1(){
         theTotal1 = smsCost1 + callCost1
         return theTotal1
    }
    function totalCallCost1(){
        return callCost1
    }
    function totalSmsCost1(){
        return smsCost1
    }
    function totalClassName1(){
        if(totalCost1() >= 50){
            return "critical"
        }
        if (totalCost1() >= 30){
            return "warning"
        }
    }
    return{
        makeCall1,
        sendSms1,
        totalCallCost1,
        totalSmsCost1,
        totalCost1,
        totalClassName1
        
    }
}
