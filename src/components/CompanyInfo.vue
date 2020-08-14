<template>
    <table>
      <tbody>
        <tr>
          <td>회사 정보</td>
        </tr>
        <tr>
          <td>{{ $store.state.user.company.bs }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.user.company.catchPhrase }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.user.company.name }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>

export default {
    name: 'CompanyInfo',
    props: ['company']
}
</script>

<style scoped>
  table {
    display: inline;
  }

  table tr td {
    border: 1px solid black;
  }
</style>
