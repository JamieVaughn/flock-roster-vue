<template>
  <v-app light>
      <v-navigation-drawer v-model='sideNav' @click.stop = "sideNav = !sideNav">
        <v-list>
          <v-list-tile>
          <v-list-tile-action>
            <v-icon left>keyboard_arrow_left </v-icon>
            </v-list-tile-action>
            <v-list-tile-content @click.stop = "sideNav = !sideNav">
              Close Navigation Panel
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for='item in menuItems' v-bind:key='item.title'>
            <v-list-tile-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar dark class='primary'>
        <v-toolbar-side-icon @click.stop = "sideNav = !sideNav" class='hidden-sm-and-up'></v-toolbar-side-icon>
        <v-toolbar-title>Flock Roster</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class='hidden-xs-only'>
          <v-btn flat v-for='item in menuItems' v-bind:key='item.title'>
            <v-icon dark left>{{ item.icon }}</v-icon>{{item.title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
    <main>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'supervisor_account', title: 'View Stock'},
          {icon: 'room', title: 'New Entry'},
          {icon: 'person', title: 'Profile'},
          {icon: 'face', title: 'Sign up'},
          {icon: 'lock_open', title: 'Sign in'}
        ]
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'

</style>

