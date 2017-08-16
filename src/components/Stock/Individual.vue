<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-flex xs12>
            <v-card class="red darken-4 white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12>
                        <v-carousel style="height: 22em">
                            <a href="" target="_blank"><v-carousel-item 
                            v-for="(item,i) in items" 
                            v-bind:src="item.src" 
                            :key="i"
                            ></v-carousel-item></a>
                        </v-carousel>
                  </v-flex>
                  <v-flex xs12>
                    <div>
                      <div class="headline">Sheep Name</div>
                      <div>DOB, gender</div>
                      <div>Placeholder for Graphs of Selected data from below</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-card>
        <br></br>
        <v-flex>
        <v-expansion-panel expand>
          <v-expansion-panel-content v-for="(item,i) in items.length" :key="i" :items="items" v-bind:value="item === 2">
            <div slot="header">Check Up Date & offspring</div>
              <v-card>
              <v-data-table
                    v-bind:headers="headers"
                    v-bind:items="items"
                    hide-actions
                    class="elevation-1"
                    >
                    <template slot="items" scope="props">
                    <td class="text-xs-center">{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.id }}</td>
                    <td class="text-xs-right">{{ props.item.weight }}</td>
                    <td class="text-xs-right">{{ props.item.dob }}</td>
                    <td class="text-xs-right">{{ props.item.condition }}</td>
                    <td class="text-xs-right">{{ props.item.famacha }}</td>
                    <td class="text-xs-right">{{ props.item.notes }}</td>
                    </template>
                </v-data-table>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          // { text: 'Photo', align: 'center', sortable: false, value: 'thumb' },
          { text: 'Name', align: 'center', value: 'name' },
          { text: 'ID', value: 'id' },
          { text: 'Weight (lbs)', value: 'weight' },
          { text: 'Date of Birth', value: 'dob' },
          { text: 'Condition', value: 'condition' },
          { text: 'FAMACHA', value: 'famacha' },
          { text: 'Notes', sortable: false, value: 'notes' }
        ],
        items: [
          {
            value: false,
            photo: '',
            thumb: 'https://yt3.ggpht.com/-jP6v09aZE60/AAAAAAAAAAI/AAAAAAAAAAA/bjlJ7KExLQk/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
            name: 'Eige',
            id: 1103,
            weight: 131,
            dob: '05-15-2012',
            condition: 4,
            famacha: 3,
            notes: 'BBX'
          }
        ]
      }
    },
    props: ['id'],
    computed: {
      stock () {
        return this.$store.getters.loadedStock(this.id)
      }
    }
  }
</script>
