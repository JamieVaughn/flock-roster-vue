<template>
  <v-card>
    <v-card-title>
      <h4 class="primary--text heading">Your Flock Roster</h4>
      <v-spacer></v-spacer>
      <v-text-field append-icon="search" label="search database" single-line hide-details v-model="search">
      </v-text-field>
    </v-card-title>
    <v-data-table dark v-bind:headers="headers" v-bind:items="stock" v-bind:search="search">
      <template slot="headers" scope="props">
        <tr>
          <th class="text-xs-right">
            <v-checkbox right dark color="grey"
            v-model="displayThumb"
            @click="displayThumb = !displayThumb"
            label="Pic"
            ></v-checkbox>
          </th>
          <th v-for="header in props.headers" :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
          >
            <v-icon>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" scope="props">
        <td class="text-xs-left">
          <img v-if="displayThumb" :src="props.item.thumb">
          <div v-else style="width: 100px;"></div>
          <!-- <v-edit-dialog 
          @open="props.item._name = props.item.name"
          @cancel="props.item.name = props.item._name || props.item.name"
          lazy>
          {{ props.item.name }}
          <v-text-field slot="input"
          label="Edit"
          v-bind:value="props.item.name"
          v-on:change="e => props.item.name = e.target.value"
          single-line counter="counter"></v-text-field>
          </v-edit-dialog> -->
        </td>
        <td class="text-xs-left">
          <v-btn fab flat dark small v-bind:to="/stock/ + props.item.id">
            <v-icon light>visibility</v-icon>
          </v-btn>
          <span >{{ props.item.name }}</span>
        </td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.weight }}</td>
        <td class="text-xs-right">{{ props.item.dob }}</td>
        <td class="text-xs-right">{{ props.item.condition }}</td>
        <td class="text-xs-right">{{ props.item.famacha }}</td>
        <td class="text-xs-right">{{ props.item.notes }}</td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        pagination: {},
        displayThumb: true,
        headers: [
          // { text: 'Photo', align: 'center', sortable: false, value: 'thumb' },
          { text: 'Name', align: 'center', value: 'name' },
          { text: 'ID', value: 'id' },
          { text: 'Weight (lbs)', value: 'weight' },
          { text: 'Date of Birth', value: 'DOB' },
          { text: 'Condition', value: 'condition' },
          { text: 'FAMACHA', value: 'famacha' },
          { text: 'Notes', sortable: false, value: 'notes' }
        ]
      }
    },
    computed: {
      stock () {
        return this.$store.getters.loadedStock
      }
    }
  }
</script>
