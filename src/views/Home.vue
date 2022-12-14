<template>
  <el-row>
    <!-- 左侧区域 -->
    <el-col :span="8">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/images/user.png" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间: <span>2021-7-19</span></p>
          <p>上次登录地点: <span>武汉</span></p>
        </div>
      </el-card>

      <!-- 表格卡片区域 -->
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <!--  <el-table-column prop="name" label="手机品牌"> </el-table-column>
          <el-table-column prop="todayBuy" label="今日购买"> </el-table-column>
          <el-table-column prop="monthBuy" label="本月购买"> </el-table-column>
          <el-table-column prop="totalBuy" label="总购买"> </el-table-column> -->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :prop="key"
            :label="val"
            :key="key"
          />
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧区域 -->
    <el-col :span="16">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">￥{{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'MyHome',
  data () {
    return {
      tableData: [
        {
          name: 'oppo',
          todayBuy: 500,
          monthBuy: 3500,
          totalBuy: 22000
        },
        {
          name: 'vivo',
          todayBuy: 300,
          monthBuy: 2200,
          totalBuy: 24000
        },
        {
          name: '苹果',
          todayBuy: 800,
          monthBuy: 4500,
          totalBuy: 65000
        },
        {
          name: '小米',
          todayBuy: 1200,
          monthBuy: 6500,
          totalBuy: 45000
        },
        {
          name: '三星',
          todayBuy: 300,
          monthBuy: 2000,
          totalBuy: 34000
        },
        {
          name: '魅族',
          todayBuy: 350,
          monthBuy: 3000,
          totalBuy: 22000
        }
      ],
      tableLabel: {
        name: '手机品牌',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    span {
      margin-left: 60px;
    }
  }
}
.num {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      height: 30px;
      line-height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
</style>