<script>
import { ref } from "vue";

export default {
  setup() {
    //  popUp登录框状态
    const show = ref(false);
    //  Dialog框状态
    const showDialog = ref(true);
    const showPopup = () => {
      show.value = true;
    };
    // Dialog框单选值状态
    const checked = ref("1");
    const checked2 = ref("3");
    return {
      show,
      showDialog,
      showPopup,
      checked,
      checked2
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
      <div class="logInTitle">登录</div>
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

    <van-dialog v-model:show="showDialog">
      <div class="dialogText">您是否有意向参加2023年1月6日-8日第五届中国呼吸发展大会</div>
      <van-field name="radio">
        <template #input>
          <van-radio-group v-model="checked" direction="horizontal">
            <van-radio name="1" checked-color="#941E23">是</van-radio>
            <van-radio name="2" checked-color="#941E23">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div class="dialogText">您的参会方式</div>
      <van-field
        name="radio"
      >
        <template #input>
          <van-radio-group v-model="checked2" direction="horizontal">
            <van-radio name="3" checked-color="#941E23">线上</van-radio>
            <van-radio name="4" checked-color="#941E23">线下</van-radio>
          </van-radio-group>
        </template>
      </van-field>
    </van-dialog>
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

.dialogText{
  width: 76vw;
  margin: 3vw auto;
}

.logInTitle {
  width: 95vw;
  margin: 0 auto;
  color: #941e23;
  font-size: 2rem;
  font-weight: bold;
  padding: 5vw;
}

.popUpItem {
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
  margin-top: 6vh;
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
