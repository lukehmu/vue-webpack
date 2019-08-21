<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      :src="imageUrl"
      class="text-right pa-2"
    >
    </v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>ABV: {{ percentage }}%</v-card-text>
    <v-divider class="mx-4"></v-divider>

    <v-card-text>{{ description }}</v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text v-if="dateCreated">
      Added: {{ dateCreated | stringToDate }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="slug"
        text
        :to="{ name: 'beer-detail', params: { slug: slug }}"
        color="deep-purple accent-2"
      >
        <v-icon>mdi-mouse</v-icon>
        Detail link
      </v-btn>
    </v-card-actions>
    <!-- <v-card-text>Added: {{ beer.dateCreated | stringToDate }}</v-card-text> -->
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    imageUrl: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    percentage: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      default: '',
    },
    routeName: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    dateCreated: {
      type: Number,
      default: 0,
    },
  },
}
</script>
