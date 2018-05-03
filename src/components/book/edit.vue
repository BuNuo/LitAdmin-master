<template>
  <div>
    <el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
      <el-form-item label="书名" prop="name">
        <el-input v-model="editForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="editForm.author" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="出版日期">
        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.publishAt"></el-date-picker>
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <el-input type="textarea" v-model="editForm.description" :rows="8"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="editFormVisible = false">取消</el-button>
      <el-button type="primary" @click.native="editSubmit">提交</el-button>
    </div>
  </div>
</template>

<script>
export default{
  name:"editFrom",
  props:{
    id:String
  },
  data(){
    return{
      editFormRules: {
          name: [
            {required:true, message: '请输入书名', trigger: 'blur'}
          ],
          author: [
            {required:true, message: '请输入作者', trigger: 'blur'}
          ],
          description: [
            {required:true, message: '请输入简介', trigger: 'blur'}
          ]
        },
        editForm: {
          id: 0,
          name: '',
          author: '',
          publishAt: '',
          description: ''
        }
    }
  },
  methods:{
    showEdit(id){
      console.log(id);
    }
  },
  mounted(){
    this.showEdit(this.id);
  },
  watch: {
    id: function(newValue, oldValue) {
      this.showEdit(newValue)
    }
  }
  
}
  
</script>