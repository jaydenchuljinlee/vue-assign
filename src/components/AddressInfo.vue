<template>
    <table>
      <tbody>
        <tr>
          <td colspan="2">상세 주소 정보</td>
        </tr>
        <tr>
          <td colspan="2">{{ addr.street }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ addr.suite }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ addr.city }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ addr.zipcode }}</td>
        </tr>
        <tr>
          <td>{{ addr.geo.lat }}</td>
          <td>{{ addr.geo.lng }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>

export default {
    name: 'AddressInfo',
    props: ['addr']
}
</script>

<style scoped>
  table {
    display: inline;
  }

  table tr td{
    border: 1px solid black;
  }
</style>

