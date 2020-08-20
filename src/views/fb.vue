<template>
  <div>
    <h1>Hello {{ this.userName }}</h1>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "../components/Charts";
export default {
  data() {
    return {
      accessToken: "",
      userID: "",
      userName: "",
    };
  },
  components: {
    Chart,
  },
  methods: {
    getFriendsList() {
      debugger;
      //   FB.api(path, method, params, callback);
      let self = this;
      FB.api(
        `/me/taggable_friends`,
        "GET",
        {
          access_token: self.accessToken,
          fields: "id,name",
        },
        function(response) {
          debugger;
          // Insert your code here
        }
      );
    },

    getUserInformation() {
      let self = this;
      FB.api("/me", "GET", { fields: "id,name" }, function(response) {
        debugger;
        self.userID = response.id;
        self.userName = response.name;
        self.getFriendsList();
        // Insert your code here
      });
    },

    getAccessToken() {
      let self = this;
      FB.login(
        function(response) {
          console.log(response);
          self.accessToken = response.accessToken;
          self.getUserInformation();
        },
        { scope: "user_friends" }
      );
    },
  },
  created() {
    // this.getLoginStatus();
    this.getAccessToken();
  },
};
</script>

<style></style>
