<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        style="margin-right: 20px"
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑区域 -->
      <!-- <span class="text">首页</span> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="cancel">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookie from 'js-cookie'
export default {
  name: 'CommonHeader',
  methods: {
    handleMenu () {
      this.$store.commit('collapseMenu')
    },
    handleClick (command) {
      if (command === 'cancel') {
        // 清除cookie中的 token
        Cookie.remove('token')
        // 清除cookie中的menu
        Cookie.remove('menu')
        // 跳转至登录页面
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },

}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-content {
    display: flex;
    align-items: center;
    /deep/ .el-breadcrumb_item {
      .el-breadcrumb_inner {
        font-weight: normal;
        &.is-link {
          color: #666;
        }
      }
      &:last-child {
        .el-breadcrumb_inner {
          color: #fff;
        }
      }
    }
  }
}
</style>>
