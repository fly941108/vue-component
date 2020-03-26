Vue.component('my-tabs',{
    props:{
        value:{
            type:Array,
            default:function(){
                return []
            }
        },
        max:{
            type:Number,
            default:function(){
                return 20
            }
        },
        closable:{
            type:Boolean,
            default:function(){
                return false
            }
        }
    },
    template:`
        <div>
            <div class="tabBars">
                <div v-for="(item,index) in tabList" class="tabs" :class="{active:currentIndex == index}" @click="currentTab(index)">
                    <span>{{item.name}}</span>
                    <span class="closeButton" v-show="isClosable" @click.stop="closeButton(index)">x</span>
                </div>
            </div>
            <div class="tabContent">
                <slot></slot>
            </div>
        </div>
    `,
    data(){
        return{
            tabList:this.value,
            currentIndex:0,
            isClosable:this.closable
        }
    },
    methods:{
        closeButton(index){
            this.$emit('closetab',index);
            if(this.currentIndex == this.tabList.length){
                this.currentIndex = this.tabList.length -1
            }
        },
        currentTab(index){
            this.currentIndex = index;
        }
    },
    watch:{
        value(newValue,oldValue){
            this.tabList = newValue
        }
    }
})