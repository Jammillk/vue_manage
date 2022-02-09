<template>
  <div class="tabs">
    <el-tag
        size="small"
        v-for="(tag, index) in tags"
        :key="tag.name"
        :closable="tag.name !== 'home'"
        :effect="$route.name === tag.name ? 'dark' : 'plain'"
        @click="changeMenu(tag)"
        @close="handleClose(tag, index)">
      {{ tag.label }}
    </el-tag>
  </div>

</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'CommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      // state要指定文件名tab
      tags: state => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations({
      // 起别名，调用close方法就是调用vuex里面的closeTag
      close: 'closeTag'
    }),
    changeMenu(item) {
      // 路由跳转
      this.$router.push({name: item.name})
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1
      // 跳转逻辑
      if (tag.name !== this.$route.name) {
        return;
      }
      if (length === index) {
        // 点击的是最右一个，删掉它
        // 就跳转到前一个
        this.$router.push({name: this.tags[index - 1].name})
      } else {
        this.$router.push({name: this.tags[index].name})
      }
      // 删除元素
      this.close(tag)
      // this.$store.commit('closeTag', tag)
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;

  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>