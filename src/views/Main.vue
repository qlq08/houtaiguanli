<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- 路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
export default {
  name: 'MyMain',
  components: { CommonAside }
}
</script>

