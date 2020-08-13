<template>
    <table>
      <tbody>
        <tr>
          <td>회사 정보</td>
        </tr>
        <tr>
          <td>{{ company.bs }}</td>
        </tr>
        <tr>
          <td>{{ company.catchPhrase }}</td>
        </tr>
        <tr>
          <td>{{ company.name }}</td>
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
