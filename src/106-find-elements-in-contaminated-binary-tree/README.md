[1261. Find Elements in a Contaminated Binary Tree](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/)

Lessons from this exercise:
- We can be greedy in what we store.
- Since we're only concerned with being able to find _one_ element in the decontaminated tree, we don't actually need to _store_ the tree.
- The solution takes advantage of that and "flattens" the tree into a set - which has an O(n) space, but benefits from O(1) lookup.