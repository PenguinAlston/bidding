<template>
  <el-card>
    <el-table :data="allPermission" style="width: 100%;" border row-key="id" default-expand-all>
      <el-table-column prop="permissionName" :label="$t('permission.name')" width="240" align="center"/>
      <el-table-column prop="permissionMark" :label="$t('permission.mark')" width="240" align="center"/>
      <el-table-column prop="permissionDesc" :label="$t('permission.desc')" align="center"/>
      <el-table-column :label="$t('role.status')" #default="{ row }" width="120" align="center">
        <tag-status :status="row.status"/>
      </el-table-column>
      <el-table-column prop="createTime" :label="$t('role.createTime')" width="240" align="center"/>
    </el-table>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { fetchPermissionListApi } from '@/api/auth'
import { watchSwitchLang } from '@/utils/i18n'
import TagStatus from '@/components/tag-status'

const allPermission: any = ref([])
const getPermissionList = async () => {
  const result: any = await fetchPermissionListApi()
  allPermission.value = result.rows
}

getPermissionList()
watchSwitchLang(getPermissionList)
</script>

<style lang="scss" scoped>

</style>
