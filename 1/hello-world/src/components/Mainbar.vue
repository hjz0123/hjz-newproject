<template>
  <div>
    <nav>
      <span @click="tabs()" :class="istrue?'active':'none'">
        正在热映
      </span>
      <span @click="tab()" :class="istrue?'none':'active'">
        即将上映
      </span>
    </nav>
    <div class="box">
    <dl v-for="(item,index) in brr" :key="index">
      <dd><img src={item.img}/></dd>
      <dt>
        <p>{{item.nm}}</p>
        <span>演员：{{item.star}}</span>
        <i>时间:{{item.rt}}</i>
        <label>场次：{{item.showInfo}}</label>
      </dt>
    </dl>
  </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      arr:[],
      brr:[],
      istrue:true
    }
  },
  components:{
    
  },
  created() {
    this.getdata()
  },
  methods: {
    getdata(){
      this.$http.get("/api").then(res=>{
        this.arr=res.data.list.movieList
        this.brr=this.arr.filter(val=>val.globalReleased===true)
        console.log(this.arr)
      })
    },
    tabs(){
      this.istrue=true
      this.brr=this.arr.filter(val=>val.globalReleased===true)
    },
    tab(){
      this.istrue=false
      this.brr=this.arr.filter(val=>val.globalReleased===false)
    }
  },
  
}
</script>
<style scoped="scss">
  nav{
    width: 100%;
    height: 40px;
    display: flex;
  }
  nav span{
    display: inline-block;
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 40px
  }
  .box{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .box dl{
    width: 99%;
    height: 100px;
    border: 1px solid #ccc;
    margin-top: 5px;
    display: flex;
  }
  .box dl dd{
    width: 30%;
    height: 100%;
  }
  .box dl dt{
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  .active{
    color: red
  }
  .none{
    color: #000;
  }
</style>