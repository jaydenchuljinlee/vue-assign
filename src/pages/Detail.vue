<template>
  <main-layout slot>
    <div class="contents p-3 rounded">
      <el-row class="text-right my-3">
        <el-col class="py-2" :span="24">
          <button class="btn btn-outline-info btn-sm" v-if="diary.isOwn" @click="$store.dispatch('asyncDeleteDiary',index)">삭제</button>
          <span v-if="!diary.isOwn">작성자만 삭제할 수 있습니다.</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="py-2" :span="6">작성일</el-col>
        <el-col class="py-2" :span="6">{{ diary.createdDate }}</el-col>
        <el-col class="py-2" :span="6">작성자</el-col>
        <el-col class="py-2" :span="6">{{ diary.name }}</el-col>
      </el-row>
      <el-row>
        <el-col class="py-2" :span="6">제목</el-col>
        <el-col class="py-2" :span="18">{{ diary.title }}</el-col>
      </el-row>
      <el-row>
        <el-col class="py-2" :span="24">
          <textarea class="form-control" rows="7" disabled>{{ diary.contents }}</textarea>
        </el-col>
      </el-row>
      <el-row>
        <el-button class="py-2" :span="6" @click="updateDiary">수정</el-button>
      </el-row>
    </div>
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

        self.$router.push({ name: "Write", params: {"param": self.diary}}).catch(err => { console.log(err) })
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
  .el-col {
    border: 1px solid #dee2e6
  }

</style>
