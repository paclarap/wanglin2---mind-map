<template>
  <div class="fullscreenContainer" :class="{ isDark: isDark }">
    <el-tooltip
      class="item"
      effect="dark"
      :content="$t('fullscreen.fullscreenShow')"
      placement="top"
    >
      <div class="btn iconfont iconquanping" @click="toFullscreenShow"></div>
    </el-tooltip>
    <el-tooltip
      class="item"
      effect="dark"
      :content="$t('fullscreen.fullscreenEdit')"
      placement="top"
    >
      <div class="btn iconfont iconquanping1" @click="toFullscreenEdit"></div>
    </el-tooltip>
  </div>
</template>

<script>
import { fullscreenEvent, fullScreen } from '@/utils'

/**
 * @Author: 王林
 * @Date: 2021-06-24 22:53:10
 * @Desc: 全屏
 */
export default {
  name: 'Fullscreen',
  props: {
    mindMap: {
      type: Object
    },
    isDark: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  created() {
    document[fullscreenEvent] = () => {
      setTimeout(() => {
        this.mindMap.resize()
      }, 1000)
    }
  },
  methods: {
    // 全屏查看
    toFullscreenShow() {
      fullScreen(this.mindMap.el)
    },

    // 全屏编辑
    toFullscreenEdit() {
      fullScreen(document.body)
    }
  }
}
</script>

<style lang="less" scoped>
.fullscreenContainer {
  display: flex;
  align-items: center;

  &.isDark {
    .btn {
      color: hsla(0,0%,100%,.6);
    }
  }

  .item {
    margin-right: 12px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  .btn {
    cursor: pointer;
  }
}
</style>
