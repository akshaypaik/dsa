const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

const mergeSortedArray = (nums1, nums2, m, n) => {

    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {

        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] < nums2[p2]) {
            nums1[i] = nums2[p2];
            p2--;
        } else {
            nums1[i] = nums1[p1];
            p1--;
        }
    }

    return nums1;

}

console.log(mergeSortedArray(nums1, nums2, m, n));
