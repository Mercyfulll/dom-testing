function calculateBill(){
    var theTotal = 0
    var callCost = 0
    var smsCost = 0
     
    function makeCall(){
        callCost += 2.75
    }
    function sendSms(){
         smsCost += 0.75
    }
    function totalCost(){
         theTotal = smsCost + callCost
         return theTotal
    }
    function totalCallCost(){
        return callCost
    }
    function totalSmsCost(){
        return smsCost
    }
    function totalClassName(){
        if(totalCost() >= 30){
            return "critical"
        }
        if (totalCost() >= 20){
            return "warning"
        }
    }
    return{
        makeCall,
        sendSms,
        totalCallCost,
        totalSmsCost,
        totalCost,
        totalClassName
        
    }
}