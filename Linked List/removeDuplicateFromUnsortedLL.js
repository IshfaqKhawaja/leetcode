    
class LL{
    constructor(data){
         this.data = data;
        this.next = null;    }
    insert(data){
        let current = this;
        while(current.next != null)
            current = current.next;
        const end = new LL(data);
        current.next = end;


    }
    display(){
        let current = this.next;
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }
    delete(){
        let current = this;
        let bitVector = 0
        while(current.next != null){
                console.log("In delete")
                let mask = 1 << current.next.data;
                if((bitVector & mask) != 0 ){
                    current.next = current.next.next;
                    
                }
                else{
                    bitVector |= mask;
                }
            current = current.next;
        }
    }
    removeWithOutBuffer(){
        let current = this;
        while(current != null){
            let runner  = current;
            while(runner.next != null){
                if(runner.next.data == current.data){
                    runner.next = runner.next.next
                }
                else{

                    runner = runner.next
                }
            }
            current  = current.next;
        }

    }
}


const ll = new LL(-1);
// for(let i=0;i<10;i++){
//     ll.insert(parseInt(Math.random()*10));
// }
ll.insert(1);
ll.insert(1);
ll.insert(1);
ll.insert(1);
ll.insert(3);
ll.insert(1);
ll.insert(4);
ll.insert(5);
ll.insert(3);
ll.insert(7);
ll.insert(6);
ll.display();
// ll.delete();
ll.removeWithOutBuffer();
console.log("\n")
ll.display();