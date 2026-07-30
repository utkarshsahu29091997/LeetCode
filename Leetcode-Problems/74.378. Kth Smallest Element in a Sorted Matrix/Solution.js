/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let heap = new MaxPriorityQueue();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      heap.enqueue(matrix[i][j]);
      // console.log(heap)
      if (heap.size() > k) {
        heap.dequeue();
      }
    }
  }

  return heap.front();
};
