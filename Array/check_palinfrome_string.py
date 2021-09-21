def check(s):
    s = s.split(' ')
    s = ''.join(s).lower()
    char_map = {}
    print(s)
    for i in s:
        if i in char_map.keys():
            count = char_map[i]
            char_map[i] = count + 1
        else:
            char_map[i] = 1
    flag = 0
    for i in char_map.values():
        if i % 2 != 0:
            if flag:
                return False
            else:
                flag += 1
    print(char_map)
    return True


def check_without_final_lookup(s):
    s = s.lower().split(' ')
    s = ''.join(s)
    print(s)
    count = 0
    char_map = {}
    for i in s:
        if i in char_map.keys():
            count_i = char_map[i]
            count_i += 1
            char_map[i] = count_i
            if count_i % 2 == 1:
                count += 1
            else:
                count -= 1
            print("Cout is ", count)
        else:
            char_map[i] = 1
    print(char_map)
    print(count)
    return count <= 1


def check_palindrome_using_bit_vector(s):
    s = s.lower().split(' ')
    s = ''.join(s)
    print(s)
    bit_vector = [0 for _ in range(26)]
    for i in s:
        bit_vector[ord(i)-97] = 1 if bit_vector[ord(i)-97] == 0 else 0
    print(bit_vector)
    return bit_vector.count(1) == 1


s = "taco Coa l"
print(check(s))
# print(check_without_final_lookup(s))
print(check_palindrome_using_bit_vector(s))
