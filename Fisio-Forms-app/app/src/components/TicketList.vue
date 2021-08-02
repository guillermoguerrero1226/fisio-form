<template>
  <div>
    <div v-if="loadingTickets">
      <masonry
        :gutter="{ default: '30px', 700: '15px' }"
        :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
      >
        <v-skeleton-loader
          class="mb-4"
          v-for="(item, i) in Array.from(Array(8).keys())"
          :key="i"
          elevation="2"
          type="card-avatar, actions"
        ></v-skeleton-loader>
      </masonry>
    </div>
    <masonry
      v-else-if="userTickets.length > 0"
      :gutter="{ default: '30px', 700: '15px' }"
      :cols="{ default: 4, 1000: 3, 700: 2, 500: 1 }"
    >
      <v-card class="mb-12" v-for="ticket in userTickets" :key="ticket.id">
        <v-card-title class="text-center d-flex justify-space-between">
          <span>{{ ticket.event.name }}</span>
        </v-card-title>
        <v-card-text>
          <div class="d-flex justify-lg-space-between my-2">
            <span>Fecha de Inicio: </span>
            <v-chip close-icon="mdi-delete" color="secondary" pill small>{{
              $date(ticket.event.initDate).format("DD/MM/YYYY")
            }}</v-chip>
          </div>
          <div class="d-flex justify-lg-space-between my-2">
            <span>Lugar: </span>
            <v-chip small pill>{{ ticket.event.place }}</v-chip>
          </div>
          <div class="d-flex justify-lg-space-between my-2">
            <span>Precio: </span>
            <v-chip outlined pill small>{{
              ticket.event.price | currency("$", 0)
            }}</v-chip>
          </div>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </masonry>
    <div v-else class="default--text d-flex justify-center">
      No hay boletas compradas
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TicketList",
  props: {
    tickets: {
      type: [],
    },
  },
  data: () => ({
    userTickets: [],
    loadingTickets: false,
  }),
  computed: {
    ...mapState("user", ["loggedUser"]),
    ...mapState("ticket", ["purchasedTickets"]),
  },
  methods: {
    ...mapActions("ticket", ["createAsync", "cleanCart", "getByUserIdAsync"]),
  },
  async created() {
    this.loadingTickets = true;
    if (this.tickets) {
      this.userTickets = this.tickets;
    } else {
      await this.getByUserIdAsync(this.loggedUser.user.id);
      this.userTickets = this.purchasedTickets;
    }
    this.loadingTickets = false;
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
