<template>
    <div>
        <!-- home -->
        <router-view></router-view>
        <Nav class="navBar"></Nav>
    </div>
</template>

<script>
import Nav from '../../components/Nav/Nav.vue'
export default {
  components: { Nav },

}
</script>

<style scoped>
.navBar{
  position: fixed;
  bottom: 0;
  display: inline-block;
  height: 49px;
  width: 100px;
  /* background-color: #ccc; */
  /* border-top: 1px solid #fafafa; */
  border-top: 1px solid #e0e0e0;
  z-index: 99;
  background-color: #fff;
}
</style>