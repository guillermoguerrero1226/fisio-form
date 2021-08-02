<template>
  <div>
    <v-fab-transition v-if="loggedUser.user && userTickets.length > 0">
      <v-btn color="success" fab fixed bottom right @click="buyTickets()">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-fab-transition>
    <TicketList :tickets="userTickets"></TicketList>
    <v-dialog v-model="dialog" persistent width="400">
      <v-card color="primary" dark>
        <v-card-text>
          Estamos finalizando el proceso de compra por favor espere
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import TicketList from "../components/TicketList";
export default {
  name: "ShoppingCart",
  components: {
    TicketList,
  },
  computed: {
    ...mapState("ticket", ["userTickets"]),
    ...mapState("user", ["loggedUser"]),
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    ...mapActions("ticket", ["createAsync", "cleanCart"]),
    async buyTickets() {
      const valor = this.userTickets.reduce(
        (a, b) => a + (parseInt(b.event.price) || 0),
        0
      );
      const confirm = await this.$dialog.confirm({
        text: `El total de la compra es: $${valor}`,
        title: "Finalizar compra",
        actions: {
          false: "Cancelar",
          true: "Comprar",
        },
      });
      if (confirm) {
        this.dialog = true;
        for (let i = 0; i < this.userTickets.length; i++) {
          const ticket = this.userTickets[i];
          const ticketToSave = {
            userId: this.loggedUser.user.id,
            eventId: ticket.event.id,
          };
          await this.createAsync(ticketToSave);
        }
        this.cleanCart();
        this.dialog = false;
        this.$router.push({ path: "mis-boletos" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/components/Home.scss";
</style>
