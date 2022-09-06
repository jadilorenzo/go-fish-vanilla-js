describe('Card', () => {
    it('compares cards', () => {
        c1 = new Card("D", "A")
        c2 = new Card("D", "A")
        expect(c1.equals(c2)).toBeTruthy()
    })
})
