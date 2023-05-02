describe("The Radio Bill test function", function(){

    it("Its should return '11' when call is checked and added four times",function(){
        let radioPhoneBill = radioBill()

        radioPhoneBill.makeCall2()
        radioPhoneBill.makeCall2()
        radioPhoneBill.makeCall2()
        radioPhoneBill.makeCall2()

        assert.equal(11,radioPhoneBill.totalCallCost2())
    })

    it("Its should return '2.25' when sms is checked and added three times",function(){
        let radioPhoneBill = radioBill()

        radioPhoneBill.sendSms2()
        radioPhoneBill.sendSms2()
        radioPhoneBill.sendSms2()

        assert.equal(2.25,radioPhoneBill.totalSmsCost2())
    })

    it("Its should return '4.25' when sms is checked and added three times",function(){
        let radioPhoneBill = radioBill()

        radioPhoneBill.makeCall2()
        radioPhoneBill.sendSms2()
        radioPhoneBill.sendSms2()
        

        assert.equal(4.25,radioPhoneBill.totalCost2())
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