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
    append(node){
        let current = this.root;
        while(current.next !==null){
            current = current.next
        }
        // console.log(node.root)
        current.next = node.root.next;
    }
    partition(x){
        let head = this.root.next;
        let tail = null;
        let current = head
        while(current.next){
            tail = current;
            current = current.next;
        
        }
        const tempMin = new LL()
        const tempMax = new LL()
        current = head
        while(current){
            if(current.val < x){
                tempMin.insert(current.val)
            }
            else{
                tempMax.insert(current.val)
            }
            current  = current.next;
        }
        // tempMin.display()
        // console.log("\n")
        // tempMax.display()

        tempMin.append(tempMax)
        tempMin.display()

        
    
    }
    

}



const ll = new LL();
for(let i of [1,4,3,2,5,2]){
    ll.insert(i)
}

// ll.display()
ll.partition(3)
