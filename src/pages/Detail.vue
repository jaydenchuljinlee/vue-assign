<template>
  <main-layout slot>
    <el-row>
      <span>{{ diary.createdDate }}</span>
    </el-row>

    <el-row class="detail-header">

      <!-- 제목 -->

      <el-col :span="12">
        <span>{{ diary.title }}</span>
        <span v-if="diary.weather==='sunny'"><i class="el-icon-sunny"></i></span>
        <span v-if="diary.weather==='cloudy'"><i class="el-icon-cloudy"></i></span>
        <span v-if="diary.weather==='rain'"><i class="el-icon-heavy-rain"></i></span>
        <span v-if="diary.weather==='snow'"><i class="el-light-rainy"></i></span>
        <span>{{ diary.feeling }}</span>
      </el-col>

      <!-- 버튼 -->

      <el-col :span="12" class="detail-btn">
        <el-col :span="2">
          <el-button circle
                     typeof="default"
                     @click="pageMove('w')"><i class="el-icon-back"></i></el-button>
        </el-col>
        <!-- 자기 자신일 때만 수정 버튼이 나옵니다. -->
        <el-col :span="2"
                v-if="diary.isOwn">
          <el-button circle
                     type="primary"
                     @click="updateDiary"><i class="el-icon-edit"></i></el-button>
        </el-col>
        <!-- 자기 자신일 때만 삭제 버튼이 나옵니다. -->
        <el-col :span="2"
                v-if="diary.isOwn">
          <el-button circle
                     type="primary"
                     @click="pageMove('w')"><i class="el-icon-delete"></i></el-button>
        </el-col>
      </el-col>
    </el-row>

    <!-- 내용 -->
    <el-row>
      <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                value="diary.contents">
      </el-input>
    </el-row>

  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/Main'
  import { mapGetters, mapActions } from 'vuex'

  export default
  {
    data()
    {
      return {
        index: 0,// 현재 다이어리의 index 번호
        diary: {},//현재 다이어리 객체
      }
    },
    mounted()
    {

      let self = this
      let url = window.location.href//현재 url

      self.index = url.charAt(url.length - 1)//url index 번호

      self.diary = self.$store.getters.getDiary[self.index]// 다이어리 객체 생성

      //삭제 버튼을 보여줄지 체크
      if (self.getUser == self.diary.name)
      {
        self.diary.isOwn = true
      }
      
    },
    components:
    {
      MainLayout
    },
    methods:
    {
      updateDiary()
      {
        let self= this

        let url = window.location.href//현재 url

        self.index = url.charAt(url.length - 1)//url index 번호

        self.$router.push({ name: "Write", params: { "param": self.diary, "index": self.index}}).catch(err => { console.log(err) })
      }
    },
    computed:
    {
    ...mapGetters({
      getUser: 'getuser',
      getDiary: 'getDiary',
    }),
    },
    watch:
    {
      $route(to, from)
      {
        let self = this
        let url = window.location.href//현재 url

        self.index = url.charAt(url.length - 1)//url index 번호

        self.diary = self.$store.getters.getDiary[self.index]// 다이어리 객체 생성

        //삭제 버튼을 보여줄지 체크
        if (self.getUser == self.diary.name) {
          self.diary.isOwn = true
        }
      }
    },
    actions:
    {
      ...mapActions({
        asyncInsertDiary: 'asyncInsertDiary',
        asyncDeleteDiary: 'asyncDeleteDiary',
      }),
    }
  }
</script>

<style>

  .el-row {
    text-align:left;
    display:flex;
    align-items: center;
    margin: 10px;
  }

  .detail-header {

    padding-bottom: 5px;
    border-bottom: 2px solid #e3e5e7;
  }

  .detail-btn{
    display: flex;
    justify-content: flex-end;
  }

</style>
