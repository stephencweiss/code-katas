class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        completeSet = nums1+nums2
        completeSet.sort()
        if len(completeSet) % 2 == 0:
            high = int(len(completeSet) / 2)
            low = high - 1
            return (completeSet[high]+completeSet[low]) / 2
        else:
            return completeSet[int(floor(len(completeSet) / 2))]
