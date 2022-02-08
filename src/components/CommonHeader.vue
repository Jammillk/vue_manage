<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: #fff"></h3>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini">
            <span>
              <img class="user" :src="userImg">
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      userImg: require('../assets/images/user.png')
    }
  }
}
</script>