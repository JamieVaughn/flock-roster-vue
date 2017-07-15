<template>
  <v-app light>
    <main>
      <v-navigation-drawer v-model='sideNav'>
        <v-list>
          <v-list-tile>
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
            
          </v-list-tile-action>
          <v-list-tile-content>
              View Ewes
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar dark class='primary'>
        <v-toolbar-title>Flock Roster</v-toolbar-title>
        <v-toolbar-side-icon @click.native.stop='sideNav = !sideNav' class='hidden-sm-and-up'></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class='hidden-xs-only'>
          <v-btn flat><v-icon dark left>view_list</v-icon>Ewes</v-btn>
        </v-toolbar-items>    
        
      </v-toolbar>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
