<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="primary--text text-xs-center">Create New Entry</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>

        <form @submit.prevent="onCreateEntry">
        <v-layout row>
          <v-flex xs12 sm3 offset-sm3>
            <v-text-field name="name" label="Name" id="name" required v-model="name"></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field name="id" label="ID" id="id" required v-model="id"></v-text-field>
          </v-flex>
        </v-layout>


        <v-layout row>
          <v-flex xs12 sm2 offset-sm3>
            <v-text-field name="weight" label="Weight (lbs)" id="weight" required v-model="weight"></v-text-field>
          </v-flex>
          <v-flex xs12 sm2>
            <v-text-field name="Condition" label="Condition" id="condition" required v-model="condition"></v-text-field>
          </v-flex>
          <v-flex xs12 sm2>
            <v-text-field name="famacha" label="Famacha" id="famacha" required v-model="famacha"></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
           <v-flex xs12 sm6 offset-sm3>
            <v-menu
              lazy
              :close-on-content-click="false"
              v-model="menu"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-left="40"
              max-width="290px"
            >
              <v-text-field
                slot="activator"
                label="Date of Birth / Date of Checkup"
                v-model="dob"
                prepend-icon="event"
                readonly
                required
              ></v-text-field>
              <v-date-picker v-model="dob" no-title scrollable actions>
                <template scope="{ save, cancel }">
                  <v-card-actions>
                    <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                    <v-btn flat primary @click.native="save()">Save</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-menu>
          </v-flex>
        </v-layout>

        <v-layout row xs12 sm6>
          <v-flex xs6 sm1 offset-sm3>
            <img v-if="addPhoto" :src="thumb" class="placeholder">
            <div v-else class="placeholder"><span id="previewText">Image Preview</span><v-icon id="icon">photo</v-icon></div>
          </v-flex>
          <v-flex xs6 sm3 offset-sm2>
            <v-icon>add_a_photo</v-icon>
            <v-text-field name="thumb" label="Thumbnail Image Url" id="thumb" v-model="thumb"></v-text-field>
          </v-flex> 
        </v-layout>

        <v-layout row>
          <v-flex xs12 sm2 offset-sm3>
            <v-radio required class="radio" label="Male" v-model="sex" value="male"></v-radio>
            <v-radio required class="radio" label="Female" v-model="sex" value="female"></v-radio>
            <h6 v-if='sex' class="radio">{{ (sex==="female" && sex!=='') ? "Ewe" : "Ram" }}</h6>
          </v-flex>
          <v-flex xs12 sm3 offset-sm1>
            <v-text-field name="notes" label="Notes" id="notes" multi-line v-model="notes"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm5>
            <v-btn 
            class="primary" xs12 sm6 
            :disabled="!formIsValid"
            type="submit"
            >Submit Entry</v-btn>
          </v-flex>
        </v-layout>
        </form>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        id: '',
        thumb: '',
        weight: '',
        condition: '',
        famacha: '',
        dob: '',
        sex: '',
        notes: ''
      }
    },
    computed: {
      formIsValid () {
        return this.name !== '' &&
        this.id !== '' &&
        this.weight !== '' &&
        this.condition !== '' &&
        this.famacha !== '' &&
        this.dob !== '' &&
        this.sex !== ''
      },
      addPhoto () {
        return (this.thumb)
      }
    },
    methods: {
      onCreateEntry () {
        if (!this.formIsValid) {
          return
        }
        const entryData = {
          name: this.name,
          id: this.id,
          thumb: this.thumb,
          weight: this.weight,
          dob: this.dob,
          condition: this.condition,
          famacha: this.famacha,
          sex: this.sex,
          notes: this.notes
        }
        this.store.dispatch('createEntry', entryData)
        this.$router.push('/stock')
      }
    }
  }
</script>

<style scoped>
  .placeholder {
    height: 100px;
    width: 100px;
    border: 1px solid #bbb;
    border-radius: 0.5em;
  }
  #previewText {
    padding: 3px;
    color: #bbb;
  }
  #icon {
    font-size: 100px;
    margin: -13px auto;
    color: #bbb;
  }
  .radio {
    margin-bottom: -20px;
  }
</style>

