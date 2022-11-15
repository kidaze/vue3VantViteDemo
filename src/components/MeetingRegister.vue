<script>
import { ref, reactive } from "vue";
import { areaList } from "@vant/area-data";
import { Dialog } from "vant";
export default {
  setup() {
    // 校验手机号
    const pattern = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    // 校验邮箱
    const validator = (val) => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val);

    const data = reactive({
      identity: "",
      hospitalLocale: "",
      jobName: "",
      sex: "1",
      isAttend: "3",
      privacy: false,
      showIdentityPicker: false,
      showJobNamePicker: false,
      showArea: false,
      tel: "",
      sms: "",
      name: "",
      email: "",
      hospitalName: "",
      jobTitleName: "",
      departmentName: "",
    });

    const identityColumns = ["医生", "企业", "其他"];
    const jobTitleColumns = [
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
      data.identity = value;
      data.showIdentityPicker = false;
    };

    const popUpWindow = () => {
      Dialog.alert({
        title: "隐私政策",
        messageAlign: "left",
        message:
          "1、用户信息公开情况说明\n2、隐私权政策适用范围\n3、咨询公开与共享\n4、COOKIES、档案与WEBBEACON",
      }).then(() => {
        // on close
      });
    };

    const onConfirmJobName = (value) => {
      data.jobName = value;
      data.showJobNamePicker = false;
    };

    const onConfirmHospitalLocale = (areaValues) => {
      data.showArea = false;
      data.hospitalLocale = areaValues
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
    };

    const onSubmit = (values) => {
      console.log("submit", values);
    };

    return {
      data,
      onSubmit,
      areaList,
      identityColumns,
      jobTitleColumns,
      onConfirm,
      onConfirmHospitalLocale,
      onConfirmJobName,
      popUpWindow,
      pattern,
      validator,
    };
  },
};
</script>

<template>
  <div class="body">
    <div class="top"></div>
    <div class="bottom">
      <img src="../assets/register/title.png" />
      <van-form @submit="onSubmit(data)">
        <van-cell-group inset>
          <van-field
            v-model="data.name"
            name="参会人姓名"
            label="参会人姓名"
            placeholder="请填写真实姓名"
          />

          <van-field name="radio" label="性别">
            <template #input>
              <van-radio-group v-model="data.sex" direction="horizontal">
                <van-radio name="1" checked-color="#941E23">男</van-radio>
                <van-radio name="2" checked-color="#941E23">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field
            v-model="data.tel"
            name="pattern"
            :rules="[{ pattern, message: '请输入正确的手机号' }]"
            label="手机号"
            placeholder="请填写参会人手机号"
          />

          <van-field
            v-model="data.sms"
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
            v-model="data.email"
            label="邮箱"
            name="validator"
            :rules="[{ validator, message: '请输入正确的邮箱' }]"
            placeholder="请填写参会人常用邮箱"
          />

          <van-field
            v-model="data.identity"
            is-link
            readonly
            name="参会身份"
            label="参会身份"
            placeholder="请选择参会身份"
            @click="data.showIdentityPicker = true"
          />

          <van-popup v-model:show="data.showIdentityPicker" position="bottom">
            <van-picker
              :columns="identityColumns"
              @confirm="onConfirm"
              @cancel="data.showIdentityPicker = false"
            />
          </van-popup>

          <van-field
            v-model="data.hospitalLocale"
            is-link
            readonly
            name="area"
            label="医院名称"
            placeholder="请选择省市区"
            @click="data.showArea = true"
          />
          <van-popup v-model:show="data.showArea" position="bottom">
            <van-area
              :area-list="areaList"
              @confirm="onConfirmHospitalLocale"
              @cancel="data.showArea = false"
            />
          </van-popup>
          <van-field
            v-model="data.hospitalName"
            name="医院名称"
            placeholder="请填写参会人医院名称"
          />

          <van-field
            v-model="data.departmentName"
            name="部门名称"
            label="部门名称"
            placeholder="请填写部门名称"
          />

          <van-field
            v-model="data.jobTitleName"
            name="职务名称"
            label="职务名称"
            placeholder="请填写职务名称"
          />

          <van-field
            v-model="data.jobName"
            is-link
            readonly
            name="职称名称"
            label="职称名称"
            placeholder="请选择职称名称"
            @click="data.showJobNamePicker = true"
          />

          <van-popup v-model:show="data.showJobNamePicker" position="bottom">
            <van-picker
              :columns="jobTitleColumns"
              @confirm="onConfirmJobName"
              @cancel="data.showJobNamePicker = false"
            />
          </van-popup>

          <van-field name="radio" label="参会意向">
            <template #input>
              <van-radio-group v-model="data.isAttend" direction="horizontal">
                <van-radio name="3" checked-color="#941E23">是</van-radio>
                <van-radio name="4" checked-color="#941E23">否</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field name="checkboxGroup">
            <template #input>
              <van-checkbox
                v-model="data.privacy"
                shape="square"
                checked-color="#941E23"
                @click="popUpWindow"
                >请阅读隐私条款内容，同意方可注册</van-checkbox
              >
            </template>
          </van-field>
        </van-cell-group>
      </van-form>
      <van-button block color="#941E23" class="btnStyle" @click="onSubmit(data)"
        >注册</van-button
      >
    </div>
  </div>
</template>

<style scoped>
.btnStyle {
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
