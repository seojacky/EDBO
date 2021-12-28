<template>
  <div class="popup-background" ref="messagePopup">
    <div class="message-popup">
      <h3>{{message}}</h3>
      <div class="btn-close" v-on:click="handleBtnCloseClick">
        Зрозуміло
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isPopup', 'message'],
  name: 'MessagePopup',
  watch: { 
    isPopup: function(newVal) { 
      if (newVal === true) {
        this.$refs.messagePopup.style.display = 'block';
      }
    }
  },
  methods: {
    handleBtnCloseClick() {
      this.$refs.messagePopup.style.display = 'none';
      this.$emit('popup', false);
    }
  }
}
</script>

<style>
.message-popup {
  text-align: center;
  background-color: white;
  position: relative;
  width: 350px;
  padding: 30px;
  margin: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}
.message-popup h3 {
  font-weight: lighter;
}
.message-popup .btn-close {
  font-size: 20px;
  background-color: #3C8AB8;
  color: white;
  padding: 10px;
  transition: background-color 0.5s ease-out 50ms;
}
.message-popup .btn-close:hover {
  background-color: #004C79;
  cursor: pointer;
}
</style>