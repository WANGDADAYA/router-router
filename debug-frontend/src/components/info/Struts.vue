<template>
  <div v-loading="loading"
       element-loading-text="未完成分析"
  >
    <el-container>
      <el-main>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="400">
          <el-table-column
            prop="api"
            label="接口">
          </el-table-column>
          <el-table-column
            prop="name"
            label="映射类">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        count: <el-tag type="info">{{count}}</el-tag>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import {existTargetApi, getTargetDataApi, getStrutsModuleName} from "../../utils/dataApi";
import {onBeforeUnmount} from "vue";
import {Message} from "@/utils/message";

export default {
  name: "Struts",
  data() {
    return {
      tableData: [],
      loading: true,
      count: 0,
      moduleName:""
    }
  },
  mounted() {
    const timer = setInterval(()=>{
      if(!this.loading){
        clearInterval(timer)
        return
      }
      existTargetApi("struts").then(res => {
        if (!res.data.msg) {
          this.loading = true
        } else {
          this.loading = false
          getTargetDataApi('struts').then(res => {
            let mapkey = Object.keys(res.data.msg)
            this.count = mapkey.length
            let tmpList = []
            for(let i=0; i < mapkey.length; i++){
              let data = new Object()
              data.api = mapkey[i]
              data.name = res.data.msg[mapkey[i]]
              tmpList.push(data)
            }
            this.tableData = tmpList
          })
        }
      })
    }, 1000)
    onBeforeUnmount(() => {
      clearInterval(timer)
    });
  }
}
</script>

<style scoped>

</style>
