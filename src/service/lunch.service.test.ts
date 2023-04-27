

describe('testing lunchservice', function () {
    it('should test', function () {
        foodRepo.getFoods = jest.fn()
        lunchService.getFoods()

        expect(foodRepo.getFoods).toBeCalled()
    });
})