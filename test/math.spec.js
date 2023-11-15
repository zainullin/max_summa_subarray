const assert = require("assert");
const { expect } = require("chai");
const { calculateSubArrMaxSum, transformArr } = require("../index");

describe("calculateSubArrMaxSum", function () {
  it("01. Вычисляет максимальный подмассив", function () {
    assert.equal(calculateSubArrMaxSum([-1, 2, 3, -9]), 5);
  });
  it("02. Вычисляет максимальный подмассив", function () {
    assert.equal(calculateSubArrMaxSum([2, -1, 2, 3, -9]), 6);
  });
  it("03. Вычисляет максимальный подмассив", function () {
    assert.equal(calculateSubArrMaxSum([-1, 2, 3, -9, 11]), 11);
  });
});

describe("Кортеж 1", function () {
  it("101. Массив [1]", function () {
    expect(transformArr([1], 1)).deep.to.equal([1]);
  });
  it("102. Массив [4,1]", function () {
    expect(transformArr([4, 1], 1)).deep.to.equal([4, 1]);
  });
  it("103. Массив [0, 4, 1, 202]", function () {
    expect(transformArr([0, 4, 1, 202], 1)).deep.to.equal([0, 4, 1, 202]);
  });
});

describe("Кортеж 2", function () {
  it("201. Массив [1, 2]", function () {
    expect(transformArr([1, 2], 2)).deep.to.equal([3]);
  });
  it("202. Массив [100, 1, 2]", function () {
    expect(transformArr([100, 1, 2], 2)).deep.to.equal([101, 3]);
  });
});

describe("Кортеж 3", function () {
  it("301. Массив [164, 1, 2]", function () {
    expect(transformArr([164, 1, 2], 3)).deep.to.equal([167]);
  });
  it("302. Массив [100, 50, 1, 2]", function () {
    expect(transformArr([100, 50, 1, 2], 3)).deep.to.equal([151, 53]);
  });
});

describe("Кортеж 4", function () {
  it("401. Массив [164, -222, 1, 2, -35, 78, 6]", function () {
    expect(transformArr([164, -222, 1, 2, -35, 78, 6], 4)).deep.to.equal([-55, -254, 46, 51]);
  });
  it("402. Массив [-3, 100, -50, 1, 2, -133]", function () {
    expect(transformArr([-3, 100, -50, 1, 2, -133], 4)).deep.to.equal([48, 53, -180]);
  });
});