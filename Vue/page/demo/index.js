var app = new Vue({
  el: '#app',
  data: {
    message: 'hover',
    flag: false
  },
  methods: {
    hover: function () {
      // console.log(vm.$el)
      // console.log(this.$el);
      this.flag = true;
    },
    hoverOver: function(){
      this.flag = false;
    }
  }
});

var app2 = new Vue({
  el:'#app2',
  data:{
    yes:true,
    no:false,
    age:30,
    name:'123'
  }
});

var app3 = new Vue({
  el:'#app3',
  data:{
    people:[{
      name:'1',
      age:2
    },{
      name:'2sd',
      age:222
    }]
  }
});

var demo = new Vue({
  el:'#demo',
  data:{
    person:{
      name:'',
      age:0,
      sex:'扶她'
    },

    people:[{
      name:123,
      age:2333,
      sex:'gay'
    },{
      name:'hhhh',
      age:0000,
      sex:'gay'
    },{
      name:'hhhh',
      age:0000,
      sex:'gay'
    }]

  },
  methods:{
    createPerson:function(){
      console.log(this);
      this.people.push(this.person);
    },
    delPerson:function(index){
      console.log(index)
      this.people.splice(index,1);
    }
  }
});