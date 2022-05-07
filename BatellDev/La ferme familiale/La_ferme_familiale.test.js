
 import { describe } from "mocha";
 import { assert, expect } from "chai";
import { ContestResponse } from "./La_ferme_familiale.js";
 describe("est ce que la fonction est juste?",() => {
     it("whould return a true value whith a simple intout",() => {
         let input = ["jri","adn"]
         expect(ContestResponse(input)).to.equal("jardin")
     })
     it("whould return a true value whith a second simple intout",() => {
        let input = ["eln","nhh"]
        expect(ContestResponse(input)).to.equal("enlhnh")
    })
    it("whould return a true value whith a small intout",() => {
        let input = ["k","l"]
        expect(ContestResponse(input)).to.equal("kl")
    })
    it("whould return a true value whith a long intout",() => {
        let input = ["oyyqb","gacyj"]
        expect(ContestResponse(input)).to.equal("ogyaycqybj")
    })
 })
