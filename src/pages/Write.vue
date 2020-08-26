<template>
  <main-layout slot>

    <!-- 제목 -->
    
    <el-row>
      <span>제목</span>
      <el-input
                v-model="diary.title"
                placeholder="제목을 입력해주세요,,,">{{ diary.title }}</el-input>
    </el-row>

    <!-- 날씨 -->

    <el-row>
      <span>날씨</span>
      <el-radio-group v-model="diary.weather" value="diary.weather">
        <el-radio-button label="sunny"><i class="el-icon-sunny"></i></el-radio-button>
        <el-radio-button label="cloudy"><i class="el-icon-cloudy"></i></el-radio-button>
        <el-radio-button label="rain"><i class="el-icon-heavy-rain"></i></el-radio-button>
        <el-radio-button label="snow"><i class="el-icon-light-rain"></i></el-radio-button>
      </el-radio-group>
    </el-row>

    <!-- 기분 -->

    <el-row>
      <span>기분</span>
      <el-select
                 v-model="diary.feeling"
                 value="diary.feeling">
        <el-option label="기쁨"
                   value="기쁨">
        </el-option>
        <el-option label="슬픔"
                    value="슬픔">
        </el-option>
        <el-option label="화남"
                    value="화남">
        </el-option>
      </el-select>
    </el-row>

    <!-- 내용 -->

    <el-row>
      <span>내용</span>
      <el-input type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="내용을 입력해주세요..."
                v-model="diary.contents">
      </el-input>
    </el-row>

    <!-- 저장/취소 -->

    <el-row class="complete-section">
      <el-button @click="update"
                 v-if="isUpdate">수정</el-button>
      <el-button @click="save"
                 v-if="!isUpdate">저장</el-button>
      <el-button @click="cancel">취소</el-button>
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
        diary: {
          title: '',
          contents: '',
          name: '',
          createdDate: '',
          updatedDate: '',
          isShow: true,
          weather: 'sunny',
          feeling: '기쁨',
        },
        isUpdate: false,
      }
    },
    created()
    {

      let self = this

      let today = new Date()          // 대한민국 표준시

      let year = today.getFullYear() // 년도 정보
      let month = today.getMonth() + 1// 월 정보
      let date = today.getDate()     // 날짜 정보

      if (self.$route.params.param === undefined) {

        self.diary.name = self.getUser

        self.diary.updatedDate = year + "년 " + month + "월 " + date + "일 "
      } else {

        self.isUpdate = true

        self.diary = self.$route.params.param

        self.diary.createdDate = year + "년 " + month + "월 " + date + "일 "
      }
      
      
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
    methods:
    {
      //다이어리 작성 후 저장하는 메서드
      update() {

        let self = this

        //제목이나 내용이 비어있다면
        if (self.diary.title == '' || self.diary.contents == '') {
          alert("제목과 내용을 채워주세요!")
          return
        }

        var obj = { 'diary': self.diary, 'index': self.$route.params.index}

        //vuex를 통해 다이어리 배열에 저장
        self.$store.dispatch('asyncUpdateDiary', obj)
      },
      //다이어리 작성 후 저장하는 메서드
      save()
      {

        let self = this

        //제목이나 내용이 비어있다면
        if (self.diary.title == '' || self.diary.contents == '')
        {
          alert("제목과 내용을 채워주세요!")
          return
        }

        self.$route.params.index

        //vuex를 통해 다이어리 배열에 저장
        self.$store.dispatch('asyncInsertDiary', self.diary)
      },
      //작성 도중 취소했을 때의 메서드
      cancel()
      {

        let self = this

        //리스트 페이지로 이동
        self.$router.push('List')
      },

    },
    actions:
    {
      ...mapActions({
        asyncInsertDiary: 'asyncInsertDiary',
        asyncUpdateDiary: 'asyncUpdateDiary',
        asyncSetUser: 'asyncSetUser'

      }),
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .el-row {
      display:flex;
      justify-content:flex-start;
      align-items: center;
  }

    .el-row.complete-section {
      justify-content: center;
    }

  .el-input, .el-textarea {
      width: 80%;
  }

  .el-row > div, .el-row > span {
      text-align:left;
      margin: 20px;
  }
</style>
