<style>
.block {
  display: block !important;
  display: flex !important;
}
</style>

<template>
  <el-form-item :rules="Rules" :label="item.label" :prop="item.key" :class="{'block':item.block}">

    <el-input v-if="item.type==='input'" v-bind="$attrs" v-on="$listeners" :type="item.subtype" :placeholder="item.placeholder" :disabled="item.disable" :readonly="item.readonly" :autosize="item.autosize"></el-input>

    <input-number v-else-if="item.type==='number'" v-bind="$attrs" v-on="$listeners" :min="item.min" :max="item.max" :decimal1="item.decimal1" :append="item.append" :prepend="item.prepend" :disabled="item.disabled"></input-number>

    <el-checkbox v-else-if="item.type==='switch' && item.appearance==='checkbox'" v-bind="$attrs" v-on="$listeners" :disabled="item.disabled"></el-checkbox>
    <el-switch v-else-if="item.type==='switch'" v-bind="$attrs" v-on="$listeners" :disabled="item.disabled"></el-switch>

    <el-rate v-else-if="item.type==='rate'" v-bind="$attrs" v-on="$listeners" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" text-color="#ff9900"></el-rate>

    <el-color-picker v-else-if="item.type==='color'" v-bind="$attrs" v-on="$listeners" :show-alpha="item.showAlpha" :color-format="item.format"></el-color-picker>

    <el-slider v-else-if="item.type==='slider'" v-bind="$attrs" v-on="$listeners" :range="item.isRange" :show-stops="item.showStops" :step="item.step" :min="item.min" :max="item.max"></el-slider>

    <el-radio-group v-else-if="item.type==='radio'" v-bind="$attrs" v-on="$listeners">
      <component :is="item.button?'el-radio-button':'el-radio'" v-for="o in item.options||ajaxOptions" :key='o.value' :label="o.value" :disabled="o.disabled" :border="item.border">{{o.label}}</component>
    </el-radio-group>

    <el-checkbox-group v-else-if="item.type==='checkbox'" :min="item.min" :max="item.max" v-bind="$attrs" v-on="$listeners">
      <component
        :is="item.button?'el-checkbox-button':'el-checkbox'"
        v-for="o in item.options||ajaxOptions"
        :key='o.value'
        :disabled="o.disabled"
        :label="o.value" :border="item.border">{{o.label}}</component>
    </el-checkbox-group>

    <el-select v-else-if="item.type==='select'" v-bind="$attrs" v-on="$listeners" :multiple="item.multiple" :disabled="item.disabled" :multiple-limit="item.multipleLimit">
      <el-option v-for="o in item.options||ajaxOptions" :key="o.value" :label="o.label" :value="o.value" :disabled="o.disabled">
      </el-option>
    </el-select>

    <el-cascader v-else-if="item.type==='cascader'" v-bind="$attrs" v-on="$listeners" :options="item.options||require('element-china-area-data')[item.areaShortcut]||ajaxOptions" :filterable="item.filterable" :disabled="item.disabled" :clearable="true"></el-cascader>

    <el-time-picker v-else-if="item.type==='time'" :is-range="item.isRange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :value-format="item.valueFormat" :format="item.valueFormat" :placeholder="item.placeholder" v-bind="$attrs" v-on="$listeners"></el-time-picker>

    <el-date-picker v-else-if="item.type==='date'" :type="item.subtype" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" :value-format="item.valueFormat" :format="item.viewFormat||item.valueFormat" :placeholder="item.placeholder" v-bind="$attrs" v-on="$listeners" :disabled="item.disabled"></el-date-picker>

    <richtext v-else-if="item.type==='richtext'" v-bind="$attrs" v-on="$listeners"></richtext>

    <el-upload v-else-if="item.type==='file'"  
    class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <span v-else>未知控件类型</span>

  </el-form-item>
</template>

<script>
import request from '@/utils/request'
import Richtext from '@/components/tinymce'
import inputNumber from './input-number'

export default {
  components: {
    Richtext,
    inputNumber
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ajaxOptions: [],
      imageUrl: ''
    }
  },
  methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  computed: {
    Rules() {
      const rules = this.item.rules
      if (rules === undefined) return undefined

      const R = []

      rules.forEach(rule => {
          R.push(rule)
      })

      return R
    }
  },
  created() {

  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
