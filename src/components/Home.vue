<template>
 <v-container>
   <v-layout row wrap class="mb-2">
     <v-flex xs12 sm6 class="text-xs-center text-sm-right">
       <v-btn large router to="/stock" class="info">
       Explore Database
       </v-btn>
     </v-flex>
     <v-flex xs12 sm6 class="text-xs-center text-sm-left">
       <v-btn large router to="/new" class="info">
       Add New Entry
       </v-btn>
     </v-flex>
   </v-layout>
   <v-layout>
     <v-flex xs12>
       <v-carousel>
        <v-carousel-item v-for="stock in entries" :src="stock.imageUrl" :key="stock.id">
          <div class="title">
            {{ stock.name }}
          </div>
        </v-carousel-item>
      </v-carousel>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
  export default {
    data () {
      return {
        entries: [
          {imageUrl: 'http://i.dailymail.co.uk/i/pix/2011/08/12/article-2025247-0D66F7BC00000578-184_634x493.jpg', id: '01019', name: 'Split'},
          {imageUrl: 'http://www.clker.com/cliparts/5/5/6/1/1207886455352629998Gerald_G_Sheep_Eating.svg', id: '00001', name: 'Ewe'},
          {imageUrl: 'http://www.topcut.com.au/Public/images/topcut-cuts-lamb.svg', id: '0000', name: 'lamb'}
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    font-size: 2em;
  }
</style>

