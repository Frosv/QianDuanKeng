var Child = {
  template: '<div>{{message}}</div>'
}
new Vue({
  // ...
  el:'#app',
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  },
  data:{
    message:'age'
  },
  prop:['message']
})