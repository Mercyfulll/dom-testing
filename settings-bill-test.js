describe("Bill with Settings Function", function(){

    it("It should be able to take an input for Call cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.79)
        assert.equal(1.79,settingsBill.getCallCost())
    });

    it("It should take an input for Sms cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.60)
        assert.equal(0.60,settingsBill.getSmsCost())
    });

    it("It should take an input for Sms and Call cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.85)
        assert.equal(0.85,settingsBill.getSmsCost())

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.45)
        assert.equal(2.45,settingsBill2.getCallCost())
    });

    it("It should be able to take an input for Warning level ", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(30)
        assert.equal(30,settingsBill.getWarningLevel())

        let settingsBill2 = BillWithSettings();
        settingsBill2.setWarningLevel(40)
        assert.equal(40,settingsBill2.getWarningLevel())
    });

    it("It should be able to take an input for Critical level ", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(50)
        assert.equal(50,settingsBill.getCriticalLevel())

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCriticalLevel(60)
        assert.equal(60,settingsBill2.getCriticalLevel())
    });

    it("It should be to take an input for Warning level & Critical level ", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setWarningLevel(27)
        assert.equal(27,settingsBill.getWarningLevel())

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCriticalLevel(33)
        assert.equal(33,settingsBill2.getCriticalLevel())
    });
     
});

describe("The Use values tests", function(){
    it("It should be able to use the value inputs bring total for calls at R2.50 each" , function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(2.50)
        settingsBill.setSmsCost(0.70)


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(10.0, settingsBill.getTotalCost())
        assert.equal(10.0, settingsBill.getTotalCallCost())
        assert.equal(0.00, settingsBill.getTotalSmsCost())

    })

    it("It should be able to use the value inputs bring total for calls at R3 and sms R 0.50 each" , function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(3)
        settingsBill.setSmsCost(0.50)


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(10, settingsBill.getTotalCost())
        assert.equal(9, settingsBill.getTotalCallCost())
        assert.equal(1.00, settingsBill.getTotalSmsCost())

    })

    
    it("It should be able to use the value inputs bring total for sms at R 0.65 each" , function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(0)
        settingsBill.setSmsCost(0.65)


        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();

        assert.equal(1.30, settingsBill.getTotalCost())
        assert.equal(0.00, settingsBill.getTotalCallCost())
        assert.equal(1.30, settingsBill.getTotalSmsCost())

    });
})

    describe("Warning and Critical level", function(){
        it("It should be able to return 'warning' when warning level class is reached" , function(){
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(3)
            settingsBill.setSmsCost(1)
            settingsBill.setWarningLevel(15)
            settingsBill.setCriticalLevel(20)
    
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
    
            assert.equal("warning", settingsBill.totalClassName())
    
        })

        it("It should be able to return 'critical' when critical level class is reached" , function(){
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(4.50)
            settingsBill.setSmsCost(1.50)
            settingsBill.setWarningLevel(10)
            settingsBill.setCriticalLevel(25)
    
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(25.5,settingsBill.getTotalCost())
            assert.equal("critical", settingsBill.totalClassName())
    
        })

        it("It should stop the total Call Cost from increasing when critical level  is reached" , function(){
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.85)
            settingsBill.setWarningLevel(7)
            settingsBill.setCriticalLevel(8)
    
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();

    
            assert.equal("critical", settingsBill.totalClassName())
            assert.equal(8.35,settingsBill.getTotalCost());
    
        })

        it("It should able to update the total after reaching the critical level if values are updated" , function(){
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.85)
            settingsBill.setWarningLevel(8)
            settingsBill.setCriticalLevel(10)
    
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();

    
            assert.equal("critical", settingsBill.totalClassName())
            assert.equal(10.85,settingsBill.getTotalCost());

            settingsBill.setCriticalLevel(20)
            assert.equal("warning",settingsBill.totalClassName())
            settingsBill.makeCall()
            settingsBill.makeCall()
            assert.equal(15,settingsBill.getTotalCallCost())
    
        })

    })