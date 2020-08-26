<template>
  <main-layout slot>
    <el-row class="toggleButton">
      <el-col :span="12">
        <el-button v-bind:class="{gridActive :gridActive}"
                   @click="toggleButton('grid')"><i class="el-icon-tickets"></i></el-button>
        <el-button v-bind:class="{cardActive :cardActive}"
                   @click="toggleButton('card')"><i class="el-icon-menu"></i></el-button>
        <el-button circle
                   type="primary"
                   @click="pageMove('w')"><i class="el-icon-edit"></i></el-button>
      </el-col>
      <el-col
              class="search-contents"
              :span="12">
        <el-input type="text" v-model="searchVal" @keyup.enter.native="search" placeholder="검색어를 입력해주세요.." />
        <el-button @click="reset">초기화</el-button>
      </el-col>
    </el-row>

    <el-row class="diary-contents">
      <el-timeline class="grid"
                   v-bind:class="{gridActive :gridActive}"
                   style="display:none">
        <el-timeline-item v-for="(diary, index) in getDiary"
                          v-bind:key="index"
                          v-bind:timestamp="diary.createdDate"
                          v-if="diary.isShow"
                          placement="top"
                          @click.native="pageMove(index)">
          <el-card class="grid-contents">
            <span>
              <h4>{{ diary.title }}</h4>
              <p>{{ diary.contents }}</p>
            </span>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <el-row v-bind:class="{cardActive :cardActive}"
              class="card"
              style="display:none">
        
          <el-card
                   v-for="(diary, index) in copy"
                   v-bind:key="index"
                   v-if="diary.isShow"
                   shadow="always">
            <div @click="pageMove(index)">
              <div slot="header" class="clearfix">
                <span>{{ diary.createdDate }}</span>
                <el-button style="float: right;
                          padding: 3px 0"
                           type="text"
                           @click="$store.dispatch('asyncDeleteDiary',index)">x</el-button>
              </div>
              <div class="card-title">
                <span>{{ diary.title }}</span>
              </div>
              <div class="card-contents">
                <span>{{ diary.contents }}</span>
              </div>
            </div>
          </el-card>
        
      </el-row>

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
        searchVal: '',//검색 input 값
        copy: [],// 현재 다이어리 배열의 복사본
        pageNum: 0,//이동할 다이어리 index
        cardActive: false,
        gridActive: true,
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
      })
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

        console.log(self.copy)
      },
      //input을 비우는 메서드
      reset()
      {

        let self = this

        self.searchVal=''
      },
      cellMouseHandler(row,column,cell,e)
      {

        let type = e.type

        if (type === 'mouseenter')
        {
          row.hover = true
          return
        }

        row.hover = false
        return
      },
      toggleButton(what) {

        let self = this

        if (what === 'card')
        {
          self.cardActive = true
          self.gridActive = false
        } else
        {
          self.cardActive = false
          self.gridActive = true
        }

      }
    }
  }
</script>

<style>
  .row-height-custom.el-table td {
    padding: 8px 0;
  }

  .el-row.diary-contents .el-row {
    display: flex;
    flex-flow: row wrap;
    overflow-y: scroll;
    height: 200px;
  }

  .card .el-col {
    margin: 1% 1% 1% 1%;
  }

  .cardActive, .gridActive {
    display: block !important;

  }

  button.cardActive, button.gridActive {
    background-color: #4ddff3b0;
  }

  .toggleButton.el-row {
    text-align:left;
  }

  .toggleButton .el-col {
    border:none;
  }

  .toggleButton.el-row > .el-button {
    margin-left:0;
    display: inline-block !important;
  }

  .el-timeline-item__timestamp.is-top {
      text-align:left;
  }

  .card-title, .card-contents {
      white-space: nowrap;
      overflow: hidden;
  }

  .grid-contents:hover, .el-card:hover {
    background-color: #ebeef5;
  }

  .el-card__header {
      border:none;
  }

  .card .el-card {
    flex: 1 1 calc(45.83333% );
    display: inline-block;
    min-width: 29.16667%;
    max-width: calc(5.83333%);
    margin: 10px
  }

  .toggleButton {
    justify-content: space-between;
    display:flex;
    margin-left: 40px;
    margin-bottom: 40px;
  }

  .search-contents {
    display: flex;
    justify-content:flex-end;
  }

  .search-contents > .el-input {
    width: 45.83333%;
  }

  .search-contents > .el-button {
    width: 15%;
  }

  .toggleButton > .el-col > .el-button, .toggleButton > .el-col > .el-input {
    display: inline-block !important;
  }
</style>
