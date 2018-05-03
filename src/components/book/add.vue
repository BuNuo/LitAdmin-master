<template>
	<div>
	    <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
	      <el-form-item label="书名" prop="name">
	        <el-input v-model="addForm.name" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="作者" prop="author">
	        <el-input v-model="addForm.author" auto-complete="off"></el-input>
	      </el-form-item>
	      <el-form-item label="出版日期">
	        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.publishAt"></el-date-picker>
	      </el-form-item>
	      <el-form-item label="简介" prop="description">
	        <el-input type="textarea" v-model="addForm.description" :rows="8"></el-input>
	      </el-form-item>
	    </el-form>
	    <div slot="footer" class="dialog-footer">
	      <el-button @click.native="addFormVisible = false">取消</el-button>
	      <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
	    </div>
  </div>
</template>

<script>
export default{
	name:"addFrom",
	data(){
		return{
			addLoading:false,
			addFormRules: {
	          name: [{required:true, message: '请输入书名', trigger: 'blur'}],
	          author:[{required:true, message: '请输入作者', trigger: 'blur'}],
	          description:[{required:true, message: '请输入简介', trigger: 'blur'}]
	        },
	        addForm: {
	          name: '',
	          author: '',
	          publishAt: '',
	          description: ''
	        }
		}
		
	}
}
	
</script>