// Функция вычисляющая непрерывный подмассив наибольшей суммы.
function calculateSubArrMaxSum(arr) {
  let result = 0; // максимальная сумма подмассива
  // длина подмассива может быть от 1 до размера входного массива, назовем подмассив - кортежем.
  // для каждого кортежа, с размером от 1 до arr.length, получим вспомогательный массив, в каждом элементе
  // которого будет сумма элементов в кортеже (смотри описание функции transformArr)
  for (let i = 1; i < arr.length + 1; i++) {
    const currArr = transformArr(arr, i);
    // а здесь мы всего лишь проходим по вспомогательному массиву и смотрим какой элемент самый большой
    // если элемент больше того что лежит у нас в result, то мы записываем в result новое значение.
    for (let j = 0; j < currArr.length; j++) {
      if (result < currArr[j]) result = currArr[j];
    }
  }
  return result;
}
// создание вспомогательного массива, в котором задан размер кортежа и
// выходной массив содержит сумму элементов кортежа в отдельной ячейке
// например, входной массив [164, 1, 2], размер кортежа 3, выход [167],
// или [-3, 100, -50, 1, 2, -133], кортеж 4, на выходе [48, 53, -180], так как помещается только три кортежа
function transformArr(arrIn, tupleLength) {
  const arrOut = []; // выходной массив
  const arrOutLength = arrIn.length - tupleLength + 1; // длина выходного массива

  for (let i = 0; i < arrOutLength; i++) {
    arrOut[i] = 0;
    for (let j = 0; j < tupleLength; j++) {
      arrOut[i] += arrIn[i + j];
    }
  }
  return arrOut;
}

module.exports = {
  calculateSubArrMaxSum,
  transformArr,
};

