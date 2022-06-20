export default {
    name : "HelloVueApp",
    data() {
        return { 
          checkedNames: [],
          checkedNamesInput: null,
          newContent : "",
          locations : ["四十！🍽", "五十！🍽", "九十！🍽", "校外！🏫", "校内！🏫","外卖！🥡", "罗森！🍙", "中超！🏪", "学友！🏬", "哈尼家！🥡"],
          forty: ["铁板饭！🍛","油泼面！🍜","锡纸！🍳","金汤肥牛！🐮","米线/土豆粉！🍜", "凉面！🍜"],
          ninty: ["瓦香鸡！🐔", "鱼粉！🐟", "麻辣烫！🌶", "拌饭！🍚", "猪肚鸡！🐤", "巴黎贝甜！🍮"],
          fifty: ["羊肉面！🍜","椒麻鸡！🐔","烤鸭饭！🦆","辛拉面！🍜","水饺！🥟","炒饭！🍘","营养汤！🥣", "米线！🍜"],
          outside : ["黄焖鸡！🐔","戴小姐！🍕","饼！🥞","杨国福！🌶️","风铃巷！🥟","麦当当！🍟", "西安面馆！🍜", "鸡手王🍖"],
        }
      },
      computed :{
        sliceList() {
            return function (data,count) {
              if (data != undefined) {
                let index = 0;
                let arrTemp = [];
                for (let i = 0; i < data.length; i++) {
                  index = parseInt(i / count);
                  if (arrTemp.length <= index) {
                    arrTemp.push([]);
                  }
                  arrTemp[index].push(data[i])
                }
                return arrTemp
              }
            }
          }
      },
      methods:{
          pushBack(){
            if (this.checkedNamesInput != null){
                this.checkedNames.push(this.checkedNamesInput)
                this.checkedNamesInput = ''
            }
          },
          forID(input){
              return input;
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
          randomTwo(){
            const ANSW = ["Yes!😄", "No!😭"]
            var t = ANSW[Math.floor(Math.random() * 2)]
            alert(t);
          },
          randomChoice(){
              console.log(this.checkedNames.length )
              var t = this.checkedNames[ Math.floor( ( Math.random() * this.checkedNames.length ) )  ]
                alert(t); 
                console.log() 
          },
      }
}
  