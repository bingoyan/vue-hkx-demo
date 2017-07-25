<template >
  <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <button type="button" v-on:click="submitUser" class="btn btn-default">提交</button>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'

    export default {
      computed: {
        ...mapState([
          'user_info'
        ])
      },
      methods: {
        // 通过mapActions从store中展开需要用到的ations
        ...mapActions([
          'submit'
        ]),
        submitUser () {
          const faqlist = this.submit({...this.user_info})
          console.log('>>>>>>>>>>>>')
          console.log(faqlist)
        }
        // submit () {
        //   let userDetails = {
        //     sex: 'Male',
        //     age: '12'
        //   }
        //   this.$store.commit('USER_INFO_SUBMIT', userDetails)
        // }
      }
    }
</script>
