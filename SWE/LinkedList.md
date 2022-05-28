## Linked List

- NodeOne -> NodeTwo -> NodeThree -> NodeFour -> NodeFive
- List are sequences of nodes that point to one to another to form a list

- You can represent a node by creating a class.
- A node can store some data

```
class Node:
    def _init_(self, x, nextNode = Node):
        self.val = x
        self.next = nextNode
```

- We can have also a double linked list where each node has a pointer
  to the previous node. So we can go forward and back

## Linked Lists vs arrays

- The benefit of a linked list is that we can add nodes to the end or front
  without the need to resize an array

- List are useful to implement queues and stacks
- The nodes of the list are stored in heap memory

```
def printLinkedList(head: Node) -> None:
    curNode = head
    while curNode:
        print(curNode.val)
        curNode = curNode.next
```

## Find kth element

```
def findKthElement(head: Node, k: int) -> Node:
    if not head:
        return None

    if k < 1:
        return None

    curCount = 1
    curNode = head

    while curNode:
        if curCount == k:
            return curNode

        curNode = curNode.next
        curCount += 1

    return None
```

## Add node to the back of the list

```
def addToBack(head: Node, newNode: Node) -> Node:
    if not head:
        return newNode

    curNode = head

    while curNode:
        if curNode.next == None
            curNode.next = newNode

        curNode = curNode.next

    return head
```

## Delete the K'th element in a linked list

```
def removeKthElement(head: Node, k: int) -> Node:
    if not head:
        return head

    if k < 1:
        return head

    if k == 1:
        secondNode = head.next
        head.next= None
        return secondNode

    curCount = 1
    curNode = head
    prevNode = None

    while curNode:
        if curCount == k:
            prevNode.next = curNode.next
            curNode.next = None
            return head

        prevNode = curNode
        curNode = curNode.next
        curNode += 1

    return head
```
