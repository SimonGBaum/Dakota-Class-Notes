const {multByTwo, isEven} = require("./tools.js")

describe("tools.js", ()=> {
    test("Ensure that the func `multByTwo` is working properly taking in 4 should give 8", () => {
        expect(multByTwo(4)).toBe(8)
    })

    test("Ensure that the func `multByTwo` is working properly taking in '4' should give a message stating `improper input`", () => {
        expect(multByTwo('4')).toBe("Improper Input!")
    })
})

describe("tools.js", ()=>{
    test("Func `isEven` will take in 2 and output true", ()=> {
        expect(isEven(2)).toBeTruthy()
    })

    test("Func `isEven` will take in a number less than 2 and output true", ()=> {
        expect(isEven(0)).not.toBeTruthy()
    })
})