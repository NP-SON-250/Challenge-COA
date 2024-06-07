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
  
  function checkSubarraySum() {
    const arrayInput = document.getElementById("arrayInput").value;
    const targetInput = document.getElementById("targetInput").value;
  
    if (arrayInput.trim() === "" || targetInput.trim() === "") {
      document.getElementById("result").innerText =
        "Please enter both array value and targeted sum value.";
      return;
    }
  
    const arr = arrayInput.split(",").map(Number);
    const target = Number(targetInput);
  
    const result = hasContiguousSubarrayWithSum(arr, target);
  
    document.getElementById("result").innerText = result
      ? `True, a subarray exists with the sum of ${target}.`
      : `False, no subarray exists with the sum of ${target}.`;
  }
  