<template>
  <div>
    <el-tooltip :content="$t('navBar.guide')">
      <span id="guide-start" @click="onClick">
        <svg-icon icon="guide" />
      </span>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import steps from './steps'

let driver: Driver | null = null
const i18n = useI18n()

onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: i18n.t('guide.close'),
    nextBtnText: i18n.t('guide.next'),
    prevBtnText: i18n.t('guide.prev')
  })
})

const onClick = () => {
  driver?.defineSteps(steps(i18n))
  driver?.start()
}
</script>
