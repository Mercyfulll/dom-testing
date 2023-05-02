describe("The Text bill function", function(){

    it("It should return '2.75' if call is written as input and added",function(){
        let textPhoneBill = textBill()

        textPhoneBill.makeCall1()

        assert.equal(2.75,textPhoneBill.totalCallCost1())
    })
    
    it("It should return '1.50' if sms is written as input and added twice",function(){
        let textPhoneBill = textBill()

        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()

        assert.equal(1.50,textPhoneBill.totalSmsCost1())
    })

    it("It should return '7' if sms and call are written as input and added twice",function(){
        let textPhoneBill = textBill()

        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()

        assert.equal(7,textPhoneBill.totalCost1())
    })

    it("It should return 'warning' if total cost exceeds or is equal to 30",function(){
        let textPhoneBill = textBill()

        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()

        assert.equal("warning",textPhoneBill.totalClassName1())
    })

    it("It should return 'critical' if total cost exceeds or is equal to 50",function(){
        let textPhoneBill = textBill()

        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.makeCall1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()
        textPhoneBill.sendSms1()

        assert.equal("critical",textPhoneBill.totalClassName1())
    })
});