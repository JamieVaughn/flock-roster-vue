<template>
  <v-app light>
    <main>

      <v-navigation-drawer v-model='sideNav'>
        <v-list>
          <v-list-tile v-for='item in menuItems' :key='item.title'>
            <v-list-tile-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar dark class='primary'>
        <v-toolbar-title>Flock Roster</v-toolbar-title>
        <v-toolbar-side-icon @click.native.stop = "sideNav = !sideNav" class='hidden-sm-and-up'>
        </v-toolbar-side-icon>

        <v-spacer></v-spacer>
        <v-toolbar-items class='hidden-xs-only'>
          <v-btn flat v-for='item in menuItems' :key='item.title'>
            <v-icon dark left>{{ item.icon }}</v-icon>{{item.title }}</v-btn>
        </v-toolbar-items>

      </v-toolbar>

    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icons: 'supervisor_account', title: 'View Stock'},
          {icons: 'room', title: 'New Entry'},
          {icons: 'person', title: 'Profile'},
          {icons: 'face', title: 'Sign up'},
          {icons: 'lock_open', title: 'Sign in'}
        ]
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'

</style>

