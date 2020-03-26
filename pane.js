Vue.component('my-pane',{
    props:{
        title:{
            type:String,
            default:function(){
                return ""
            }
        },
        index:{
            type:Number,
            default:function(){
                return 1
            }
        }
    },
    template:`
        <div v-show="currentIndex == myIndex">
            <slot></slot>
        </div>
    `,
    data(){
        return{
           myIndex : this.index
        }
    },
    computed:{
        currentIndex(){
            return this.$parent.currentIndex;
        }
    },
    methods:{
        
    }
})