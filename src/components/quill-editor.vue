<template>
  <div>
    <quill-editor 
      v-model="content" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
    <!-- 富文本内容 -->
    <div class="text"></div>
    <button v-on:click="saveHtml">保存</button>
  </div>
</template> 
<script>
    import { quillEditor } from 'vue-quill-editor'
//  import $ from 'jquery'//先安装jquery
    export default{
      data(){
        return {
          content:null,
          editorOption:{
             modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                    ]
                }
          },
          str: '',
        }
      },
      computed: {
        editor() {
          return this.$refs.myQuillEditor.quill;
        },
      },
        methods:{
          escapeStringHTML(str) {
            this.str = str.replace(/&lt;/g,'<');
            this.str = str.replace(/&gt;/g,'>');
            return this.str;
        },
          onEditorBlur(){//失去焦点事件
          },
          onEditorFocus(){//获得焦点事件
          },
          onEditorChange(){//内容改变事件
            //console.log(this.content)
          //$('.text').html(this.content)
          },
          saveHtml(event){//点击保存按钮保存
            alert(this.content);
            console.log(this.escapeStringHTML(this.content))
          
        }
      }
    }
</script>  