export default {
    name : "HelloVueApp",
    data() {
        return { 
          checkedNames: [],
          checkedNamesInput: null,
          newContent : "",
          lastChoice : "",
          Foods : {
            "breakFast": ["Luckin🥐", "学友🍳", "麦麦🍔", "一鸣🌭", "食堂🥢", "不吃❌"],
            "yiMing" : ["芝士肉松🥪", "早餐鸡排🥪", "法式🥪", "菠萝包🍍", "早餐🍞", "吐司🍞"
             ,"酸奶(黑加仑🍶)", "酸奶(青稞🍶)", "酸奶(草莓🍶)", "酸奶(红枣🍶)", "地中海酸奶🍶"],
            "luoSen": ["星空面包🍞", "金枪鱼🍙", "爆浆鸡腿🍙", "各种饭🍚", "可颂🥐", "烤串🍢", "意面🇮🇹"],
            'fifty': ["羊肉面🍜","椒麻鸡🐔","烤鸭饭🦆","辛拉面🍜","水饺🥟","炒饭🍘","营养汤🥣", "米线🍜"],
            'forty': ["铁板饭🍛","油泼面🍜","其他面🍜","锡纸🍳","金汤肥牛🐮","米线/土豆粉🍜", "凉面🍜", "早餐饼"],
            'xueYou' : ["各种包子🍽", "关东煮🍢" ,"烤肠🌭️", "三明治🥪", "玉米🌽", "吃个蛋!🥚" ,
             "吃点🍞", "泡面🍜", "辣条🌶️", "小火锅🍲"],
            'ninty': ["瓦香鸡🐔", "鱼粉🐟", "麻辣烫🌶", "拌饭🍚", "猪肚鸡🐤", "巴黎贝甜🍮", "牛肉粉丝🐂"],
            'drinks' : ["茶百道", "蜜雪冰城", "Luckin", "学友", "一鸣", "Coco", "酸奶牛", "新传咖啡厅", "政管咖啡厅", "第三领域"]
          },
          
          locations2: {
            "InCampus" : ["四十 🍽", "五十 🍽", "九十 🍽", "外卖 🥡", "罗森 🍙", "中超 🏪",
             "学友 🏬", "一鸣 🥡", "品缘 🐶", "麦麦 🍟", "鲜柒🥗", "教超🏪", "民族食堂🍴" ],
            "OutofCampus" : ["黄焖鸡 🐔","戴小姐 🍕","Summer🌞", "饼🥞","杨国福🌶️",
            "鸡排🐤","烤冷面🍜", "麻辣香锅🌶️","风铃巷🥟","麦当当🍟", "西安面馆🍜", "鸡手王🍖", "鸭血粉丝🦆","咱们去学则路!🚇", "不去❌"],
          },
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
            var Decision = ANSW[Math.floor(Math.random() * 2)]
            ElMessageBox.confirm(
              Decision,
              '去不去！：',
              {
                confirmButtonText: '继续选！',
                cancelButtonText: '定了！',
                type: 'info',
              }
            )
              .then(() => {
                this.randomTwo()
              })
              .catch(() => {
                ElMessage({
                  type: 'primary',
                  message: '选完了！',
                })
              })
          },
          randomChoice(){
              console.log(this.checkedNames.length )
              var t = this.checkedNames[ Math.floor( ( Math.random() * this.checkedNames.length ) )  ]
              ElMessageBox.confirm(
                t,
                '吃：',
                {
                  confirmButtonText: '继续选！',
                  cancelButtonText: '就这个！',
                  type: 'info',
                }
              )
                .then(() => {
                  this.randomChoice()
                })
                .catch(() => {
                  ElMessage({
                    type: 'primary',
                    message: '选完了！',
                  })
                })
                // console.log() 
          },
          randomChoiceLocations(arr){
            var Answer = this.locations2[arr][Math.floor( ( Math.random() * this.locations2[arr].length ) )]
            this.lastChoice = Answer
            ElMessageBox.confirm(
              Answer,
              '去：',
              {
                confirmButtonText: '继续选！',
                cancelButtonText: '就这儿！',
                type: 'info',
              }
            )
              .then(() => {
                this.randomChoiceLocations(arr)
              })
              .catch(() => {
                ElMessage({
                  type: 'primary',
                  message: '选完了！',
                })
              })
          },
          randomChoiceArrTest(arr){
            // console.log(this.Foods[arr])
            var Answer = this.Foods[arr][Math.floor( ( Math.random() * this.Foods[arr].length ) )]
            this.lastChoice = Answer
            ElMessageBox.confirm(
              Answer,
              '吃：',
              {
                confirmButtonText: '继续选！',
                cancelButtonText: '就这个！',
                type: 'info',
              
              }
            )
              .then(() => {
                // ElMessage({
                //   type: 'success',
                //   // message: 'Delete completed',
                // })

                this.randomChoiceArrTest(arr)
              })
              .catch(() => {
                ElMessage({
                  type: 'primary',
                  message: '选完了！',
                })
              })
            // console.log(this.Foods[arr])
            // var t = this.Foods[arr][Math.floor( ( Math.random() * this.Foods[arr].length ) )]
            // alert(t)
          }
      }
}
