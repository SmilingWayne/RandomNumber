export default {
    name : "HelloVueApp",
    data() {
        return {
          finalList : [],  
          checkedNames: [],
          checkedNamesInput: null,
          newContent : "",
        }
      },
      methods:{
          pushBack(){
            if (this.checkedNamesInput != null){
                this.checkedNames.push(this.checkedNamesInput)
                this.checkedNamesInput = ''
            }
          },
          deleteMessage(arget){
              for(var i = 0; i < this.checkedNames.length; i ++ ){
                  if(this.checkedNames[i] == arget){
                      this.checkedNames.splice(i, 1)
                      break;
                  }
              }
          },
          clearAll(){
              this.checkedNames = [] 
          },
          randomChoice(){
              console.log(this.checkedNames.length )
              var t = this.checkedNames[ Math.floor( ( Math.random() * this.checkedNames.length ) )  ]
                alert(t); 
                console.log() 
          },
      }
}
  