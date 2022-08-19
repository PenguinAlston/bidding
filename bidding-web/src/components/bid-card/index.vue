<template>
    <div class="bid-card">
        <div @click=""><h3 class="card-header">{props.title}</h3></div>

        <div class="'card-body">
          {
            props.no
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>项目编号</el-col>
                <el-col span={15}>{props.no}</el-col>
              </el-row>
              : null
          }
          {
            props.bidType
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>招标方式</el-col>
                <el-col span={15}>{props.bidType}</el-col>
              </el-row>
              : null
          }
          <el-row style="margin: 3px 0;">
            <el-col span={9}>发布时间</el-col>
            <el-col span={15}>{props.pushTime}</el-col>
          </el-row>
          <el-row style="margin: 3px 0;">
            <el-col span={9}>截止时间</el-col>
            <el-col span={15}>{props.endTime}</el-col>
          </el-row>
          {
            props.num
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>采购数量</el-col>
                <el-col span={15}>{props.num}</el-col>
              </el-row>
              : null
          }
          {
            props.maxPrice
              ? <el-row style="margin: 3px 0;">
                <el-col span={9}>最高限价</el-col>
                <el-col span={15} style="font-size: 16px; color: #cc3300;">{props.maxPrice}</el-col>
              </el-row>
              : null
          }
        </div>

        <div class="card-footer">
          {slots.default && slots.default()}
        </div>
      </div>
</template>

<script setup lang="ts"> 
    
     

</script>
<style scoped lang="scss">
@import "index.module.scss" 
</style>