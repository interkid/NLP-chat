<template>
  <section class="caht-bot">
    <div class="chat-bot-list-container">
      <ul class="chat-bot-list">
        <li class="message">

        </li>
      </ul>
    </div>
    <div class="chat-input">
      <input 
        type="text"
        v-model="message" 
        @keyup.enter="sendMessage"
       />
      <button @click="sendMessage">Send</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChatBot',
  data: () => ({
    message: '',
    messages: []
  }),
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.currentMessage,
        author: 'client'
      })

      this.$axios.get("FreeAPIのアドレス")
      .then(res => {

      })
    }
  }
}
</script>

<style scoped>

</style>
