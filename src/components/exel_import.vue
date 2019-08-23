<template>
  <div class="aa">
    <input type="file" @change="importf(this)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/><br />
    <div style="margin-top: 50px;" @click="export2Excel">导出</div>
  </div>

</template>

<script>
   export default {
    name: "item",
    data() {
     return {
      msg: 'dcscdscds',
      }
    },
    methods: {
    importf(obj) {
      let _this = this;
      let inputDOM = this.$refs.inputer;   // 通过DOM取文件数据
      this.file = event.currentTarget.files[0];  
      var rABS = false; //是否将文件读取为二进制字符串
      var f = this.file;
      var reader = new FileReader();
    //if (!FileReader.prototype.readAsBinaryString) {
      FileReader.prototype.readAsBinaryString = function(f) {
      var binary = "";
      var rABS = false; //是否将文件读取为二进制字符串
      var pt = this;
      var wb; //读取完成的数据
      var outdata;
      var reader = new FileReader();
      reader.onload = function(e) {
        var bytes = new Uint8Array(reader.result);
        var length = bytes.byteLength;
        for(var i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        var XLSX = require('xlsx');
        if(rABS) {
        wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
          type: 'base64'
        });
        } else {
          wb = XLSX.read(binary, {
          type: 'binary'
          });
        }
        // outdata就是你想要的东西 excel导入的数据
        outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
        console.log(outdata)
        // excel 数据再处理
        let arr = []
        outdata.map(v => {
          let obj = {}
          obj.name = v.name
          obj.id = v.id
          arr.push(obj)
        })
        _this.accountList = [...arr];
        console.log(_this.accountList)
         _this.reload();
        }
        reader.readAsArrayBuffer(f);
     }
    if(rABS) {
      reader.readAsArrayBuffer(f);
 
    } else {
      reader.readAsBinaryString(f);
    }
    },
    export2Excel() {
      var that = this;
      require.ensure([], () => {
          const { export_json_to_excel } = require('./../excel/Export2Excel'); //这里必须使用绝对路径
          const tHeader = ['id','name',]; // 导出的表头名
          const filterVal = ['id','name',]; // 导出的表头字段名
          const list = [{
            id: '55',
            name: '陈然保'
          }];
          const data = that.formatJson(filterVal, list);
          let time1,time2 = '';
//          if(this.start !== '') {
//              time1 = that.moment(that.start).format('YYYY-MM-DD')
//          }
//          if(this.end !== '') {
//              time2 = that.moment(that.end).format('YYYY-MM-DD')
//          }
        export_json_to_excel(tHeader, data, `[${time1}-${time2}]提现管理excel`);// 导出的表格名称，根据需要自己命名
      })
    },
    formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
    }
    }
  }
</script>