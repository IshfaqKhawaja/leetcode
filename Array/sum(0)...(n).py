

def sum(n):
    def insider(m):
        if m == 0:
            print(n)
        return sum(n+m)
    return insider


sum(1)(2)(3)(4)(5)(0)

