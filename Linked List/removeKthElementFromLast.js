class  ListNode {
    constructor(val){
      this.val = val;
      this.next = null;
  }
}
class LL{
    constructor(){
        this.root = new ListNode(-1);

    }
    insert(data){
        let current = this.root;
        while(current.next != null){
            current = current.next;
        }
        const end = new ListNode(data);
        current.next = end;
    }
    display(){
        let current = this.root.next;
        while(current != null){
            console.log(current.val);
            current = current.next;
        }
    }
    removeNthFromEnd(n){
        let head = this.root.next;
        while(true){
            let current = head;
            for(let i = 0;i<n;i++){
                current = current.next;
            }
            if(current.next == null){
                head.next = head.next.next;
                break;
            }
            head = head.next;
        }

    }
}

const ll = new LL();
for(let i of [1]){
    ll.insert(i)
}

ll.display()
console.log("\n");
ll.removeNthFromEnd(1);
ll.display()
