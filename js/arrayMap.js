function hasContiguousSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // While currentSum is greater than target and start is within bounds
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the currentSum equals the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target));  // Output: true
