<script>
import { reactive, ref } from "vue";
export default {
  name: "RegisterInformationItem",
  props: {
    name: String, // 姓名
    sex: String, //性别
    tel: Number, // 电话号码
    type: Number, // 1为本人注册，2为他人注册
  },
  setup(props) {
    const name = reactive(props.name);
    const sex = reactive(props.sex);
    const tel = reactive(props.tel);
    const type = reactive(props.type);

    const show = ref(false);
    const showDialog = ref(false);
    const value = ref("");
    const showKeyboard = ref(false);

    const showPopup = () => {
      show.value = true;
    };
    return {
      name,
      sex,
      tel,
      type,
      show,
      showPopup,
      showDialog,
      value,
      showKeyboard,
    };
  },
};
</script>

<template>
  <div class="inforItem">
    <div class="itemType">
      <img src="../assets/registerInformation/icon.png" class="typeStyle"/>{{
        type === 1 ? "本人注册" : "为他人注册"
      }}<img
        src="../assets/registerInformation/more.png"
        class="moreStyle"
        @click="showPopup"
      />
    </div>
    <div class="itemName">{{ name }}</div>
    <div class="itemSex">{{ sex }}</div>
    <div class="itemTel">{{ tel }}</div>
    <van-popup v-model:show="show" position="bottom">
      <router-link to="/register">
        <van-button size="large">编辑</van-button>
      </router-link>
      <van-button size="large" @click="showDialog = true;show = false">取消注册</van-button>
      <router-link to="/register">
        <van-button size="large">查看</van-button>
      </router-link>
      <van-button size="large" @click="show = false">取消</van-button>
    </van-popup>
    <van-dialog v-model:show="showDialog" class="dialogStyle" width="90vw">
      <van-password-input
        :value="value"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
        />
    </van-dialog>
    
  </div>
</template>

<style>

.dialogStyle {
  width: 90vw!important;
  height: 60vh!important;
  padding-top: 5vh!important;
}

.inforItem {
  width: 95vw;
  margin: 2vh auto;
  border-bottom: 1px solid gainsboro;
}

.typeStyle {
  display: inline-block;
  margin: 0 3vw;
}

.moreStyle {
  position: absolute;
  right: 5vw;
}
.itemType {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1vw 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.itemName,
.itemSex,
.itemTel {
  margin: 2vh 11vw;
}
</style>
