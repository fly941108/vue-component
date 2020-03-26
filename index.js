var root = new Vue({
    el:'#root',
    data:{
        tabdata:[
            {
                name:'标签一',
                content:'这是标签一的内容'
            },
            {
                name:'标签二',
                content:'这是标签二的内容'
            }
        ],
        max:30,
        closable:true
    },
    methods:{
        addTabs(){
            let length = this.tabdata.length;
            let addValue = {
                name:'标签'+(length + 1),
                content:'这是标签'+(length + 1)+'的内容'
            }
            this.tabdata.push(addValue)
        },
        closeTab(val){
            this.tabdata.splice(val,1)
        }
    }
})