describe("The Calculate bill test function", function(){
    
    it("It should return '2.75' if call is input",function(){
        let phoneBill = calculateBill()
    

        phoneBill.makeCall()

        assert.equal(2.75,phoneBill.totalCallCost())
    });

    it("It should return '0.75' if sms is input",function(){
        let phoneBill = calculateBill()
       

        phoneBill.sendSms()

        assert.equal(0.75,phoneBill.totalSmsCost())
    });

    it("It should return '6.25' if ,call, call, sms is input",function(){
        let phoneBill = calculateBill()
       
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.sendSms()
       

        assert.equal(6.25,phoneBill.totalCost())
    });
    
    it("It should return 'warning'if total phonebill cost is equal or above 20 ",function(){
        let phoneBill = calculateBill()
       
    

        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.sendSms()

        assert.equal("warning",phoneBill.totalClassName())
    });

    it("It should return 'critical' if total phonebill cost is above 30 ",function(){
        let phoneBill = calculateBill()
       
    

        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.makeCall()
        phoneBill.sendSms()
        phoneBill.sendSms()
        phoneBill.sendSms()
        phoneBill.sendSms()
        
        assert.equal("critical",phoneBill.totalClassName())
    });
});
    