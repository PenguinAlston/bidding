<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :background="background"
        :layout="layout"
        :page-sizes="pageSizes"
        :total="total"
        v-bind="$attrs"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits, defineProps } from 'vue'
import { scrollTo } from '../../utils/scroll-to'

const emit = defineEmits(['update:page', 'update:limit', 'pagination'])

const props = defineProps({
  total: {
    require: true,
    type: Number
  },
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  pageSizes: {
    type: Array,
    default() {
      return [10, 15, 20, 30, 50]
    }
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  background: {
    type: Boolean,
    default: true
  },
  autoScroll: {
    type: Boolean,
    default: true
  },
  hidden: {
    type: Boolean,
    default: false
  },
  to: {
    type: Number,
    default: 0
  }
})

const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    emit('update:page', val)
  }
})

const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    emit('update:limit', val)
  }
})

const handleSizeChange = (val: number) => {
  emit('pagination', { page: currentPage, limit: val })
  if (ref(props.autoScroll).value) {
    scrollTo(props.to, 500)
  }
}

const handleCurrentChange = (val: number) => {
  emit('pagination', { page: val, limit: pageSize })
  if (ref(props.autoScroll).value) {
    scrollTo(props.to, 500)
  }
}
</script>

<style scoped lang="scss">
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  /*text-align: center;*/
}
.pagination-container.hidden {
  display: none;
}
</style>
