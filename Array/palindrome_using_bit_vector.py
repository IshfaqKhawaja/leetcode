def check(s):
    s = s.lower().split(' ')
    s = ''.join(s)
    print(s)
    bitVector = 0
    for i in s:
        index = ord(i) - 97
        mask = 1 << index
        if (bitVector & mask) == 0:
            bitVector |= mask
        else:
            bitVector &= ~mask
    return bitVector & (bitVector-1) == 0


print(check("COcoas"))
