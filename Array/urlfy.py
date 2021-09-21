def urlfy(s: str) -> None:
    s = list(s.strip(' '))
    print(s)
    for i in range(len(s)):
        if s[i] == ' ':
            s[i] = '%20'
    print(''.join(s))


urlfy("Mr John Smith")
