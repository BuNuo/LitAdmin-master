<template>
	<div>
		<dynamic-form :form-config="form" v-model="hehe" ref="form-preview">
			<el-button @click='$router.go(-1)' :size="form.size">返回</el-button>
		<el-button @click='validate' :loading='loading' type="primary" :size='form.size'>提交</el-button>
		</dynamic-form>

	</div>
</template>

<script>
    import dynamicForm from '../dynamic-form/form'
    import formData from '@/data/formData.js'
	export default {
		components:{dynamicForm},
		data() {
		    return {
		      hehe: {},
		      loading: false,
		      form:formData.form1,
		    }
		},
		methods: {
		    validate() {
		        this.loading = true
		        const form = this.$refs['form-preview'].$children[0];
			    console.log(form)
			    this.loading = false
		        form.validate((valid) => {
		          this.loading = false;
		          if (valid) {
		            console.log('submit!');
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        });
		       
		    }
		}
	}
</script>