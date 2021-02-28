<template>
  <v-row justify="center">
    <v-dialog v-model="ShowPopup" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Yeni Kullanıcı</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Ad"
                  required
                  v-model="newUser.first_name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Soyad"
                  v-model="newUser.last_name"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  autocomplete="email"
                  label="Yorum"
                  v-model="newUser.description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">
            Çıkış
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Kaydet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "ShowDialog",
  data: () => ({
    newUser: {
      avatar:
        "https://robohash.org/doloresquamvoluptatem.bmp?size=50x50&set=set1",
      first_name: "",
      last_name: "",
      description: "",
      date: "22.02.2021",
    },
  }),
  computed: {
    ShowPopup() {
      return this.$store.getters.getDialog;
    },
  },
  methods: {
    close() {
      this.$store.commit("setDialog", false);
    },
    save() {
      this.$store.commit("setUser", this.newUser);
      this.$store.commit("setDialog", false);
      this.newUser.first_name = "";
      this.newUser.last_name = "";
      this.newUser.description = "";
    },
  },
};
</script>
<style scoped></style>
