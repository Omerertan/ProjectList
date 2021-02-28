<template>
  <v-container class="pa-0 col-md-8">
    <v-col class="d-flex pa-1 col-md-12">
      <v-row class="fluid ma-0">
        <v-col class="col-md-2" style="max-width: 50px">
          <img :src="avatar" alt="" />
        </v-col>
        <v-col class="col-md-9">
          <v-row class="d-flex justify-end col-md-12">
            <v-col class="d-flex col-md-9">
              {{ id }}# {{ first_name }} {{ last_name }}
            </v-col>
            <v-col class="d-flex col-md-3">
              <small>{{ date }}</small>
            </v-col>
          </v-row>
          <v-row class="d-flex col-md-12">
            <v-col>
              <p>
                {{ description }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "comment",
  props: {
    avatar: String,
    id: Number,
    first_name: String,
    last_name: String,
    date: String,
    description: String,
  },
};
</script>
<style scoped></style>

<script>
export default {
  name: "comment",
  props: {
    avatar: String,
    id: Number,
    first_name: String,
    last_name: String,
    date: String,
    description: String,
  },
};
</script>
<style scoped>
div {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>
