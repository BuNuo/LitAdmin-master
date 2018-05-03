<template>
	<div>
	<div v-for="item in lists">
   <div class="list-item" v-if="item.type === 'input'">
    <label>用户名</label>
    <input type="text" v-model="item.value" class="form-control">
   </div>
   <!-- <div class="list-item" v-if="item.type === 'input'">
    <label>密码</label>
    <input type="text" v-model="item.value" :value="item.defaultValue" class="form-control">
   </div> -->
   <!-- <div class="list-item" v-if="item.type === 'textarea'">
    <label>说明</label>
    <textarea rows="3" v-model="item.value" :value="item.defaultValue" class="form-control"></textarea>
   </div> -->
   <!-- <div class="list-item" v-if="item.type === 'select'">
    <label>性别</label>
    <select v-model="item.value" :value="item.defaultValue">
      <option v-for="sub in item.source" :value="sub.value">{{sub.label}}</option>
    </select>
   </div> -->
   </div>
   </div>
</template>

<script>
	export default{
		name:"dForm",
		data(){
			lists: [{
				 type: 'input',
				 defaultValue: 'tom',
				 value: 'tom'
				}, {
				 type: 'textarea',
				 defaultValue: '123456',
				 value: '123456'
				}, {
				 type: 'select',
				 defaultValue: '1',
				 value: '0',
				 source: [{
				  value: '1',
				  label: '男'
				 }, {
				  value: '2',
				  label: '女'
				 }]
				}]
				
		},
		methods:{

		}
	}
</script>