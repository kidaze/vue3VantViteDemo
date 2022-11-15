<script >
import { ref } from "vue";

export default {
setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
}}
</script>

<template>
  <div class="body">
    <div class="top">
      <div class="ava">
        <img src="../assets/personalCenter/avatar.png" />
      </div>
      <div class="username">参会嘉宾</div>
    </div>
    <div class="bottom">
      <router-link to="/registerInformation">
        <div class="bottomItem">
          <div class="icon">
            <img src="../assets/personalCenter/signupInformation.png" />
          </div>
          <div class="iconInfo">报名信息</div>
        </div>
      </router-link>
      <div class="bottomItem">
        <div class="icon"><img src="../assets/personalCenter/q&a.png" /></div>
        <div class="iconInfo">常见问题Q&A</div>
      </div>
      <div class="bottomItem">
        <div class="icon"><img src="../assets/personalCenter/exit.png" /></div>
        <div class="iconInfo" @click="showPopup">退出</div>
      </div>
    </div>
    <van-popup v-model:show="show" position="bottom">
      <router-link to="/">
        <van-button size="large">退出</van-button>
      </router-link>
      <van-button size="large" @click="show=false">取消</van-button>
    </van-popup>
  </div>
</template>

<style scoped>
.body {
  width: 100vw;
  height: 100vh;
}

.bottom {
  width: 100vw;
  border-radius: 1rem;
  background-color: #fff;
  margin-top: -2vh;
}

.top {
  width: 100vw;
  background-image: url("../assets/personalCenter/banner.png");
  background-size: 100% 100%;
  height: 17vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ava,
.icon {
  margin-left: 5vw;
}

.username {
  margin-left: 2vw;
  color: #fff;
}

.bottomItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  border-bottom: 1px solid gainsboro;
}

.iconInfo {
  margin-left: 5vw;
}
</style>
