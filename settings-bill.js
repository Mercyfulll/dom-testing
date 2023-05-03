function BillWithSettings (){
    var thecallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var theTotalCallCost = 0
    var theTotalSmsCost = 0;
    var theTotalCost = 0;

    function setCallCost(callCost){
        thecallCost = callCost;
    }
    function getCallCost(){
        return thecallCost;
    }
    function setSmsCost(SmsCost){
        theSmsCost = SmsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }
    function setWarningLevel(wLevel){
        theWarningLevel = wLevel;
    }
    function getWarningLevel(){
        return theWarningLevel
    }
    function setCriticalLevel(cLevel){
        theCriticalLevel = cLevel;
    }
    function getCriticalLevel(){
        return theCriticalLevel
    }
    function makeCall(){
        if(!hasReachedCriticalLevel()){
        theTotalCallCost += thecallCost
        }
    }
    function sendSms(){
        if (!hasReachedCriticalLevel()){
            theTotalSmsCost += theSmsCost
        }
        
    }
    function getTotalCallCost(){
        return theTotalCallCost
    }
    function getTotalSmsCost(){
        return theTotalSmsCost
    }
    function getTotalCost(){
         theTotalCost = theTotalSmsCost + theTotalCallCost
         return theTotalCost
    }
    function hasReachedCriticalLevel(){
        getTotalCost() >= getCriticalLevel()
    }
    function totalClassName(){
        if(getTotalCost() >= getCriticalLevel()){
            return "critical"
        }

        if(getTotalCost() >= getWarningLevel())
            return "warning"
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        sendSms,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName,
        hasReachedCriticalLevel

    }
}