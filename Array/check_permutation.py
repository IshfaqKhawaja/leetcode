def check_permutation(s1: str, s2: str) -> bool:
    if len(s1) != len(s2):
        return False
    char_set = {}
    for i in s1:
        if i in char_set.keys():
            count = char_set[i]
            char_set[i] = count + 1
        else:
            char_set[i] = 1
    print(char_set)
    for i in s2:
        if i in char_set.keys():
            count = char_set[i]
            char_set[i] = count-1
            if char_set[i] < 0:
                print(char_set)
                print("Count less than zero")
                return False
        else:
            return False
    for i in char_set.values():
        if i != 0:
            return False
    return True


print(check_permutation("abc", "aaa"))
