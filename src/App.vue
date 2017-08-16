<template>
  <v-app light>
      <v-navigation-drawer temporary v-model='sideNav' @click = "sideNav = !sideNav">
        <v-list>
          <v-list-tile>
          <v-list-tile-action>
            <v-icon left>keyboard_arrow_left </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Close Navigation Panel
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for='item in menuItems' v-bind:key='item.title' :to="item.link">
            <v-list-tile-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar dark class='primary'>
        <v-toolbar-side-icon @click.stop = "sideNav = !sideNav" class='hidden-sm-and-up'></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to='/' tag='span' style='cursor: pointer'>Flock Roster</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class='hidden-xs-only'>
          <v-btn flat v-for='item in menuItems' :key='item.title' :to="item.link">
            <v-icon dark left>{{ item.icon }}</v-icon>{{item.title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
            {icon: 'face', title: 'Sign up', link: '/signup'},
            {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'list', title: 'View Stock', link: '/stock'},
            {icon: 'add_box', title: 'New Entry', link: '/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'

</style>

