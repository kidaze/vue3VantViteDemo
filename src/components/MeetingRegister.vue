<script>
import { ref } from "vue";
import { areaList } from "@vant/area-data";
import { Dialog } from "vant"
export default {
  setup() {
    const result = ref("");
    const result2 = ref("");
    const result3 = ref("");

    const checked = ref("1");
    const checked2 = ref("3");

    const checkedBox = ref(false);

    const showPicker = ref(false);
    const showPicker2 = ref(false);
    const showArea = ref(false);

    const columns = ["医生", "企业", "其他"];
    const columns2 = [
      "主任医师",
      "副主任医师",
      "主治医师",
      "住院医师",
      "护师",
      "主管护师",
      "副主任医师",
      "主任护师",
      "其他",
    ];
    const onConfirm = (value) => {
      result.value = value;
      showPicker.value = false;
    };

    const message = ``

    const popUpWindow = ()=>{
      Dialog.alert({
        title: '隐私政策',
        messageAlign: 'left',
        message: '1、用户信息公开情况说明\n2、隐私权政策适用范围\n3、咨询公开与共享\n4、COOKIES、档案与WEBBEACON',
      }).then(() => {
        // on close
      });
    }
    // const onConfirm2 = (value) => {
    //   result2.value = value;
    //   showPicker2.value = false;
    // };

    const onConfirm3 = (value) => {
      result3.value = value;
      showPicker2.value = false;
    };

    const onConfirm2 = (areaValues) => {
      showArea.value = false;
      result2.value = areaValues
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
    };

    return {
      checked,
      checked2,
      result,
      result2,
      result3,
      areaList,
      showArea,
      columns,
      columns2,
      onConfirm,
      onConfirm2,
      onConfirm3,
      showPicker,
      showPicker2,
      checkedBox,
      popUpWindow
    };
  },
};
</script>

<template>
  <div class="body">
    <div class="top"></div>
    <div class="bottom">
      <img src="../assets/register/title.png" />
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="参会人姓名"
          label="参会人姓名"
          placeholder="请填写真实姓名"
        />

        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="checked" direction="horizontal">
              <van-radio name="1" checked-color="#941E23">男</van-radio>
              <van-radio name="2" checked-color="#941E23">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          v-model="value2"
          name="手机号"
          label="手机号"
          placeholder="请填写参会人手机号"
        />

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

        <van-field
          v-model="value2"
          name="邮箱"
          label="邮箱"
          placeholder="请填写参会人常用邮箱"
        />

        <van-field
          v-model="result"
          is-link
          readonly
          name="参会身份"
          label="参会身份"
          placeholder="请选择参会身份"
          @click="showPicker = true"
        />

        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>

        <van-field
          v-model="result2"
          is-link
          readonly
          name="area"
          label="医院名称"
          placeholder="请选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model:show="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm2"
            @cancel="showArea = false"
          />
        </van-popup>
        <van-field
          v-model="username"
          name="医院名称"
          placeholder="请填写参会人医院名称"
        />

        <van-field
          v-model="value2"
          name="部门名称"
          label="部门名称"
          placeholder="请填写部门名称"
        />

        <van-field
          v-model="value2"
          name="职务名称"
          label="职务名称"
          placeholder="请填写职务名称"
        />

        <van-field
          v-model="result3"
          is-link
          readonly
          name="职称名称"
          label="职称名称"
          placeholder="请选择职称名称"
          @click="showPicker2 = true"
        />

        <van-popup v-model:show="showPicker2" position="bottom">
          <van-picker
            :columns="columns2"
            @confirm="onConfirm3"
            @cancel="showPicker2 = false"
          />
        </van-popup>

        <van-field name="radio" label="参会意向">
          <template #input>
            <van-radio-group v-model="checked2" direction="horizontal">
              <van-radio name="3" checked-color="#941E23">是</van-radio>
              <van-radio name="4" checked-color="#941E23">否</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="checkboxGroup">
          <template #input>
            <van-checkbox v-model="checkedBox" shape="square" checked-color="#941E23" @click="popUpWindow">请阅读隐私条款内容，同意方可注册</van-checkbox>
          </template>
        </van-field>
      </van-cell-group>

      <van-button block color="#941E23" class="btnStyle">注册</van-button>
    </div>
  </div>
</template>

<style scoped>
.btnStyle{
  margin: 2vh auto;
  width: 90vw;
}

.body {
  width: 100vw;
  height: 100vh;
}

.bottom {
  width: 100vw;
  border-radius: 1rem;
  background-color: #fff;
  margin-top: -2vh;
  padding: 2vh 0;
}

.top {
  width: 100vw;
  background-image: url("../assets/register/banner.png");
  background-size: 100% 100%;
  height: 30vh;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bottom img {
  margin: 2vh;
}
</style>
