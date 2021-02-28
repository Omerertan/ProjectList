<template>
  <v-app id="box">
    <ShowDialog style="max-height: 1px" />
    <div class="d-flex justify-end pa-0 my-8 col-md-12">
      <v-btn small fab dark color="indigo" @click="openDialog()">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
    <div class="d-flex justify-center">
      <v-container
        id="app"
        @mousedown="refreshStart"
        @mouseup="refreshEnd"
        @mousemove="refresh"
      >
        <div
          id="refreshContainer"
          class="d-flex justify-center align-center"
          :style="containerStyle"
        >
          <v-progress-circular
            :value="value"
            color="primary"
            v-if="isLoading && totalUser == mdata.length"
          ></v-progress-circular>
          <v-progress-circular
            :value="100"
            color="primary"
            indeterminate
            v-if="value == 100 && totalUser != mdata.length"
          ></v-progress-circular>
        </div>
        <Comment v-for="(item, index) in comments" v-bind="item" :key="index" />
        <Observer v-on:intersect="intersected" />
      </v-container>
    </div>
  </v-app>
</template>

<script>
import Observer from "./components/Observer";
import Comment from "./components/Comment";
import ShowDialog from "./components/ShowDialog";
export default {
  name: "App",

  components: { Observer, Comment, ShowDialog },
  data: () => ({
    comments: [],
    totalUser: 0,
    containerStyle: { height: "0px" },
    value: 0,
    initial: 0,
    isLoading: false,
    mouseClick: false,
    pStartY: 0,
    pCurrentY: 0,
  }),
  created() {
    this.mdata = this.$store.getters.getUserList;
    this.totalUser = this.mdata.length;
    this.initial = 0;
  },
  methods: {
    // It is triggered when the Observer component is displayed on the screen. Adds 20 new data to the Comments directory.
    intersected() {
      let i = this.initial;
      let con = this.initial + 20;

      for (i; i < con; i++) {
        this.comments.push({
          ...this.mdata[i],
          description:
            "lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          date: "22.02.2021",
        });
      }
      this.initial = i;
    },
    openDialog() {
      this.isLoading ? (this.isLoading = false) : false;
      this.$store.commit("setDialog", true);
    },
    // Activates when the mouse is clicked and the position of the cursor on the Y axis is taken.
    refreshStart(e) {
      this.mouseClick = true;
      this.pStartY = e.screenY;
    },
    /* It works when the mouse is clicked and moved. 
    The Y axis information at the end of the movement of the mouse is subtracted from the Y axis information 
    when the mouse is clicked and transferred to the changeY variable. 
    */
    refresh(e) {
      if (this.mouseClick == true) {
        this.pCurrentY = e.screenY;

        let changeY =
          this.pStartY < this.pCurrentY
            ? Math.abs(this.pStartY - this.pCurrentY)
            : 0;
        this.value = changeY < 100 ? changeY : 100;
        // console.log(this.value);
        if (changeY <= 120) {
          this.isLoading = true;
          this.containerStyle = {
            height: changeY + 50 + "px",
          };
        } else if (changeY >= 155) {
          this.containerStyle = {
            height: 155 + "px",
          };
        }
      }
    },
    // If the number of data in the comments array is not equal to the number of data in the userData array, the new data is added to the comments array.
    // The data in the comments string is listed on the page.
    refreshEnd() {
      if (this.totalUser != this.mdata.length) {
        this.comments = [...this.$store.getters.getUser, ...this.comments];
        this.totalUser = this.mdata.length;
      }
      this.mouseClick = false;
      this.isLoading = false;
      this.value = 0;
      this.pStartY = 0;
      this.pCurrentY = 0;
      this.containerStyle = {
        height: "0px",
      };
    },
  },
};
</script>
<style scoped>
#box {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
#app {
  max-height: 800px;
  overflow-y: scroll;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
