def check_unique(s: str) -> bool:
    if len(s) > 128:
        return False
    char_set = [0 for _ in range(128)]

    for char in s:
        val = ord(char)
        if char_set[val]:
            return False
        else:
            char_set[val] = 1

    return True


def using_bitvector(s: str) -> bool:
    checker = 0
    for i in s:
        val = ord(i) - ord('a')
        print('val', val, i)
        if (checker & (1 << val)) > 0:
            print("Duplicate Found", i)

        else:
            checker |= (1 << val)
        print('checker', checker)


# print(check_unique("chek"))
print(using_bitvector("check"))
