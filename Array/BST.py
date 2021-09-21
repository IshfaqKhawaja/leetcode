class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.left = None
        self.right = None


class BST:

    def __init__(self, data) -> None:
        self.root = Node(data)

    def insert(self, data):
        current = self.root
        # print(data)
        while current:
            prev = current
            if(data > current.data):
                current = current.right
            else:
                current = current.left
        # print(prev.data)
        if(data > prev.data):
            prev.right = Node(data)
        else:
            prev.left = Node(data)

    def display(self, current):
        if current == None:
            return
        else:
            print(current.data)
            self.display(current.left)
            self.display(current.right)


bst = BST(20)
bst.insert(25)
bst.insert(9)
bst.insert(5)
bst.insert(12)
bst.insert(11)
bst.insert(14)
bst.display(bst.root)
