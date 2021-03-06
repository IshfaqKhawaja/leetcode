class Solution:
    def longestValidParentheses(self, s: str) -> int:

        l = r = maxLength = 0

        for i in range(len(s)):

            if s[i] == "(":
                l += 1
            else:
                r += 1

            if l == r:
                maxLength = max(maxLength, r*2)
            elif r > l:
                l = r = 0

        l = r = 0

        for i in range(len(s) - 1, -1, -1):

            if (s[i] == '('):
                l += 1
            else:
                r += 1

            if (l == r):
                maxLength = max(maxLength, 2 * l)

            elif (l > r):
                l = r = 0
        print(maxLength)
        return maxLength


sol = Solution()
sol.longestValidParentheses("(()()")
