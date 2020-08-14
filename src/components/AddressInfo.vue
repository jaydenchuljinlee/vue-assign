<template >
    <table>
      <tbody>
        <tr>
          <td colspan="2">상세 주소 정보</td>
        </tr>
        <tr>
          <td colspan="2">{{ $store.state.user.address.street }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ $store.state.user.address.suite }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ $store.state.user.address.city }}</td>
        </tr>
        <tr>
          <td colspan="2">{{ $store.state.user.address.zipcode }}</td>
        </tr>
        <tr>
          <td>{{ $store.state.user.address.geo.lat }}</td>
          <td>{{ $store.state.user.address.geo.lng }}</td>
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

