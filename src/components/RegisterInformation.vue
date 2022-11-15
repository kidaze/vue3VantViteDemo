<script>
import { ref, reactive } from 'vue'
import RegisterInformationItem from '../components/RegisterInformationItem.vue'
export default {
    name: 'RegisterInformation',
    components: {
        RegisterInformationItem
    },
    setup(){
        // 后续接口数据从这里导入
        const person1 = reactive({
            name: '王鑫煊',
            sex: '女',
            type: 1,
            tel: 13600001111
        })

        const person2 = reactive({
            name: '王鑫煊2',
            sex: '男',
            type: 2,
            tel: 13600002222
        })
        
        return { person1, person2 }
    }
}
</script>

<template>
    <div>
        <RegisterInformationItem :name="person1.name" :sex="person1.sex" :type="person1.type" :tel="person1.tel"/>
        <RegisterInformationItem :name="person2.name" :sex="person2.sex" :type="person2.sex" :tel="person2.tel"/>
        <div class="bottom">
            <router-link to="/register">
                <van-button size="large" color="#941E23" class="btnStyle">继续为他人注册</van-button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.bottom{
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
}

.btnStyle{
    display: block;
    width: 90vw;
    margin: 5vh auto;
}
</style>