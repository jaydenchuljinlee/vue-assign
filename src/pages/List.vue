<template>
  <main-layout slot>
    <div class="contents py-3 px-5 rounded-pill">
      <el-table class="mx-auto my-5 px-5 row-height-custom" :data="getDiary">
        <el-table-column prop="createdDate"
                         label="날짜">
        </el-table-column>
        <el-table-column prop="title"
                         label="제목">
        </el-table-column>
        <el-table-column prop="name"
                         label="작성자">
        </el-table-column>
        <el-table-column label="비고"
                         @mouseover="diary.hover=true"
                         @mouseleave="diary.hover=false">
          <button class="btn btn-secondary btn-sm" v-if="diary.isOwn&&diary.hover" @click="$store.dispatch('asyncDeleteDiary',index)">x</button>
          <span v-if="!diary.isOwn&&diary.hover">작성자가 아님</span>
        </el-table-column>
      </el-table>
      <table class="mx-auto my-5 px-5 table table-striped table-hover">
        <colgroup>
          <col width="20%" />
          <col width="60%" />
          <col width="5%" />
          <col width="15%" />
        </colgroup>
        <thead class="my-3 border-0">
          <tr>
            <td class="p-2" colspan="2">
              <button class="btn btn-outline-info float-left btn-sm" @click="pageMove('w')">쓰기</button>
            </td>
            <td>
              <input class="ml-5 rounded-pill" type="text" v-model="searchVal" @keyup.enter="search" placeholder="검색어를 입력해주세요.." />
            </td>
            <td>
              <button class="btn btn-outline-info btn-sm float-left" @click="reset">초기화</button>
            </td>
          </tr>
          <tr>
            <td class="p-2">날짜</td>
            <td class="p-2">제목</td>
            <td class="p-2">작성자</td>
            <td class="p-2">비고</td>
          </tr>
        </thead>
        <tbody class="my-3">
          <tr v-if="diary.isShow" v-for="(diary,index) in getDiary">
            <td class="p-2">{{ diary.createdDate }}</td>
            <td class="p-2 text-primary" @click="pageMove(index)" style="cursor:pointer">{{ diary.title }}</td>
            <td class="p-2">{{ diary.name }}</td>
            <td class="p-2" @mouseover="diary.hover=true" @mouseleave="diary.hover=false">
              <button class="btn btn-secondary btn-sm" v-if="diary.isOwn&&diary.hover" @click="$store.dispatch('asyncDeleteDiary',index)">x</button>
              <span  v-if="!diary.isOwn&&diary.hover">작성자가 아님</span>
            </td>
          </tr>
        </tbody>
      </table>
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
        searchVal: '',//검색 input 값
        copy: [],// 현재 다이어리 배열의 복사본
        pageNum: 0,//이동할 다이어리 index
      }
    },
    mounted()
    {

      let self = this

      //다이어리를 유동적으로 제어하기 위해 카피 배열을 만들어 줍니다.
      self.copy = self.getDiary

      //삭제 버튼 제어를 위한 forEach문
      self.copy.forEach((e) =>
      {

        //자기 자신이 쓴 글이면 삭제 버튼이 보이게 flag 변수를 true로 만들어 줍니다.
        if (e.name == self.getUser)
        {
          e.isOwn = true
        } else {
          e.isOwn = false
        } 
      })

    },
    components:
    {
      MainLayout
    },
    computed:
    {
      ...mapGetters({
        getUser: 'getuser',
        getDiary: 'getDiary',
      }),
    },
    actions:
    {
      ...mapActions({
        asyncDeleteDiary: 'asyncDeleteDiary',
      }),
    },
    methods:
    {
      //페이지 이동을 위한 메서드입니다.
      pageMove(param)
      {

        let self = this

        //인자값이 숫자로 들어올 때는 상세 페이지로 이동함을 의미합니다.
        if (typeof (param) === 'number')
        {

          self.pageNum = param

          //상세 페이지 이동
          self.$router.push("/diary/" + self.pageNum).catch(err => { })
          
        } else
        {//인자값이 문자로 들어올 때는 문자에 해당하는 페이지로 이동합니다.

          //쓰기 페이지 이동
          if (param == 'w')
          {

            self.$router.push("/diary/write").catch(err => { })
          }
        }
      },
      //해당 문자를 포함하는 제목에 대한 다이어리 객체를 화면에 보여줍니다.
      search()
      {

        let self = this

        //input을 통해 받은 문자
        const word = self.searchVal

        self.copy.forEach((e) =>
        {

          //현재 다이어리 제목에 해당 문자가 포함되어 있다면
          if (e.title.indexOf(word) == -1)
          {
            e.isShow = false
          } else {
            e.isShow = true
          }
        })

      },
      //input을 비우는 메서드
      reset()
      {

        let self = this

        self.searchVal=''
      }
    }
  }
</script>

<style>
  .row-height-custom.el-table td {
    padding: 8px 0;
  }

</style>
