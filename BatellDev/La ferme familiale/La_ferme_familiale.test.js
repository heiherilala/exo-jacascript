 const { expect } = require("chai");
 const { describe } = require("mocha");
const {ContestResponse} = require ("./La_ferme_familiale.js")
 describe("est ce que la fonction est juste?",() => {
     it("whould return a true value whith a simple intout",() => {
         let input = ["jri","adn"]
         expect(ContestResponse(input)).to.equal("jardin")
     })
     it("whould return a true value whith a second simple intout",() => {
        let input = ["eln","nhh"]
        expect(ContestResponse(input)).to.equal("enlhnh")
    })
    it("whould return a true value whith a court intout",() => {
        let input = ["k","l"]
        expect(ContestResponse(input)).to.equal("kl")
    })
    it("whould return a true value whith a long intout",() => {
        let input = ["oyyqb","gacyj"]
        expect(ContestResponse(input)).to.equal("ogyaycqybj")
    })
 })
