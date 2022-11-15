<script>
import { ref } from "vue";
import { Popup } from "vant";

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
  },
};
</script>

<template>
  <div class="body">
    <div class="title">
      <img src="../assets/homepage/meetingLogo.png" />
    </div>
    <div class="gridItem">
      <div class="item"><img src="../assets/homepage/welcomeWord.png" /></div>
      <div class="item">
        <img src="../assets/homepage/basicInformation.png" />
      </div>
      <van-cell is-link @click="showPopup">
        <div class="item">
          <img src="../assets/homepage/meetingRegister.png" />
        </div>
      </van-cell>
      <div class="item"><img src="../assets/homepage/meetingReview.png" /></div>
      <div class="item"><img src="../assets/homepage/dailyRoutine.png" /></div>
      <van-cell is-link @click="showPopup">
        <div class="item"><img src="../assets/homepage/meetingLive.png" /></div>
      </van-cell>
      <div class="item"><img src="../assets/homepage/company.png" /></div>
      <div class="item"><img src="../assets/homepage/contactUs.png" /></div>
      <router-link to="/personalCenter">
        <div class="item">
          <img src="../assets/homepage/personalCenter.png" />
        </div>
      </router-link>
    </div>
    <div class="footer">
      <img src="../assets/homepage/horseLogo.png" />
    </div>

    <van-popup v-model:show="show" position="bottom">
      <div class="logInTitle"></div>
      <div class="popUpDiv">
        <div class="popUpItem">
          <van-field
            v-model="value2"
            clearable
            left-icon="phone-o"
            placeholder="请输入您已注册的手机号"
          />
        </div>
        <div class="popUpItem">
          <van-field
            v-model="sms"
            left-icon="edit"
            center
            clearable
            placeholder="请输入验证码"
          >
            <template #button>
              <van-button size="small" color="#941E23">获取验证码</van-button>
            </template>
          </van-field>
        </div>
        <div class="popUpItem">
          <router-link to="/register">
            <van-button color="#941E23" size="large">登录</van-button>
          </router-link>
        </div>
        <div class="popUpItem">
          <van-button color="#C19178" size="large">新用户注册</van-button>
        </div>

        <div class="footer">
          <img src="../assets/homepage/horseLogo.png" />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<style scoped>
.body {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/homepage/background.png");
}

.title {
  width: 100vw;
  height: 20vh;
  padding-top: 5vh;
}

.popUpItem{
  width: 95vw;
  margin: 0 auto;
  margin-top: 3vh;
}

.title img {
  display: block;
  margin: 0 auto;
  text-align: center;
}

.popUpDiv {
  width: 100vw;
  height: 60vh;
}

.gridItem {
  width: 96vw;
  margin: 0 auto;
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 1vw;
}

.footer {
  height: 20vh;
  position: fixed;
  left: 0;
  bottom: 0;
}

.footer img {
  width: 100vw;
  display: block;
  margin-top: 13vh;
}
</style>
