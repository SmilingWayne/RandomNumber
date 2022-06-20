<template>
    
  <div class="keyboard-base">
        <div class="key color" id = "Id192">~</div>
        <div class="key" id = "Id49" ><span>!</span>1</div>
        <div class="key" id = "Id50" ><span>@</span>2</div>
        <div class="key" id = "Id51" ><span>#</span>3</div>
        <div class="key" id = "Id52" ><span>$</span>4</div>
        <div class="key" id = "Id53" ><span>%</span>5</div>
        <div class="key" id = "Id54" ><span>^</span>6</div>
        <div class="key" id = "Id55" ><span>&</span>7</div>
        <div class="key" id = "Id56" ><span>*</span>8</div>
        <div class="key" id = "Id57" ><span>(</span>9</div>
        <div class="key" id = "Id58" ><span>)</span>0</div>
        <div class="key" id = "Id189">-</div>
        <div class="key" id = "Id187">+</div>
        <div class="key delete color"  id = "Id8">Delete</div>
        <div class="key tab color">Tab</div>
        <div class="key" id = "Id81">Q</div>
        <div class="key" id = "Id87">W</div>
        <div class="key" id = "Id69">E</div>
        <div class="key" id = "Id82">R</div>
        <div class="key" id = "Id84">T</div>
        <div class="key" id = "Id89">Y</div>
        <div class="key" id = "Id85">U</div>
        <div class="key" id = "Id73">I</div>
        <div class="key" id = "Id79">O</div>
        <div class="key" id = "Id80">P</div>
        <div class="key" id = "Id219">[</div>
        <div class="key" id = "Id221">]</div>
        <div class="key backslash color" id = "Id220">\</div>
        <div class="key capslock color" id = "Id20">CapsLock</div>
        <div class="key" id = "Id65">A</div>
        <div class="key" id = "Id83">S</div>
        <div class="key" id = "Id68">D</div>
        <div class="key" id = "Id70">F</div>
        <div class="key" id = "Id71">G</div>
        <div class="key" id = "Id72">H</div>
        <div class="key" id = "Id74">J</div>
        <div class="key" id = "Id75">K</div>
        <div class="key" id = "Id76">L</div>
        <div class="key" id = "Id186">;</div>
        <div class="key" id = "Id222">'</div>
        <div class="key return" id = "Id13">Return</div>
        <div class="key leftshift color" id = "Id16">Shift</div>
        <div class="key" id = "Id90">Z</div>
        <div class="key" id = "Id88">X</div>
        <div class="key" id = "Id67">C</div>
        <div class="key" id = "Id86">V</div>
        <div class="key" id = "Id66">B</div>
        <div class="key" id = "Id78">N</div>
        <div class="key" id = "Id77">M</div>
        <div class="key" id = "Id188">,</div>
        <div class="key" id = "Id190">.</div>
        <div class="key" id = "Id191">/</div>
        <div class="key rightshift color">Shift</div>
        <div class="key color">Fn</div>
        <div class="key leftctrl color" id = "Id17">Ctrl</div>
        <div class="key color"  id = "Id18">Alt</div>
        <div class="key command color" id = "Id91"><span>⌘</span><br/>Command</div>
        <div class="key space" id = "Id32">Space</div>
        <div class="key command color"><span>⌘</span><br/>Command</div>
        <div class="key color">Alt</div>
        <div class="key color">Ctrl</div>
        
    </div>
</template>


<script lang = "js">

export default {
  data() {
    return {
        current_press : [],        
    };
  },
  created() {
    var that = this;
    //当前页面监视键盘输入
    
    document.onkeydown = function(e) {
      //事件对象
        let key = window.event.keyCode;
        console.log(key + "Down")
        var btn = document.getElementById("Id" + key)
        btn.style.backgroundColor = "red"
    //   e.preventDefault();
    }
    document.onkeyup = function(e){
        const aux = ["192", "20", "16", "18", "17","91", "8", "22"]
        const commonKeys = ["49","50","51","52","53","54","55","56","57","58", 
            "65","66","67","68","69", "70", "71", "72", "73", "74", "75","76",
            "77","78","79", "80", "81", "82", "83", "84", "85","86","87","88","89",
            "90", "219","221", "186", "220", "188", "190", "191","189", "187"]
        const specialKeys = ["32", "13"]
        let key = window.event.keyCode;
        // console.log(key + "Down")
        var btn = document.getElementById("Id" + key)
        // console.log(toString(key))

        if(commonKeys.indexOf(String(key) )!= -1){
            btn.style.backgroundColor = "rgb(243, 243, 243)"
        }
        else if(aux.indexOf(String(key)) != -1){
            btn.style.backgroundColor = "rgb(180, 180, 180)"
        }
        else{
            btn.style.backgroundColor = "rgb(250, 140, 70)"
        }
        
    }
  },    
  mounted() {
   
  },
  methods : {
  
  }
};


</script>

<style lang="css">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .keyboard-base{
        min-width: 1085px;
        padding: 20px;
        background-color: rgb(56, 56, 56);
        border-radius: 10px;
        display: grid;
        grid-template-columns: repeat(30,30px);
        grid-template-rows: repeat (5,60px);
        grid-gap: 5px;
    }
    .key{
        background-color: rgb(243, 243, 243);
        border-radius: 5px;
        grid-column: span 2;
        font: 500 20px '';
        font-weight: 600;
        text-align: center;
        padding: 16px;
        border: 2px solid black;
    }
    .key:hover{
        box-shadow:  inset 0 0 7px rgba(0,0,0,0.8);
    }

    .color{
        background-color: rgb(180, 180, 180);
    }
    .delete{
        grid-column: span 4;
    }
    .tab{
        grid-column: span 3;
    }
    .backslash{
        grid-column: span 3;
    }
    .capslock{
        grid-column: span 4;
    }
    .return{
        background-color: rgb(250, 140, 70);
        grid-column: span 4;
    }
    .leftshift{
        grid-column: span 5;
    }
    .rightshift{
        grid-column: span 5;
    }
    .leftctrl{
        grid-column: span 3;
    }
    .command{
        grid-column: span 3;
        font-size: 14px;
    }
    .space{
        background-color: rgb(250, 140, 70);
        grid-column: span 13;
    }
</style>

