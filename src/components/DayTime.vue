
<template>
  

 
  
  <div style = "height:40px;  margin-top:5px">{{ dateYear }} {{ dateDay }} {{ dateWeek }}</div>
  

  
  
</template>



<script lang = "js">
import dayjs from "dayjs";

export default {
  data() {
    return {
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      const date = dayjs(new Date());
      this.dateDay = date.format("HH:mm:ss");
      this.dateYear = date.format("YYYY-MM-DD");
      this.dateWeek = date.format(this.weekday[date.day()]);
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};


</script>