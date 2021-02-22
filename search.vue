<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="row">
      <q-toolbar class="col"  >
        <q-toolbar-title>
        website Name
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>

      </q-tabs>

    </q-header>

    <q-page-container class="absolute-right" >
      <!-- This is where pages get injected -->
      <router-view  />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
