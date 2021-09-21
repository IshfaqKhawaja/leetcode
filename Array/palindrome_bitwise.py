def check_palindrome(s):
    bitVector = 0
    for i in s:
        mask = 1 << (ord(i)-97)
        if (bitVector & mask) == 0:
            bitVector |= mask

        else:
            bitVector &= ~mask

    print(bitVector & (bitVector-1) == 0)


def check_palindrome_(s):
    countOdd = 0
    for i in s:
        if ord(i) % 2 == 1:
            countOdd += 1
        else:
            countOdd -= 1
    return countOdd == 1


check_palindrome('anana')
print(check_palindrome_('anan'))
