class Node():
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


class LL():
    def __init__(self):
        self.root = Node(-1)

    def insert(self, data):
        current = self.root
        while current.next != None:
            current = current.next
        end = Node(data)
        current.next = end

    def display(self):
        current = self.root.next
        while current:
            print(current.data)
            current = current.next

    def removeKthFromLast(self, n):
        dummy = Node(0, self.root.next)
        p1 = dummy
        p2 = self.root.next
        for _ in range(n):
            if p2 == None:
                break
            p2 = p2.next
        while p2:
            p1 = p1.next
            p2 = p2.next
        p1.next = p1.next.next


ll = LL()

for i in [1]:
    ll.insert(i)
ll.display()
ll.removeKthFromLast(1)
print("\n")
ll.display()
