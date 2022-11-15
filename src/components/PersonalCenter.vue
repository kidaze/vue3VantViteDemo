  <script setup>

  </script>

  <template>
    <div class="body">
        <div class="top">
            <div class="ava">
                <img src='../assets/personalCenter/avatar.png'/>
            </div>
            <div class="username">参会嘉宾</div>
        </div>
        <div class="bottom">
            <div class="bottomItem">
                <div class="icon"><img src="../assets/personalCenter/signupInformation.png" /></div>
                <div class="iconInfo">报名信息</div>
            </div>
            <div class="bottomItem">
                <div class="icon"><img src="../assets/personalCenter/q&a.png" /></div>
                <div class="iconInfo">常见问题Q&A</div>
            </div>
            <div class="bottomItem">
                <div class="icon"><img src="../assets/personalCenter/exit.png" /></div>
                <div class="iconInfo">退出</div>
            </div>
        </div>
    </div>
    
  </template>

  <style scoped>
  .body{
    width: 100vw;
    height: 100vh;
  }

  .bottom{
    width: 100vw;
    border-radius: 1rem;
    background-color:#fff;
    margin-top: -2vh;
  }

  .top{
    width: 100vw;
    background-image: url('../assets/personalCenter/banner.png');
    background-size: 100% 100%;
    height: 17vh;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .ava, .icon{
    margin-left: 5vw;
  }

  .username{
    margin-left: 2vw;
    color: #fff;
  }

  .bottomItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 8vh;
    border-bottom: 1px solid gainsboro;
  }

  .iconInfo{
        margin-left: 5vw;
  }
  </style>