
it('should calculate the monthly rate correctly', function () {
  const values = {amount:25000, years:5, rate:4.5}
  expect(calculateMonthlyPayment(values)).toEqual(466.07)
});


it("should return a result with 2 decimal places", function() {
  const values = {amount:25000, years:5, rate:4.5}
  expect(calculateMonthlyPayment(values)).toEqual(466.07)
  // ..
});

/// etc
